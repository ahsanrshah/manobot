"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";

/* =====================================================
   Frame sequence config
   ===================================================== */

// Total number of frames extracted (see the ffmpeg command in chat).
// Must match exactly how many frame_XXXX.jpg files you actually have.
const FRAME_COUNT = 731;
const FRAME_ASPECT_RATIO = 1400 / 788; // matches the exported frame dimensions

const FRAME_PATH = (index: number) =>
  `/frames/frame_${String(index + 1).padStart(4, "0")}.jpg`;

// Same reasoning as the video version: scroll progress rarely hits a
// clean 1.0, so we compress the sequence into the first END_BUFFER of
// the scroll range and hold on the last frame for the remainder.
const END_BUFFER = 0.96;

const EDGE_FEATHER_PX = 100;
const PAGE_BG = "#FFFFFF";

export default function BuildManoBotCanvas() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const targetProgressRef = useRef(0);
  const rafId = useRef<number | null>(null);

  const [loaded, setLoaded] = useState(false); // true once frame 0 is ready — scrubbing can start
  const [loadProgress, setLoadProgress] = useState(0);
  const loadedFlagsRef = useRef<boolean[]>(new Array(FRAME_COUNT).fill(false));

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooths out jittery raw wheel/trackpad deltas before they drive
  // frame selection.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    mass: 0.4,
  });

  useMotionValueEvent(smoothProgress, "change", (progress) => {
    targetProgressRef.current = progress;
  });

  /* =====================================================
     Progressive loading.
     731 frames at this resolution is ~50MB — too much to
     block scrolling on. Instead: load frame 0 first and
     unlock scrubbing immediately, then keep loading every
     other frame in the background. If the scroll position
     asks for a frame that isn't in yet, drawFrame() falls
     back to the nearest earlier frame that IS loaded, so
     scrubbing never blocks — it just briefly shows a
     slightly-behind frame until the real one finishes.
     ===================================================== */
  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(FRAME_COUNT);

    const loadFrame = (i: number) => {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        if (cancelled) return;
        loadedFlagsRef.current[i] = true;
        loadedCount++;
        setLoadProgress(loadedCount / FRAME_COUNT);
        if (i === 0) setLoaded(true); // unlock scrubbing as soon as frame 0 is in
      };
      images[i] = img;
    };

    // Load frame 0 first, on its own, so it can't get stuck behind
    // the rest of the queue.
    loadFrame(0);
    for (let i = 1; i < FRAME_COUNT; i++) loadFrame(i);

    imagesRef.current = images;
    return () => {
      cancelled = true;
    };
  }, []);

  // Finds the closest frame at or before `index` that has actually
  // finished loading, so scrubbing ahead of the download never shows
  // a blank canvas.
  const nearestLoadedFrame = (index: number) => {
    for (let i = index; i >= 0; i--) {
      if (loadedFlagsRef.current[i]) return i;
    }
    return 0;
  };

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    ctx.clearRect(0, 0, width, height);

    // object-contain style fit, same behaviour as the <video> version.
    const imgRatio = img.width / img.height;
    const boxRatio = width / height;
    let drawWidth = width;
    let drawHeight = height;
    if (imgRatio > boxRatio) {
      drawHeight = width / imgRatio;
    } else {
      drawWidth = height * imgRatio;
    }
    const dx = (width - drawWidth) / 2;
    const dy = (height - drawHeight) / 2;

    ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
  };

  // Size the canvas's backing pixel buffer for retina displays, and
  // keep it correctly sized through ANY layout change — not just
  // window resizes. A plain one-shot check + window 'resize' listener
  // can race with things like the stylesheet finishing load, fonts
  // swapping in, or the aspect-ratio box settling after mount; if that
  // race is lost, the canvas keeps its default 300x150 internal
  // buffer and gets visibly stretched/blurry no matter how big the
  // CSS box actually is. ResizeObserver catches every real size
  // change, whenever it happens.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return; // not laid out yet — skip, wait for next observation
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      ctx?.scale(dpr, dpr);
      if (currentFrameRef.current >= 0) drawFrame(currentFrameRef.current);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  // Drive frame selection from a rAF loop — one draw per rendered
  // frame max, always using the freshest known scroll position. This
  // is the part that replaces video.currentTime seeking, and it's
  // what removes the keyframe-snapping issue entirely: every frame
  // here is an independently, already-decoded image.
  useEffect(() => {
    if (!loaded) return;

    const tick = () => {
      const raw = targetProgressRef.current;
      const normalized = Math.min(raw / END_BUFFER, 1);
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.round(normalized * (FRAME_COUNT - 1))
      );
      const drawableIndex = nearestLoadedFrame(frameIndex);

      if (drawableIndex !== currentFrameRef.current) {
        currentFrameRef.current = drawableIndex;
        drawFrame(drawableIndex);
      }

      rafId.current = requestAnimationFrame(tick);
    };

    // Draw the first frame immediately so there's no blank flash.
    currentFrameRef.current = 0;
    drawFrame(0);

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-white" />

        {/* HEADING */}
        <div
          className="
            absolute
            left-0
            top-0
            z-20
            flex
            h-full
            w-full
            items-center
            px-8
            md:w-[32%]
            md:px-14
          "
        >
          <div className="max-w-sm">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#168BE8]">
              Build ManoBot
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0B1F3A] md:text-6xl">
              Build it
              <span className="block text-[#168BE8]">piece by piece.</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-8 text-[#49647E]">
              Scroll down to assemble ManoBot. Scroll back up to take it
              apart.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm font-bold text-[#168BE8]">
              Scroll to build
              <span className="text-xl">↓</span>
            </div>
          </div>
        </div>

        {/* CANVAS AREA */}
        <div
          className="
            absolute
            right-0
            top-0
            z-10
            flex
            h-full
            w-full
            items-center
            justify-center
            md:w-[68%]
          "
        >
          <div className="relative flex h-full w-full items-center justify-center px-6 md:px-10">
            {/*
              Frame dimensions from your export: 1400x788.
              FRAME_ASPECT_RATIO above keeps the box sized correctly
              before the canvas has anything drawn into it.
            */}
            <div
              className="relative max-h-[82vh] w-full max-w-[1050px]"
              style={{ aspectRatio: `${FRAME_ASPECT_RATIO}` }}
            >
              <canvas ref={canvasRef} className="h-full w-full" />

              {loadProgress < 1 && (
                <div className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white">
                  Loading assets {Math.round(loadProgress * 100)}%
                </div>
              )}

              {/* EDGE FEATHER — identical technique to the video version */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, ${PAGE_BG}, transparent),
                    linear-gradient(to left, ${PAGE_BG}, transparent),
                    linear-gradient(to bottom, ${PAGE_BG}, transparent),
                    linear-gradient(to top, ${PAGE_BG}, transparent)
                  `,
                  backgroundSize: `
                    ${EDGE_FEATHER_PX}px 100%,
                    ${EDGE_FEATHER_PX}px 100%,
                    100% ${EDGE_FEATHER_PX}px,
                    100% ${EDGE_FEATHER_PX}px
                  `,
                  backgroundPosition:
                    "left top, right top, left top, left bottom",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </div>

        {/* BOTTOM INDICATOR */}
        <div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2">
          <div className="rounded-full border border-[#168BE8]/15 bg-white/80 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#168BE8] shadow-sm backdrop-blur-md">
            Scroll • Assemble • Program
          </div>
        </div>
      </div>
    </section>
  );
}
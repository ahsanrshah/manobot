"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

/* =====================================================
   FRAME SEQUENCE CONFIG
   ===================================================== */

const FRAME_COUNT = 150;
const FRAME_ASPECT_RATIO = 1920 / 1080;

const FRAME_PATH = (index: number) =>
  `/route-frames/frame_${String(index + 1).padStart(4, "0")}.jpg`;

const END_BUFFER = 0.96;

/* =====================================================
   TEXT STAGES
   ===================================================== */

type StoryStage =
  | "intro"
  | "junction"
  | "driving"
  | "arrival";

export default function ExploreManoCity() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(-1);
  const targetProgressRef = useRef(0);
  const rafId = useRef<number | null>(null);

  const loadedFlagsRef = useRef<boolean[]>(
    new Array(FRAME_COUNT).fill(false)
  );

  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  /*
   * Only ONE narrative message exists at a time.
   */
  const [storyStage, setStoryStage] =
    useState<StoryStage>("intro");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Smooth both video/frame movement and narrative timing.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    mass: 0.4,
  });

  useMotionValueEvent(
    smoothProgress,
    "change",
    (progress) => {
      targetProgressRef.current = progress;

      /* ===============================================
         STORY STAGE CONTROL

         Only one message can be active.
         =============================================== */

      if (progress < 0.25) {
        setStoryStage("intro");
      } else if (progress < 0.55) {
        setStoryStage("junction");
      } else if (progress < 0.78) {
        setStoryStage("driving");
      } else {
        setStoryStage("arrival");
      }
    }
  );

  /* =====================================================
     FRAME LOADING
     ===================================================== */

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;

    const images: HTMLImageElement[] =
      new Array(FRAME_COUNT);

    const loadFrame = (i: number) => {
      const img = new Image();

      img.src = FRAME_PATH(i);

      img.onload = () => {
        if (cancelled) return;

        loadedFlagsRef.current[i] = true;
        loadedCount++;

        setLoadProgress(
          loadedCount / FRAME_COUNT
        );

        if (i === 0) {
          setLoaded(true);
        }
      };

      images[i] = img;
    };

    /*
     * First frame immediately.
     */
    loadFrame(0);

    /*
     * Remaining frames preload.
     */
    for (let i = 1; i < FRAME_COUNT; i++) {
      loadFrame(i);
    }

    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
  }, []);

  /* =====================================================
     FIND NEAREST LOADED FRAME
     ===================================================== */

  const nearestLoadedFrame = (
    index: number
  ) => {
    for (let i = index; i >= 0; i--) {
      if (loadedFlagsRef.current[i]) {
        return i;
      }
    }

    return 0;
  };

  /* =====================================================
     DRAW FRAME
     ===================================================== */

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];

    if (!canvas || !img || !img.complete) {
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr =
      window.devicePixelRatio || 1;

    const width =
      canvas.width / dpr;

    const height =
      canvas.height / dpr;

    ctx.clearRect(
      0,
      0,
      width,
      height
    );

    /*
     * object-cover style draw.
     */
    const imgRatio =
      img.width / img.height;

    const boxRatio =
      width / height;

    let drawWidth = width;
    let drawHeight = height;

    if (imgRatio > boxRatio) {
      drawHeight = height;
      drawWidth =
        height * imgRatio;
    } else {
      drawWidth = width;
      drawHeight =
        width / imgRatio;
    }

    const dx =
      (width - drawWidth) / 2;

    const dy =
      (height - drawHeight) / 2;

    ctx.drawImage(
      img,
      dx,
      dy,
      drawWidth,
      drawHeight
    );
  };

  /* =====================================================
     CANVAS RESIZE
     ===================================================== */

  useEffect(() => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const resize = () => {
      const dpr =
        window.devicePixelRatio || 1;

      const rect =
        canvas.getBoundingClientRect();

      if (
        rect.width === 0 ||
        rect.height === 0
      ) {
        return;
      }

      canvas.width =
        rect.width * dpr;

      canvas.height =
        rect.height * dpr;

      const ctx =
        canvas.getContext("2d");

      ctx?.scale(dpr, dpr);

      if (
        currentFrameRef.current >= 0
      ) {
        drawFrame(
          currentFrameRef.current
        );
      }
    };

    const observer =
      new ResizeObserver(resize);

    observer.observe(canvas);

    return () =>
      observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  /* =====================================================
     FRAME SCRUBBING LOOP
     ===================================================== */

  useEffect(() => {
    if (!loaded) return;

    const tick = () => {
      const raw =
        targetProgressRef.current;

      const normalized =
        Math.min(
          raw / END_BUFFER,
          1
        );

      const frameIndex =
        Math.min(
          FRAME_COUNT - 1,
          Math.round(
            normalized *
              (FRAME_COUNT - 1)
          )
        );

      const drawableIndex =
        nearestLoadedFrame(
          frameIndex
        );

      if (
        drawableIndex !==
        currentFrameRef.current
      ) {
        currentFrameRef.current =
          drawableIndex;

        drawFrame(
          drawableIndex
        );
      }

      rafId.current =
        requestAnimationFrame(tick);
    };

    currentFrameRef.current = 0;

    drawFrame(0);

    rafId.current =
      requestAnimationFrame(tick);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(
          rafId.current
        );
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[500vh] bg-white"
    >
      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          bg-white
        "
      >

        {/* ===============================================
            MANOCITY ANIMATION
            =============================================== */}

        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            h-full
            w-full
          "
          style={{
            aspectRatio:
              `${FRAME_ASPECT_RATIO}`,
          }}
        />

        {/* ===============================================
            LOADING STATUS
            =============================================== */}

        {loadProgress < 1 && (
          <div
            className="
              pointer-events-none
              absolute
              bottom-4
              right-4
              z-20
              rounded-full
              bg-black/40
              px-3
              py-1
              text-xs
              font-medium
              text-white
            "
          >
            Loading{" "}
            {Math.round(
              loadProgress * 100
            )}
            %
          </div>
        )}

        {/* ===============================================
            READABILITY GRADIENT
            =============================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-r
            from-white/95
            via-white/50
            to-transparent
          "
        />

        {/* ===============================================
            SINGLE STORY CONTAINER

            This is the important change.
            Only ONE text block can exist here.
            =============================================== */}

        <div
          className="
            absolute
            left-12
            top-1/2
            z-40
            w-[460px]
            max-w-[90vw]
            -translate-y-1/2
          "
        >

          <AnimatePresence
            mode="wait"
            initial={false}
          >

            {/* ==========================
                INTRO
                ========================== */}

            {storyStage ===
              "intro" && (
              <motion.div
                key="intro"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.32,
                  ease: "easeOut",
                }}
              >
                <p
                  className="
                    mb-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#168BE8]
                  "
                >
                  Enter ManoCity
                </p>

                <h2
                  className="
                    text-5xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-[#0B1F3A]
                  "
                >
                  ManoBot is built.

                  <span
                    className="
                      block
                      text-[#168BE8]
                    "
                  >
                    Now let&apos;s move.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-8
                    text-[#49647E]
                  "
                >
                  Mano needs to get
                  from home to school.
                  Scroll to guide
                  ManoBot through the
                  city.
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-bold
                    text-[#168BE8]
                  "
                >
                  Scroll to drive

                  <span
                    className="
                      text-xl
                    "
                  >
                    ↓
                  </span>
                </div>
              </motion.div>
            )}

            {/* ==========================
                JUNCTION
                ========================== */}

            {storyStage ===
              "junction" && (
              <motion.div
                key="junction"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.32,
                  ease: "easeOut",
                }}
              >
                <p
                  className="
                    mb-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#FF9D17]
                  "
                >
                  Junction Ahead
                </p>

                <h2
                  className="
                    text-5xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-[#0B1F3A]
                  "
                >
                  Which way

                  <span
                    className="
                      block
                      text-[#168BE8]
                    "
                  >
                    should Mano go?
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-8
                    text-[#49647E]
                  "
                >
                  ManoBot has reached
                  its first decision
                  point.
                </p>
              </motion.div>
            )}

            {/* ==========================
                DRIVING / CODE DECISION
                ========================== */}

            {storyStage ===
              "driving" && (
              <motion.div
                key="driving"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.32,
                  ease: "easeOut",
                }}
              >
                <p
                  className="
                    mb-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#168BE8]
                  "
                >
                  Your Code Decides
                </p>

                <h2
                  className="
                    text-5xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-[#0B1F3A]
                  "
                >
                  Tell ManoBot

                  <span
                    className="
                      block
                      text-[#168BE8]
                    "
                  >
                    where to go.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-8
                    text-[#49647E]
                  "
                >
                  ManoBot follows the
                  instructions you
                  program.
                </p>
              </motion.div>
            )}

            {/* ==========================
                ARRIVAL
                ========================== */}

            {storyStage ===
              "arrival" && (
              <motion.div
                key="arrival"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.32,
                  ease: "easeOut",
                }}
              >
                <p
                  className="
                    mb-4
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[#168BE8]
                  "
                >
                  Mission Complete
                </p>

                <h2
                  className="
                    text-5xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-[#0B1F3A]
                  "
                >
                  Mano made it

                  <span
                    className="
                      block
                      text-[#168BE8]
                    "
                  >
                    to school.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    text-lg
                    leading-8
                    text-[#49647E]
                  "
                >
                  One journey.
                  One decision.
                  Your code made it
                  happen.
                </p>

                <button
                  className="
                    mt-8
                    rounded-full
                    bg-[#0B1F3A]
                    px-7
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition
                    hover:bg-[#168BE8]
                  "
                >
                  Explore the Next
                  Mission →
                </button>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

        {/* ===============================================
            BOTTOM STATUS
            =============================================== */}

        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-50
            -translate-x-1/2
          "
        >
          <div
            className="
              rounded-full
              border
              border-[#168BE8]/15
              bg-white/85
              px-5
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#168BE8]
              shadow-sm
              backdrop-blur-md
            "
          >
            Drive • Decide • Code • Explore
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VIDEO_SRC = "/robot%20assembly%20video.mp4";
const PLAYBACK_RATE = 3;

export default function BuildManoBot() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [inView, setInView] = useState(false);

  /* =====================================================
     RESET VIDEO TO START
     ===================================================== */

  const resetVideoToStart = () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();

    try {
      video.currentTime = 0;
    } catch {
      // Metadata may not be loaded yet.
    }

    video.playbackRate = PLAYBACK_RATE;
    video.defaultPlaybackRate = PLAYBACK_RATE;

    setStarted(false);
    setPlaying(false);
    setCompleted(false);
  };

  /* =====================================================
     START ASSEMBLY
     ===================================================== */

  const startAssembly = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.pause();
      video.currentTime = 0;

      video.playbackRate = PLAYBACK_RATE;
      video.defaultPlaybackRate = PLAYBACK_RATE;

      setStarted(true);
      setCompleted(false);

      await video.play();

      setPlaying(true);
    } catch (error) {
      console.error(
        "Unable to autoplay ManoBot assembly:",
        error
      );

      setPlaying(false);
    }
  };

  /* =====================================================
     VIEWPORT OBSERVER

     Enter section:
     - reset
     - autoplay from beginning

     Leave section:
     - pause
     - return to beginning
     ===================================================== */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        /*
         * Start once roughly 35% of the section
         * is visible.
         */
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =====================================================
     RESPOND TO VIEWPORT CHANGE
     ===================================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (inView) {
      /*
       * Small delay prevents rapid play/reset behaviour
       * when the observer sits right on the threshold.
       */

      const timer = window.setTimeout(() => {
        startAssembly();
      }, 150);

      return () => {
        window.clearTimeout(timer);
      };
    }

    /*
     * Section has left the viewport.
     * Return everything to its original state.
     */

    resetVideoToStart();
  }, [inView]);

  /* =====================================================
     INITIALISE VIDEO
     ===================================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();

    video.playbackRate = PLAYBACK_RATE;
    video.defaultPlaybackRate = PLAYBACK_RATE;

    try {
      video.currentTime = 0;
    } catch {
      // Video metadata may not be ready.
    }
  }, []);

  /* =====================================================
     PAUSE / CONTINUE
     ===================================================== */

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      try {
        /*
         * If the video had already finished,
         * start again from the beginning.
         */

        if (video.ended || completed) {
          video.currentTime = 0;

          setCompleted(false);
          setStarted(true);
        }

        video.playbackRate = PLAYBACK_RATE;

        await video.play();

        setPlaying(true);
      } catch (error) {
        console.error(
          "Unable to resume ManoBot assembly:",
          error
        );
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  /* =====================================================
     MANUAL RESET

     If still in view, reset and immediately
     start the assembly again.
     ===================================================== */

  const resetBuild = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;

    video.playbackRate = PLAYBACK_RATE;
    video.defaultPlaybackRate = PLAYBACK_RATE;

    setStarted(false);
    setPlaying(false);
    setCompleted(false);

    if (inView) {
      try {
        setStarted(true);

        await video.play();

        setPlaying(true);
      } catch (error) {
        console.error(
          "Unable to restart ManoBot assembly:",
          error
        );
      }
    }
  };

  /* =====================================================
     BUILD AGAIN
     ===================================================== */

  const buildAgain = async () => {
    await startAssembly();
  };

  /* =====================================================
     VIDEO COMPLETE
     ===================================================== */

  const handleEnded = () => {
    setPlaying(false);
    setCompleted(true);
    setStarted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="build"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-24
        md:px-12
        md:py-32
      "
    >
      <div
        className="
          relative
          mx-auto
          grid
          min-h-[720px]
          max-w-7xl
          items-center
          gap-12
          lg:grid-cols-[0.72fr_1.28fr]
          lg:gap-16
        "
      >
        {/* =====================================================
            LEFT CONTENT
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-20"
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
            Build ManoBot
          </p>

          <h2
            className="
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-[#0B1F3A]
              md:text-6xl
            "
          >
            Watch ManoBot

            <span className="block text-[#168BE8]">
              come to life.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-md
              text-lg
              leading-8
              text-[#49647E]
            "
          >
            See how ManoBot comes together piece by piece
            as the controller, sensors, motors and robot
            body become one working machine.
          </p>

          {/* =================================================
              STATUS
              ================================================= */}

          <div className="mt-8 min-h-[42px]">
            <AnimatePresence mode="wait">

              {/* WAITING */}

              {!started && (
                <motion.div
                  key="ready"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-semibold
                    text-[#5D748A]
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#FF9D17]
                      shadow-[0_0_10px_rgba(255,157,23,0.45)]
                    "
                  />

                  ManoBot parts ready for assembly
                </motion.div>
              )}

              {/* BUILDING */}

              {started && !completed && (
                <motion.div
                  key="building"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-semibold
                    text-[#168BE8]
                  "
                >
                  <motion.span
                    animate={
                      playing
                        ? {
                            scale: [1, 1.35, 1],
                            opacity: [1, 0.55, 1],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#168BE8]
                    "
                  />

                  {playing
                    ? "Assembling your ManoBot..."
                    : "Assembly paused"}
                </motion.div>
              )}

              {/* COMPLETE */}

              {completed && (
                <motion.div
                  key="complete"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#E9FBF3]
                    px-5
                    py-2.5
                    text-sm
                    font-bold
                    text-[#168B63]
                  "
                >
                  <span>✓</span>

                  ManoBot Ready!
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* =================================================
              CONTROLS
              ================================================= */}

          <div className="mt-8 flex flex-wrap gap-4">

            {/* PAUSE / CONTINUE */}

            {started && !completed && (
              <motion.button
                type="button"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={togglePlayback}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0B1F3A]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(11,31,58,0.18)]
                  transition
                  duration-300
                  hover:bg-[#168BE8]
                "
              >
                {playing
                  ? "Pause Assembly"
                  : "Continue Assembly"}

                <span>
                  {playing ? "Ⅱ" : "▶"}
                </span>
              </motion.button>
            )}

            {/* BUILD AGAIN */}

            {completed && (
              <motion.button
                type="button"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={buildAgain}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0B1F3A]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(11,31,58,0.18)]
                  transition
                  duration-300
                  hover:bg-[#168BE8]
                "
              >
                Build Again

                <span>↻</span>
              </motion.button>
            )}

            {/* RESET */}

            {started && !completed && (
              <button
                type="button"
                onClick={resetBuild}
                className="
                  rounded-full
                  border
                  border-[#168BE8]/20
                  bg-white
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-[#49647E]
                  transition
                  duration-300
                  hover:border-[#168BE8]
                  hover:text-[#168BE8]
                "
              >
                Restart
              </button>
            )}

          </div>

          {/* SMALL MESSAGE */}

          {!started && (
            <p
              className="
                mt-5
                text-xs
                font-medium
                text-[#8A9BAB]
              "
            >
              Assembly begins automatically when this
              section enters your view.
            </p>
          )}

        </motion.div>

        {/* =====================================================
            MANOBOT ASSEMBLY VIDEO
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            z-10
            flex
            w-full
            items-center
            justify-center
          "
        >
          <div
            className="
              relative
              w-full
              max-w-[950px]
              bg-white
            "
          >
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              controls={false}

              onLoadedMetadata={(event) => {
                const video = event.currentTarget;

                video.playbackRate =
                  PLAYBACK_RATE;

                video.defaultPlaybackRate =
                  PLAYBACK_RATE;

                /*
                 * If the section is not currently
                 * visible, ensure the first frame
                 * remains at the beginning.
                 */

                if (!inView) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}

              onPlay={() => {
                const video =
                  videoRef.current;

                if (video) {
                  video.playbackRate =
                    PLAYBACK_RATE;
                }

                setStarted(true);
                setPlaying(true);
              }}

              onPause={() => {
                setPlaying(false);
              }}

              onEnded={handleEnded}

              className="
                block
                h-auto
                w-full
                bg-white
                object-contain
              "
            />

            {/* =================================================
                COMPLETE MESSAGE
                ================================================= */}

            <AnimatePresence>
              {completed && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 8,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    bottom-6
                    left-1/2
                    -translate-x-1/2
                  "
                >
                  <div
                    className="
                      whitespace-nowrap
                      rounded-full
                      border
                      border-[#168BE8]/10
                      bg-white/95
                      px-6
                      py-3
                      text-sm
                      font-extrabold
                      text-[#0B1F3A]
                      shadow-[0_10px_30px_rgba(11,31,58,0.10)]
                      backdrop-blur-sm
                    "
                  >
                    ManoBot assembled ✓
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
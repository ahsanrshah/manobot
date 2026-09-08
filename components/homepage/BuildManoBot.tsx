"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

/* =========================================================
   SETTINGS
   ========================================================= */

const VIDEO_SRC = "/robot%20assembly%20video.mp4";

const PLAYBACK_RATE = 5;

/* =========================================================
   COMPONENT
   ========================================================= */

export default function BuildManoBot() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  /*
   * Keeps the latest visibility value available
   * without waiting for React state updates.
   */
  const inViewRef = useRef(false);

  /*
   * Prevents overlapping play requests.
   */
  const playRequestRef = useRef(false);

  const [started, setStarted] =
    useState(false);

  const [playing, setPlaying] =
    useState(false);

  const [completed, setCompleted] =
    useState(false);

  const [inView, setInView] =
    useState(false);

  const [videoReady, setVideoReady] =
    useState(false);

  const [videoLoading, setVideoLoading] =
    useState(true);

  /* =========================================================
     RESET VIDEO
     ========================================================= */

  const resetVideoToStart =
    useCallback(() => {
      const video = videoRef.current;

      if (!video) return;

      playRequestRef.current = false;

      video.pause();

      /*
       * Only seek when metadata exists.
       */
      if (video.readyState >= 1) {
        try {
          video.currentTime = 0;
        } catch {
          // Ignore seek errors while loading.
        }
      }

      video.playbackRate =
        PLAYBACK_RATE;

      video.defaultPlaybackRate =
        PLAYBACK_RATE;

      setStarted(false);
      setPlaying(false);
      setCompleted(false);
    }, []);

  /* =========================================================
     START ASSEMBLY

     Only starts when:
     1. Section is visible
     2. Video has enough data to play
     ========================================================= */

  const startAssembly =
    useCallback(async () => {
      const video = videoRef.current;

      if (!video) return;

      /*
       * User may have scrolled away while
       * the browser was loading the video.
       */
      if (!inViewRef.current) return;

      /*
       * Avoid duplicate play() calls.
       */
      if (playRequestRef.current) return;

      /*
       * HAVE_FUTURE_DATA = 3
       *
       * If the browser does not yet have
       * enough data, onCanPlay will start it.
       */
      if (video.readyState < 3) {
        setVideoLoading(true);
        return;
      }

      playRequestRef.current = true;

      try {
        video.playbackRate =
          PLAYBACK_RATE;

        video.defaultPlaybackRate =
          PLAYBACK_RATE;

        /*
         * Start from beginning whenever the
         * section is entered again.
         */
        if (
          video.currentTime !== 0 ||
          video.ended
        ) {
          video.currentTime = 0;
        }

        setStarted(true);
        setCompleted(false);
        setVideoLoading(false);

        await video.play();

        /*
         * Check visibility again because
         * play() is asynchronous.
         */
        if (!inViewRef.current) {
          video.pause();
          video.currentTime = 0;

          setStarted(false);
          setPlaying(false);

          return;
        }

        video.playbackRate =
          PLAYBACK_RATE;

        setPlaying(true);
      } catch (error) {
        console.error(
          "Unable to autoplay ManoBot assembly:",
          error
        );

        setPlaying(false);
      } finally {
        playRequestRef.current = false;
      }
    }, []);

  /* =========================================================
     INITIAL VIDEO PRELOAD

     The browser starts preparing the video as soon
     as this component is mounted — before the visitor
     reaches the Build ManoBot section.
     ========================================================= */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.preload = "auto";

    video.defaultPlaybackRate =
      PLAYBACK_RATE;

    video.playbackRate =
      PLAYBACK_RATE;

    /*
     * Explicitly request loading now rather than
     * waiting for the section to enter the viewport.
     */
    video.load();

    /*
     * If metadata is already available from cache,
     * place the video at its first frame.
     */
    if (video.readyState >= 1) {
      try {
        video.currentTime = 0;
      } catch {
        // Ignore initial seek errors.
      }
    }
  }, []);

  /* =========================================================
     VIEWPORT OBSERVER

     Start much earlier than before.

     15% visible:
        Start assembly

     Less than 15% visible:
        Pause + reset

     rootMargin also lets the browser/component
     prepare slightly before reaching the section.
     ========================================================= */

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          const visible =
            entry.isIntersecting &&
            entry.intersectionRatio >= 0.15;

          inViewRef.current = visible;

          setInView(visible);

          if (!visible) {
            resetVideoToStart();
          }
        },
        {
          threshold: [
            0,
            0.05,
            0.15,
            0.25,
            0.5,
          ],

          /*
           * Start detecting slightly before the
           * section occupies the main viewport.
           */
          rootMargin:
            "120px 0px 120px 0px",
        }
      );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [resetVideoToStart]);

  /* =========================================================
     START WHEN SECTION ENTERS VIEW
     ========================================================= */

  useEffect(() => {
    if (!inView) return;

    /*
     * No artificial timer.
     *
     * If the video is ready it starts immediately.
     * Otherwise onCanPlay will trigger playback.
     */

    if (videoReady) {
      startAssembly();
    }
  }, [
    inView,
    videoReady,
    startAssembly,
  ]);

  /* =========================================================
     VIDEO READY

     Called once the browser has enough data
     to begin playback.
     ========================================================= */

  const handleCanPlay = () => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate =
      PLAYBACK_RATE;

    video.defaultPlaybackRate =
      PLAYBACK_RATE;

    setVideoReady(true);
    setVideoLoading(false);

    /*
     * If the user has already reached this
     * section, begin immediately.
     */
    if (inViewRef.current) {
      startAssembly();
    }
  };

  /* =========================================================
     METADATA READY
     ========================================================= */

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate =
      PLAYBACK_RATE;

    video.defaultPlaybackRate =
      PLAYBACK_RATE;

    /*
     * Prime first frame.
     */
    if (!inViewRef.current) {
      video.pause();

      try {
        video.currentTime = 0;
      } catch {
        // Ignore initial seek error.
      }
    }
  };

  /* =========================================================
     VIDEO STARTED LOADING
     ========================================================= */

  const handleLoadStart = () => {
    setVideoLoading(true);
  };

  /* =========================================================
     VIDEO BUFFERING
     ========================================================= */

  const handleWaiting = () => {
    setVideoLoading(true);
  };

  /* =========================================================
     VIDEO PLAYING
     ========================================================= */

  const handlePlaying = () => {
    const video = videoRef.current;

    if (video) {
      video.playbackRate =
        PLAYBACK_RATE;
    }

    setStarted(true);
    setPlaying(true);
    setVideoLoading(false);
  };

  /* =========================================================
     VIDEO PAUSED
     ========================================================= */

  const handlePause = () => {
    setPlaying(false);
  };

  /* =========================================================
     VIDEO COMPLETE
     ========================================================= */

  const handleEnded = () => {
    setPlaying(false);
    setCompleted(true);
    setStarted(true);
    setVideoLoading(false);
  };

  /* =========================================================
     PAUSE / CONTINUE
     ========================================================= */

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (!video.paused) {
      video.pause();

      setPlaying(false);

      return;
    }

    try {
      if (
        video.ended ||
        completed
      ) {
        video.currentTime = 0;

        setCompleted(false);
        setStarted(true);
      }

      video.playbackRate =
        PLAYBACK_RATE;

      await video.play();

      setPlaying(true);
    } catch (error) {
      console.error(
        "Unable to resume ManoBot assembly:",
        error
      );
    }
  };

  /* =========================================================
     MANUAL RESTART
     ========================================================= */

  const resetBuild = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();

    try {
      video.currentTime = 0;
    } catch {
      return;
    }

    video.playbackRate =
      PLAYBACK_RATE;

    video.defaultPlaybackRate =
      PLAYBACK_RATE;

    setStarted(true);
    setPlaying(false);
    setCompleted(false);

    try {
      await video.play();

      video.playbackRate =
        PLAYBACK_RATE;

      setPlaying(true);
    } catch (error) {
      console.error(
        "Unable to restart ManoBot assembly:",
        error
      );
    }
  };

  /* =========================================================
     BUILD AGAIN
     ========================================================= */

  const buildAgain = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;

    video.playbackRate =
      PLAYBACK_RATE;

    setCompleted(false);
    setStarted(true);

    try {
      await video.play();

      setPlaying(true);
    } catch (error) {
      console.error(
        "Unable to rebuild ManoBot:",
        error
      );
    }
  };

  /* =========================================================
     PAGE
     ========================================================= */

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            relative
            z-20
          "
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

            <span
              className="
                block
                text-[#168BE8]
              "
            >
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
            See how ManoBot comes together
            piece by piece as the controller,
            sensors, motors and robot body
            become one working machine.
          </p>

          {/* =================================================
              STATUS
              ================================================= */}

          <div
            className="
              mt-8
              min-h-[42px]
            "
          >
            <AnimatePresence mode="wait">

              {/* LOADING */}

              {inView &&
                videoLoading &&
                !playing &&
                !completed && (
                  <motion.div
                    key="loading"
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
                    <motion.span
                      animate={{
                        opacity: [
                          0.35,
                          1,
                          0.35,
                        ],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                      className="
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#FF9D17]
                      "
                    />

                    Preparing ManoBot...
                  </motion.div>
                )}

              {/* READY */}

              {!started &&
                !videoLoading && (
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

                    ManoBot parts ready
                    for assembly
                  </motion.div>
                )}

              {/* BUILDING */}

              {started &&
                !completed && (
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
                              scale: [
                                1,
                                1.35,
                                1,
                              ],
                              opacity: [
                                1,
                                0.55,
                                1,
                              ],
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
                      : videoLoading
                      ? "Preparing ManoBot..."
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
                  <span>
                    ✓
                  </span>

                  ManoBot Ready!
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* =================================================
              CONTROLS
              ================================================= */}

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-4
            "
          >

            {/* PAUSE / CONTINUE */}

            {started &&
              !completed && (
                <motion.button
                  type="button"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={
                    togglePlayback
                  }
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
                    {playing
                      ? "Ⅱ"
                      : "▶"}
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
                onClick={
                  buildAgain
                }
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

                <span>
                  ↻
                </span>
              </motion.button>
            )}

            {/* RESTART */}

            {started &&
              !completed && (
                <button
                  type="button"
                  onClick={
                    resetBuild
                  }
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

          {/* =================================================
              SMALL MESSAGE
              ================================================= */}

          {!started &&
            !videoLoading && (
              <p
                className="
                  mt-5
                  text-xs
                  font-medium
                  text-[#8A9BAB]
                "
              >
                ManoBot assembles
                automatically as you
                explore the city.
              </p>
            )}

        </motion.div>

        {/* =====================================================
            VIDEO SIDE
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.55,
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

            {/* =================================================
                VIDEO
                ================================================= */}

            <video
              ref={videoRef}
              src={VIDEO_SRC}

              muted
              playsInline

              /*
               * Begin fetching immediately.
               */
              preload="auto"

              disablePictureInPicture
              controls={false}

              onLoadStart={
                handleLoadStart
              }

              onLoadedMetadata={
                handleLoadedMetadata
              }

              onCanPlay={
                handleCanPlay
              }

              onWaiting={
                handleWaiting
              }

              onPlaying={
                handlePlaying
              }

              onPause={
                handlePause
              }

              onEnded={
                handleEnded
              }

              className="
                block
                h-auto
                w-full
                bg-white
                object-contain
              "
            />

            {/* =================================================
                VERY SHORT LOADING INDICATOR

                Only appears if video genuinely isn't ready.
                ================================================= */}

            <AnimatePresence>
              {inView &&
                videoLoading &&
                !playing && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <div
                      className="
                        rounded-full
                        border
                        border-[#168BE8]/10
                        bg-white/95
                        px-5
                        py-2.5
                        text-xs
                        font-bold
                        text-[#49647E]
                        shadow-sm
                      "
                    >
                      Preparing ManoBot...
                    </div>
                  </motion.div>
                )}
            </AnimatePresence>

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
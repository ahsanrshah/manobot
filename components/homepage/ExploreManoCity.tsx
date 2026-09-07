"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =====================================================
   CONFIGURATION
   ===================================================== */

const VIDEO_SRC = "/explore manocity.mp4";

/*
 * 1.0 = normal speed
 * 1.8 = 80% faster
 */
const VIDEO_SPEED = 2;

type StoryStage =
  | "intro"
  | "junction"
  | "driving"
  | "arrival";

export default function ExploreManoCity() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const junctionTriggeredRef = useRef(false);

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);

  const [storyStage, setStoryStage] =
    useState<StoryStage>("intro");

  /* =====================================================
     INITIALISE VIDEO
     ===================================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = true;

    video.playbackRate = VIDEO_SPEED;
    video.defaultPlaybackRate = VIDEO_SPEED;
  }, []);

  /* =====================================================
     PLAY VIDEO
     ===================================================== */

  const playVideo = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      video.muted = true;
      video.playbackRate = VIDEO_SPEED;

      await video.play();

      setPlaying(true);
    } catch (error) {
      console.error(
        "Unable to play ManoCity video:",
        error
      );

      setPlaying(false);
    }
  };

  /* =====================================================
     START JOURNEY
     ===================================================== */

  const startJourney = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = true;
    video.playbackRate = VIDEO_SPEED;

    junctionTriggeredRef.current = false;

    setStarted(true);
    setPlaying(false);
    setCompleted(false);
    setStoryStage("intro");

    await playVideo();
  };

  /* =====================================================
     RUN CODE
     ===================================================== */

  const runCode = async () => {
    setStoryStage("driving");

    await playVideo();
  };

  /* =====================================================
     PAUSE / CONTINUE
     ===================================================== */

  const togglePlayback = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      await playVideo();
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  /* =====================================================
     RESET
     ===================================================== */

  const resetJourney = () => {
    const video = videoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.playbackRate = VIDEO_SPEED;

    junctionTriggeredRef.current = false;

    setStarted(false);
    setPlaying(false);
    setCompleted(false);
    setStoryStage("intro");
  };

  /* =====================================================
     VIDEO TIMING
     ===================================================== */

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || !video.duration) {
      return;
    }

    const progress =
      video.currentTime / video.duration;

    /* =================================================
       INTRO
       ================================================= */

    if (
      progress < 0.35 &&
      !junctionTriggeredRef.current
    ) {
      setStoryStage("intro");
      return;
    }

    /* =================================================
       JUNCTION
       ================================================= */

    if (
      progress >= 0.35 &&
      !junctionTriggeredRef.current
    ) {
      junctionTriggeredRef.current = true;

      video.pause();

      setPlaying(false);
      setStoryStage("junction");

      return;
    }

    /* =================================================
       HOLD AT JUNCTION
       ================================================= */

    if (storyStage === "junction") {
      return;
    }

    /* =================================================
       DRIVING
       ================================================= */

    if (progress < 0.86) {
      setStoryStage("driving");
      return;
    }

    /* =================================================
       ARRIVAL
       ================================================= */

    setStoryStage("arrival");
  };

  /* =====================================================
     COMPLETE
     ===================================================== */

  const handleEnded = () => {
    setPlaying(false);
    setCompleted(true);
    setStoryStage("arrival");
  };

  return (
    <section
      id="explore"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
      "
    >
      {/* =====================================================
          VIDEO BACKGROUND
          ===================================================== */}

      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onLoadedMetadata={(event) => {
          const video = event.currentTarget;

          video.muted = true;
          video.playbackRate = VIDEO_SPEED;
          video.defaultPlaybackRate = VIDEO_SPEED;

          video.pause();
          video.currentTime = 0;
        }}
        onPlay={() => {
          const video = videoRef.current;

          if (video) {
            video.playbackRate = VIDEO_SPEED;
          }

          setPlaying(true);
        }}
        onPause={() => {
          setPlaying(false);
        }}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* =====================================================
          LEFT READABILITY GRADIENT
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-gradient-to-r
          from-white
          via-white/90
          via-[32%]
          to-transparent
          to-[68%]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-white/5
        "
      />

      {/* =====================================================
          LARGE START BUTTON
          ===================================================== */}

      <AnimatePresence>
        {!started && (
          <motion.button
            type="button"
            aria-label="Start ManoCity Journey"
            onClick={startJourney}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.94,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              absolute
              right-[18%]
              top-1/2
              z-30
              hidden
              -translate-y-1/2
              flex-col
              items-center
              gap-3
              md:flex
            "
          >
            <span
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-[#0B1F3A]
                text-2xl
                text-white
                shadow-[0_15px_40px_rgba(11,31,58,0.30)]
                transition
                duration-300
                hover:bg-[#168BE8]
              "
            >
              <span className="ml-1">
                ▶
              </span>
            </span>

            <span
              className="
                rounded-full
                bg-white/90
                px-5
                py-2
                text-xs
                font-extrabold
                uppercase
                tracking-[0.16em]
                text-[#0B1F3A]
                shadow-[0_8px_24px_rgba(11,31,58,0.12)]
                backdrop-blur-md
              "
            >
              Start Journey
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* =====================================================
          STORY CONTENT
          ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          py-24
          md:px-12
          md:py-32
        "
      >
        <div
          className="
            relative
            min-h-[590px]
            w-full
            max-w-[520px]
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {/* =================================================
                INTRO
                ================================================= */}

            {storyStage === "intro" && (
              <StoryContainer key="intro">
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
                    text-4xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-[#0B1F3A]
                    md:text-6xl
                  "
                >
                  ManoBot is built.

                  <span className="block text-[#168BE8]">
                    Now let&apos;s move.
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
                  Mano needs to get from home to
                  school. Start the journey and watch
                  ManoBot travel through ManoCity.
                </p>

                {!started && (
                  <motion.button
                    type="button"
                    onClick={startJourney}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      mt-8
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
                      shadow-[0_15px_35px_rgba(11,31,58,0.20)]
                      transition
                      duration-300
                      hover:bg-[#168BE8]
                    "
                  >
                    Start the Journey →
                  </motion.button>
                )}

                {started && (
                  <div
                    className="
                      mt-8
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
                              opacity: [1, 0.5, 1],
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

                    ManoBot is moving...
                  </div>
                )}
              </StoryContainer>
            )}

            {/* =================================================
                JUNCTION
                ================================================= */}

            {storyStage === "junction" && (
              <StoryContainer key="junction">
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
                    text-4xl
                    font-extrabold
                    leading-[1.05]
                    tracking-tight
                    text-[#0B1F3A]
                    md:text-6xl
                  "
                >
                  Which way

                  <span className="block text-[#168BE8]">
                    should Mano go?
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
                  ManoBot has reached the
                  junction. Your program decides
                  what happens next.
                </p>

                {/* CODE CARD */}

                <div
                  className="
                    mt-7
                    max-w-md
                    overflow-hidden
                    rounded-[22px]
                    bg-[#07182A]
                    p-5
                    font-mono
                    text-sm
                    shadow-[0_16px_40px_rgba(7,24,42,0.18)]
                  "
                >
                  <div className="mb-4 flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#65D6A6]" />
                  </div>

                  <p className="text-[#9AD8FF]">
                    if{" "}
                    <span className="text-white">
                      junction
                    </span>
                    :
                  </p>

                  <p className="pl-6 text-white">
                    go_straight()
                  </p>
                </div>

                {/* RUN CODE BUTTON */}

                <motion.button
                  type="button"
                  onClick={runCode}
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#168BE8]
                    px-8
                    py-4
                    text-sm
                    font-extrabold
                    text-white
                    shadow-[0_12px_30px_rgba(22,139,232,0.30)]
                    transition
                    duration-300
                    hover:bg-[#0B1F3A]
                  "
                >
                  Run the Code
                  <span>▶</span>
                </motion.button>

                {/* WAITING MESSAGE — 2 SECOND DELAY */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 2,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    text-[#7C90A2]
                  "
                >
                  <motion.span
                    animate={{
                      opacity: [1, 0.3, 1],
                    }}
                    transition={{
                      delay: 2,
                      duration: 1.2,
                      repeat: Infinity,
                    }}
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#FF9D17]
                    "
                  />

                  ManoBot is waiting for your
                  instruction.
                </motion.div>
              </StoryContainer>
            )}

            {/* =================================================
                DRIVING
                ================================================= */}

            {storyStage === "driving" && (
              <StoryContainer
                key="driving"
                delay={0.4}
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
                  Code Running
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
                  ManoBot follows

                  <span className="block text-[#168BE8]">
                    your instruction.
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
                  The program is running.
                  Watch ManoBot follow the route
                  toward school.
                </p>

                <JourneyControls
                  playing={playing}
                  onToggle={togglePlayback}
                  onReset={resetJourney}
                />
              </StoryContainer>
            )}

            {/* =================================================
                ARRIVAL
                ================================================= */}

            {storyStage === "arrival" && (
              <StoryContainer key="arrival">
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
                  {completed
                    ? "Mission Complete"
                    : "Almost There"}
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
                  Mano made it

                  <span className="block text-[#168BE8]">
                    to school.
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
                  One journey. One decision.
                  Your code made it happen.
                </p>

                {completed ? (
                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-4
                    "
                  >
                    <motion.button
                      type="button"
                      onClick={startJourney}
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="
                        rounded-full
                        bg-[#0B1F3A]
                        px-7
                        py-4
                        text-sm
                        font-bold
                        text-white
                        transition
                        duration-300
                        hover:bg-[#168BE8]
                      "
                    >
                      Drive Again ↻
                    </motion.button>

                    <button
                      type="button"
                      className="
                        rounded-full
                        border
                        border-[#168BE8]/20
                        bg-white/90
                        px-7
                        py-4
                        text-sm
                        font-bold
                        text-[#168BE8]
                        transition
                        hover:border-[#168BE8]
                      "
                    >
                      Next Mission →
                    </button>
                  </div>
                ) : (
                  <JourneyControls
                    playing={playing}
                    onToggle={togglePlayback}
                    onReset={resetJourney}
                  />
                )}
              </StoryContainer>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LABEL
          ===================================================== */}

      <div
        className="
          absolute
          bottom-7
          left-1/2
          z-40
          -translate-x-1/2
        "
      >
        <div
          className="
            rounded-full
            border
            border-[#168BE8]/10
            bg-white/80
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
    </section>
  );
}

/* =====================================================
   STORY CONTAINER
   ===================================================== */

function StoryContainer({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeInOut",
      }}
      className="
        absolute
        left-0
        top-1/2
        w-full
        -translate-y-1/2
      "
    >
      {children}
    </motion.div>
  );
}

/* =====================================================
   NORMAL JOURNEY CONTROLS
   ===================================================== */

function JourneyControls({
  playing,
  onToggle,
  onReset,
}: {
  playing: boolean;
  onToggle: () => void;
  onReset: () => void;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
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
          shadow-[0_10px_25px_rgba(11,31,58,0.15)]
          transition
          duration-300
          hover:bg-[#168BE8]
        "
      >
        {playing
          ? "Pause Journey"
          : "Continue Journey"}

        <span>
          {playing
            ? "Ⅱ"
            : "▶"}
        </span>
      </motion.button>

      <button
        type="button"
        onClick={onReset}
        className="
          rounded-full
          border
          border-[#168BE8]/20
          bg-white/90
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
        Reset
      </button>
    </div>
  );
}
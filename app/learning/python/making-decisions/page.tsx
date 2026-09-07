"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

/* =========================================================
   TYPES
   ========================================================= */

type Light = "red" | "yellow" | "green";

type RunStage =
  | "idle"
  | "check-green"
  | "check-yellow"
  | "result";

type Result =
  | "STOP"
  | "GET READY"
  | "GO"
  | "";

const lightOptions: {
  value: Light;
  label: string;
  emoji: string;
}[] = [
  {
    value: "red",
    label: "Red",
    emoji: "🔴",
  },
  {
    value: "yellow",
    label: "Yellow",
    emoji: "🟡",
  },
  {
    value: "green",
    label: "Green",
    emoji: "🟢",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function MakingDecisionsPage() {
  const [light, setLight] =
    useState<Light>("red");

  const [stage, setStage] =
    useState<RunStage>("idle");

  const [result, setResult] =
    useState<Result>("");

  const [running, setRunning] =
    useState(false);

  const [robotPosition, setRobotPosition] =
    useState(0);

  const [challengeAnswer, setChallengeAnswer] =
    useState<"move" | "stop" | null>(null);

  const [challengeChecked, setChallengeChecked] =
    useState(false);

  const timersRef =
    useRef<ReturnType<typeof setTimeout>[]>([]);

  /* =====================================================
     TIMER HELPERS
     ===================================================== */

  const clearTimers = () => {
    timersRef.current.forEach((timer) =>
      clearTimeout(timer)
    );

    timersRef.current = [];
  };

  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, []);

  /* =====================================================
     RUN DECISION
     ===================================================== */

  const runDecision = () => {
    clearTimers();

    setRunning(true);
    setStage("idle");
    setResult("");
    setRobotPosition(0);

    /*
     * Python first checks:
     * if light == "green"
     */

    timersRef.current.push(
      setTimeout(() => {
        setStage("check-green");
      }, 400)
    );

    if (light === "green") {
      timersRef.current.push(
        setTimeout(() => {
          setStage("result");
          setResult("GO");
          setRobotPosition(100);
          setRunning(false);
        }, 1400)
      );

      return;
    }

    /*
     * Green was false.
     * Python now checks yellow.
     */

    timersRef.current.push(
      setTimeout(() => {
        setStage("check-yellow");
      }, 1400)
    );

    if (light === "yellow") {
      timersRef.current.push(
        setTimeout(() => {
          setStage("result");
          setResult("GET READY");
          setRunning(false);
        }, 2400)
      );

      return;
    }

    /*
     * Neither green nor yellow.
     * Python executes else.
     */

    timersRef.current.push(
      setTimeout(() => {
        setStage("result");
        setResult("STOP");
        setRunning(false);
      }, 2400)
    );
  };

  /* =====================================================
     RESET
     ===================================================== */

  const resetActivity = () => {
    clearTimers();

    setLight("red");
    setStage("idle");
    setResult("");
    setRunning(false);
    setRobotPosition(0);
  };

  /* =====================================================
     CHALLENGE
     ===================================================== */

  const checkChallenge = () => {
    if (!challengeAnswer) return;

    setChallengeChecked(true);
  };

  const resetChallenge = () => {
    setChallengeAnswer(null);
    setChallengeChecked(false);
  };

  return (
    <main
      className="
        min-h-screen
        overflow-hidden
        bg-white
        pt-[76px]
        text-[#0B1F3A]
      "
    >
      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-gradient-to-br
          from-[#F8FCFF]
          via-white
          to-[#EAF7FF]
          px-6
          py-16
          md:px-12
          md:py-20
        "
      >
        {/* BACKGROUND */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[-20%]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#168BE8]/10
            blur-[140px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-6xl
          "
        >
          {/* BREADCRUMB */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2
              text-xs
              font-bold
              text-[#8294A6]
            "
          >
            <Link
              href="/learning"
              className="
                transition
                hover:text-[#168BE8]
              "
            >
              Learning
            </Link>

            <span>→</span>

            <Link
              href="/learning/python"
              className="
                transition
                hover:text-[#168BE8]
              "
            >
              Python Essentials
            </Link>

            <span>→</span>

            <span className="text-[#168BE8]">
              Making Decisions
            </span>
          </div>

          {/* MODULE LABEL */}

          <p
            className="
              mt-10
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#168BE8]
            "
          >
            Module 03 • Decisions
          </p>

          {/* TITLE */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              mt-4
              max-w-4xl
              text-5xl
              font-extrabold
              leading-[1.02]
              tracking-tight
              md:text-7xl
            "
          >
            Making

            <span className="block text-[#168BE8]">
              Decisions
            </span>
          </motion.h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[#526A80]
            "
          >
            ManoBot has reached a traffic signal.
            Should she move, wait or stop?
            Python can make choices by checking conditions.
          </p>

          {/* META */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-3
            "
          >
            {[
              "15 Minutes",
              "Beginner",
              "1 Video",
              "Interactive Decision",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-[#168BE8]/10
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-bold
                  text-[#49647E]
                  shadow-sm
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO
          ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-20
          md:px-12
          md:py-24
        "
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="
              mb-8
              flex
              flex-col
              justify-between
              gap-5
              md:flex-row
              md:items-end
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#168BE8]
                "
              >
                Watch
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-extrabold
                  md:text-4xl
                "
              >
                Mano reaches a decision point.
              </h2>
            </div>

            <p
              className="
                max-w-lg
                text-sm
                leading-7
                text-[#647A8F]
              "
            >
              Watch how conditions allow Python
              to choose different instructions
              depending on what ManoBot sees.
            </p>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              overflow-hidden
              rounded-[34px]
              border
              border-[#168BE8]/10
              bg-black
              shadow-[0_25px_70px_rgba(11,31,58,0.14)]
            "
          >
            <video
              controls
              playsInline
              preload="metadata"
              className="
                aspect-video
                w-full
                bg-black
                object-cover
              "
            >
              <source
                src="/videos/python/module-03-making-decisions.mp4"
                type="video/mp4"
              />

              Your browser does not support video.
            </video>
          </motion.div>

          <div
            className="
              mt-5
              flex
              items-center
              gap-3
              text-xs
              font-semibold
              text-[#8294A6]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#168BE8]
              "
            />

            Finished watching? Now make the decision yourself.
          </div>
        </div>
      </section>

      {/* =====================================================
          BIG IDEA
          ===================================================== */}

      <section
        className="
          bg-[#F7FBFE]
          px-6
          py-24
          md:px-12
          md:py-28
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            items-center
            gap-12
            lg:grid-cols-[0.8fr_1.2fr]
          "
        >
          {/* COPY */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#168BE8]
              "
            >
              The Big Idea
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-extrabold
                tracking-tight
                md:text-5xl
              "
            >
              Python asks

              <span className="block text-[#168BE8]">
                a question.
              </span>
            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-8
                text-[#5D748A]
              "
            >
              A condition can be either true or false.
              Python checks the condition and follows
              the correct path.
            </p>
          </motion.div>

          {/* FLOW */}

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
            }}
            className="
              rounded-[32px]
              border
              border-[#168BE8]/10
              bg-white
              p-7
              shadow-[0_18px_55px_rgba(11,31,58,0.06)]
            "
          >
            <div className="text-center">
              <div
                className="
                  mx-auto
                  max-w-[280px]
                  rounded-[22px]
                  bg-[#EAF7FF]
                  px-6
                  py-5
                  font-mono
                  text-sm
                  font-bold
                  text-[#168BE8]
                "
              >
                light == &quot;green&quot; ?
              </div>

              <div
                className="
                  mx-auto
                  mt-5
                  grid
                  max-w-lg
                  grid-cols-2
                  gap-5
                "
              >
                <div
                  className="
                    rounded-[22px]
                    bg-[#F0FFF7]
                    p-5
                  "
                >
                  <p
                    className="
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-[#37A66A]
                    "
                  >
                    True
                  </p>

                  <p
                    className="
                      mt-2
                      text-xl
                      font-extrabold
                    "
                  >
                    GO
                  </p>
                </div>

                <div
                  className="
                    rounded-[22px]
                    bg-[#FFF5F5]
                    p-5
                  "
                >
                  <p
                    className="
                      text-xs
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-[#E45B5B]
                    "
                  >
                    False
                  </p>

                  <p
                    className="
                      mt-2
                      text-xl
                      font-extrabold
                    "
                  >
                    Check next
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE TRAFFIC LIGHT
          ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-24
          md:px-12
          md:py-32
        "
      >
        <div className="mx-auto max-w-7xl">
          {/* HEADING */}

          <div
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#168BE8]
              "
            >
              Try It
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-extrabold
                tracking-tight
                md:text-6xl
              "
            >
              Choose the signal.

              <span className="block text-[#168BE8]">
                Then run the decision.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-[#5D748A]
              "
            >
              Watch Python test each condition
              until it finds the correct action.
            </p>
          </div>

          {/* LIGHT SELECTOR */}

          <div
            className="
              mx-auto
              mt-12
              flex
              max-w-xl
              flex-wrap
              justify-center
              gap-3
            "
          >
            {lightOptions.map((option) => {
              const active =
                light === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  disabled={running}
                  onClick={() => {
                    setLight(option.value);
                    setStage("idle");
                    setResult("");
                    setRobotPosition(0);
                  }}
                  className={`
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    px-6
                    py-3
                    text-sm
                    font-bold
                    transition

                    ${
                      active
                        ? "border-[#168BE8] bg-[#EAF7FF] text-[#168BE8]"
                        : "border-[#168BE8]/10 bg-white text-[#526A80] hover:border-[#168BE8]/35"
                    }
                  `}
                >
                  <span>
                    {option.emoji}
                  </span>

                  {option.label}
                </button>
              );
            })}
          </div>

          {/* WORKSPACE */}

          <div
            className="
              mt-8
              grid
              gap-6
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* =================================================
                CODE
                ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[32px]
                bg-[#07182A]
                shadow-[0_25px_65px_rgba(7,24,42,0.18)]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-6
                  py-4
                "
              >
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF6B6B]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFD166]" />
                  <span className="h-3 w-3 rounded-full bg-[#65D6A6]" />
                </div>

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/40
                  "
                >
                  traffic_light.py
                </span>
              </div>

              <div
                className="
                  min-h-[420px]
                  overflow-x-auto
                  p-7
                  font-mono
                  text-base
                  leading-10
                "
              >
                {/* LIGHT */}

                <div>
                  <span className="mr-5 text-white/25">
                    1
                  </span>

                  <span className="text-[#7DD3FC]">
                    light
                  </span>

                  <span className="text-white">
                    {" = "}
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;{light}&quot;
                  </span>
                </div>

                <div>
                  <span className="mr-5 text-white/25">
                    2
                  </span>
                </div>

                {/* IF */}

                <motion.div
                  animate={{
                    backgroundColor:
                      stage === "check-green"
                        ? "rgba(22,139,232,0.20)"
                        : "rgba(22,139,232,0)",
                  }}
                  className="
                    -mx-3
                    rounded-lg
                    px-3
                  "
                >
                  <span className="mr-5 text-white/25">
                    3
                  </span>

                  <span className="text-[#C4B5FD]">
                    if
                  </span>

                  <span className="text-white">
                    {" light == "}
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;green&quot;
                  </span>

                  <span className="text-white">
                    :
                  </span>
                </motion.div>

                <div>
                  <span className="mr-5 text-white/25">
                    4
                  </span>

                  <span className="ml-6 text-[#7DD3FC]">
                    action
                  </span>

                  <span className="text-white">
                    {" = "}
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;GO&quot;
                  </span>
                </div>

                {/* ELIF */}

                <motion.div
                  animate={{
                    backgroundColor:
                      stage === "check-yellow"
                        ? "rgba(22,139,232,0.20)"
                        : "rgba(22,139,232,0)",
                  }}
                  className="
                    -mx-3
                    rounded-lg
                    px-3
                  "
                >
                  <span className="mr-5 text-white/25">
                    5
                  </span>

                  <span className="text-[#C4B5FD]">
                    elif
                  </span>

                  <span className="text-white">
                    {" light == "}
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;yellow&quot;
                  </span>

                  <span className="text-white">
                    :
                  </span>
                </motion.div>

                <div>
                  <span className="mr-5 text-white/25">
                    6
                  </span>

                  <span className="ml-6 text-[#7DD3FC]">
                    action
                  </span>

                  <span className="text-white">
                    {" = "}
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;GET READY&quot;
                  </span>
                </div>

                {/* ELSE */}

                <motion.div
                  animate={{
                    backgroundColor:
                      stage === "result" &&
                      result === "STOP"
                        ? "rgba(22,139,232,0.20)"
                        : "rgba(22,139,232,0)",
                  }}
                  className="
                    -mx-3
                    rounded-lg
                    px-3
                  "
                >
                  <span className="mr-5 text-white/25">
                    7
                  </span>

                  <span className="text-[#C4B5FD]">
                    else
                  </span>

                  <span className="text-white">
                    :
                  </span>
                </motion.div>

                <div>
                  <span className="mr-5 text-white/25">
                    8
                  </span>

                  <span className="ml-6 text-[#7DD3FC]">
                    action
                  </span>

                  <span className="text-white">
                    {" = "}
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;STOP&quot;
                  </span>
                </div>
              </div>

              {/* RUN */}

              <div
                className="
                  flex
                  gap-3
                  border-t
                  border-white/10
                  px-6
                  py-5
                "
              >
                <motion.button
                  type="button"
                  disabled={running}
                  onClick={runDecision}
                  whileTap={
                    running
                      ? {}
                      : {
                          scale: 0.97,
                        }
                  }
                  className={`
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white

                    ${
                      running
                        ? "cursor-not-allowed bg-[#168BE8]/40"
                        : "bg-[#168BE8] hover:bg-[#249BF4]"
                    }
                  `}
                >
                  {running
                    ? "Checking..."
                    : "Run Code"}

                  <span>▶</span>
                </motion.button>

                <button
                  type="button"
                  onClick={resetActivity}
                  className="
                    rounded-full
                    border
                    border-white/15
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white/70
                    transition
                    hover:text-white
                  "
                >
                  Reset
                </button>
              </div>
            </div>

            {/* =================================================
                MANOCITY VISUAL
                ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#168BE8]/10
                bg-[#F8FCFF]
                p-7
                shadow-[0_18px_50px_rgba(11,31,58,0.06)]
                md:p-8
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#168BE8]
                "
              >
                ManoCity Junction
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-extrabold
                "
              >
                What will ManoBot do?
              </h3>

              {/* TRAFFIC LIGHT */}

              <div
                className="
                  mt-8
                  flex
                  justify-center
                "
              >
                <div
                  className="
                    rounded-[28px]
                    bg-[#10243B]
                    p-4
                    shadow-[0_12px_30px_rgba(11,31,58,0.20)]
                  "
                >
                  {[
                    "red",
                    "yellow",
                    "green",
                  ].map((colour) => (
                    <motion.div
                      key={colour}
                      animate={{
                        opacity:
                          light === colour
                            ? 1
                            : 0.18,

                        scale:
                          light === colour
                            ? 1.06
                            : 1,
                      }}
                      className={`
                        my-2
                        h-14
                        w-14
                        rounded-full

                        ${
                          colour === "red"
                            ? "bg-red-500"
                            : colour === "yellow"
                            ? "bg-yellow-400"
                            : "bg-green-500"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>

              {/* ROAD */}

              <div
                className="
                  relative
                  mt-10
                  h-[150px]
                  overflow-hidden
                  rounded-[24px]
                  bg-[#DDE4E9]
                "
              >
                {/* ROAD */}

                <div
                  className="
                    absolute
                    left-0
                    top-1/2
                    h-[82px]
                    w-full
                    -translate-y-1/2
                    bg-[#384653]
                  "
                />

                {/* CENTRE LINE */}

                <div
                  className="
                    absolute
                    left-0
                    top-1/2
                    h-[3px]
                    w-full
                    -translate-y-1/2
                    border-t-2
                    border-dashed
                    border-white/70
                  "
                />

                {/* ROBOT */}

                <motion.div
                  animate={{
                    left: `${12 + robotPosition * 0.65}%`,
                  }}
                  transition={{
                    duration: 1.1,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    top-1/2
                    z-20
                    -translate-y-1/2
                    text-4xl
                  "
                >
                  🤖
                </motion.div>
              </div>

              {/* CURRENT CHECK */}

              <div
                className="
                  mt-6
                  min-h-[120px]
                  rounded-[22px]
                  bg-white
                  p-5
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${stage}-${result}`}
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
                    }}
                  >
                    {stage === "idle" && (
                      <>
                        <p className="font-bold">
                          Ready to decide?
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Select a traffic signal,
                          then press Run Code.
                        </p>
                      </>
                    )}

                    {stage === "check-green" && (
                      <>
                        <p className="font-bold">
                          Checking green...
                        </p>

                        <p
                          className="
                            mt-2
                            font-mono
                            text-sm
                          "
                        >
                          light == &quot;green&quot;
                        </p>

                        <p
                          className={`
                            mt-2
                            text-sm
                            font-extrabold

                            ${
                              light === "green"
                                ? "text-green-600"
                                : "text-red-500"
                            }
                          `}
                        >
                          {light === "green"
                            ? "TRUE ✓"
                            : "FALSE ✕"}
                        </p>
                      </>
                    )}

                    {stage === "check-yellow" && (
                      <>
                        <p className="font-bold">
                          Green was false.
                        </p>

                        <p
                          className="
                            mt-2
                            font-mono
                            text-sm
                          "
                        >
                          light == &quot;yellow&quot;
                        </p>

                        <p
                          className={`
                            mt-2
                            text-sm
                            font-extrabold

                            ${
                              light === "yellow"
                                ? "text-yellow-600"
                                : "text-red-500"
                            }
                          `}
                        >
                          {light === "yellow"
                            ? "TRUE ✓"
                            : "FALSE ✕"}
                        </p>
                      </>
                    )}

                    {stage === "result" && (
                      <>
                        <p
                          className="
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.17em]
                            text-[#8294A6]
                          "
                        >
                          ManoBot&apos;s Action
                        </p>

                        <p
                          className={`
                            mt-2
                            text-3xl
                            font-black

                            ${
                              result === "GO"
                                ? "text-green-600"
                                : result ===
                                  "GET READY"
                                ? "text-yellow-600"
                                : "text-red-500"
                            }
                          `}
                        >
                          {result === "GO" &&
                            "🟢 GO!"}

                          {result ===
                            "GET READY" &&
                            "🟡 GET READY!"}

                          {result === "STOP" &&
                            "🔴 STOP!"}
                        </p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IF / ELIF / ELSE
          ===================================================== */}

      <section
        className="
          bg-[#F7FBFE]
          px-6
          py-24
          md:px-12
          md:py-28
        "
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="
              mx-auto
              max-w-3xl
              text-center
            "
          >
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#168BE8]
              "
            >
              Three Paths
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-extrabold
                tracking-tight
                md:text-5xl
              "
            >
              if, elif

              <span className="block text-[#168BE8]">
                and else.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {[
              {
                keyword: "if",
                title: "Check First",
                text: "Python checks the first condition.",
                example:
                  'if light == "green":',
              },
              {
                keyword: "elif",
                title: "Check Another",
                text: "If the first condition was false, Python can check another.",
                example:
                  'elif light == "yellow":',
              },
              {
                keyword: "else",
                title: "Everything Else",
                text: "If none of the earlier conditions were true, Python uses else.",
                example: "else:",
              },
            ].map((item) => (
              <div
                key={item.keyword}
                className="
                  rounded-[28px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  p-7
                "
              >
                <span
                  className="
                    font-mono
                    text-sm
                    font-black
                    text-[#168BE8]
                  "
                >
                  {item.keyword}
                </span>

                <h3
                  className="
                    mt-4
                    text-xl
                    font-extrabold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-[#647A8F]
                  "
                >
                  {item.text}
                </p>

                <div
                  className="
                    mt-5
                    overflow-x-auto
                    rounded-[16px]
                    bg-[#07182A]
                    px-4
                    py-3
                    font-mono
                    text-xs
                    text-[#9AD8FF]
                  "
                >
                  {item.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MINI CHALLENGE
          ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-24
          md:px-12
          md:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
            rounded-[36px]
            border
            border-[#168BE8]/10
            bg-[#F8FCFF]
            p-8
            md:p-12
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#168BE8]
            "
          >
            Mini Challenge
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-extrabold
              md:text-4xl
            "
          >
            An obstacle is 8 cm ahead.
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-[#647A8F]
            "
          >
            Read the code and decide what
            ManoBot should do.
          </p>

          {/* CODE */}

          <div
            className="
              mt-7
              overflow-x-auto
              rounded-[24px]
              bg-[#07182A]
              p-6
              font-mono
              text-sm
              leading-8
              text-white
            "
          >
            <p>
              <span className="text-[#7DD3FC]">
                distance
              </span>

              {" = "}

              <span className="text-[#C4B5FD]">
                8
              </span>
            </p>

            <br />

            <p>
              <span className="text-[#C4B5FD]">
                if
              </span>

              {" distance > "}

              <span className="text-[#C4B5FD]">
                10
              </span>

              :
            </p>

            <p className="pl-6">
              print(
              <span className="text-[#FFD38A]">
                &quot;Move forward&quot;
              </span>
              )
            </p>

            <p>
              <span className="text-[#C4B5FD]">
                else
              </span>
              :
            </p>

            <p className="pl-6">
              print(
              <span className="text-[#FFD38A]">
                &quot;Stop&quot;
              </span>
              )
            </p>
          </div>

          {/* ANSWERS */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-3
            "
          >
            <button
              type="button"
              onClick={() => {
                setChallengeAnswer("move");
                setChallengeChecked(false);
              }}
              className={`
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-bold

                ${
                  challengeAnswer === "move"
                    ? "border-[#168BE8] bg-[#EAF7FF] text-[#168BE8]"
                    : "border-[#168BE8]/15 bg-white"
                }
              `}
            >
              Move Forward
            </button>

            <button
              type="button"
              onClick={() => {
                setChallengeAnswer("stop");
                setChallengeChecked(false);
              }}
              className={`
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-bold

                ${
                  challengeAnswer === "stop"
                    ? "border-[#168BE8] bg-[#EAF7FF] text-[#168BE8]"
                    : "border-[#168BE8]/15 bg-white"
                }
              `}
            >
              Stop
            </button>

            <button
              type="button"
              disabled={!challengeAnswer}
              onClick={checkChallenge}
              className="
                rounded-full
                bg-[#0B1F3A]
                px-6
                py-3
                text-sm
                font-bold
                text-white
                disabled:opacity-40
              "
            >
              Check Answer
            </button>

            <button
              type="button"
              onClick={resetChallenge}
              className="
                rounded-full
                px-5
                py-3
                text-sm
                font-bold
                text-[#8294A6]
              "
            >
              Reset
            </button>
          </div>

          {/* RESULT */}

          <AnimatePresence>
            {challengeChecked && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={`
                  mt-6
                  rounded-[20px]
                  p-5

                  ${
                    challengeAnswer === "stop"
                      ? "bg-[#F0FFF7]"
                      : "bg-[#FFF5F5]"
                  }
                `}
              >
                {challengeAnswer === "stop" ? (
                  <>
                    <p
                      className="
                        font-extrabold
                        text-green-700
                      "
                    >
                      ✓ Correct — ManoBot stops.
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#647A8F]
                      "
                    >
                      8 is not greater than 10,
                      so the condition is false.
                      Python follows the else path.
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="
                        font-extrabold
                        text-red-600
                      "
                    >
                      Not quite.
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#647A8F]
                      "
                    >
                      Check the condition again:
                      is 8 greater than 10?
                    </p>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          TAKEAWAY
          ===================================================== */}

      <section
        className="
          bg-[#F7FBFE]
          px-6
          py-24
          md:px-12
          md:py-28
        "
      >
        <div
          className="
            mx-auto
            max-w-5xl
            rounded-[38px]
            bg-white
            px-8
            py-12
            text-center
            shadow-[0_20px_60px_rgba(11,31,58,0.07)]
            md:px-14
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#168BE8]
            "
          >
            Remember This
          </p>

          <h2
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-3xl
              font-extrabold
              leading-tight
              md:text-5xl
            "
          >
            Conditions let Python

            <span className="block text-[#168BE8]">
              choose what happens next.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-8
              flex
              max-w-2xl
              flex-wrap
              justify-center
              gap-3
            "
          >
            {[
              "if → first condition",
              "elif → another condition",
              "else → everything else",
            ].map((item) => (
              <span
                key={item}
                className="
                  rounded-full
                  bg-[#F7FBFE]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-[#49647E]
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-20
          md:px-12
          md:py-24
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-6xl
            flex-col
            gap-5
            sm:flex-row
          "
        >
          {/* PREVIOUS */}

          <Link
            href="/learning/python/variables-data"
            className="
              group
              flex
              flex-1
              items-center
              gap-5
              rounded-[28px]
              border
              border-[#168BE8]/10
              bg-[#F8FCFF]
              p-6
              transition
              hover:border-[#168BE8]/30
            "
          >
            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                font-bold
                text-[#168BE8]
                shadow-sm
                transition
                group-hover:-translate-x-1
              "
            >
              ←
            </span>

            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#8294A6]
                "
              >
                Previous
              </p>

              <p
                className="
                  mt-1
                  font-extrabold
                "
              >
                Variables & Data
              </p>
            </div>
          </Link>

          {/* NEXT */}

          <Link
            href="/learning/python/repeating-actions"
            className="
              group
              flex
              flex-1
              items-center
              justify-between
              gap-5
              rounded-[28px]
              bg-[#0B1F3A]
              p-6
              text-white
              transition
              hover:bg-[#168BE8]
            "
          >
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#65CFFF]
                "
              >
                Module 04
              </p>

              <p
                className="
                  mt-1
                  font-extrabold
                "
              >
                Repeating Actions
              </p>
            </div>

            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white
                font-bold
                text-[#0B1F3A]
                transition
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
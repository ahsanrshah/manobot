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

type LoopStage =
  | "idle"
  | "running"
  | "done";

type LoopMode =
  | "for"
  | "while";

/* =========================================================
   PAGE
   ========================================================= */

export default function RepeatingActionsPage() {
  const [loopMode, setLoopMode] =
    useState<LoopMode>("for");

  const [steps, setSteps] =
    useState(5);

  const [currentStep, setCurrentStep] =
    useState(0);

  const [stage, setStage] =
    useState<LoopStage>("idle");

  const [robotPosition, setRobotPosition] =
    useState(0);

  const [whileDistance, setWhileDistance] =
    useState(5);

  const [challengeAnswer, setChallengeAnswer] =
    useState<number | null>(null);

  const [challengeChecked, setChallengeChecked] =
    useState(false);

  const timersRef =
    useRef<ReturnType<typeof setTimeout>[]>([]);

  /* =====================================================
     CLEAR TIMERS
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
     RUN FOR LOOP
     ===================================================== */

  const runForLoop = () => {
    clearTimers();

    setStage("running");
    setCurrentStep(0);
    setRobotPosition(0);

    for (let i = 0; i < steps; i++) {
      timersRef.current.push(
        setTimeout(() => {
          setCurrentStep(i + 1);
          setRobotPosition(
            ((i + 1) / steps) * 100
          );
        }, 650 * (i + 1))
      );
    }

    timersRef.current.push(
      setTimeout(() => {
        setStage("done");
      }, 650 * (steps + 1))
    );
  };

  /* =====================================================
     RUN WHILE LOOP
     ===================================================== */

  const runWhileLoop = () => {
    clearTimers();

    setStage("running");
    setCurrentStep(0);
    setRobotPosition(0);

    const repetitions = whileDistance;

    for (let i = 0; i < repetitions; i++) {
      timersRef.current.push(
        setTimeout(() => {
          setCurrentStep(i + 1);
          setRobotPosition(
            ((i + 1) / repetitions) * 100
          );
        }, 650 * (i + 1))
      );
    }

    timersRef.current.push(
      setTimeout(() => {
        setStage("done");
      }, 650 * (repetitions + 1))
    );
  };

  /* =====================================================
     RUN SELECTED LOOP
     ===================================================== */

  const runLoop = () => {
    if (loopMode === "for") {
      runForLoop();
    } else {
      runWhileLoop();
    }
  };

  /* =====================================================
     RESET
     ===================================================== */

  const resetActivity = () => {
    clearTimers();

    setSteps(5);
    setCurrentStep(0);
    setStage("idle");
    setRobotPosition(0);
    setWhileDistance(5);
  };

  /* =====================================================
     CHALLENGE
     ===================================================== */

  const checkChallenge = () => {
    if (challengeAnswer === null) return;

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
        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[-20%]
            h-[560px]
            w-[560px]
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
              Repeating Actions
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
            Module 04 • Loops
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
            Repeating

            <span className="block text-[#168BE8]">
              Actions
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
            ManoBot often needs to perform the same
            instruction again and again. Python loops
            let us repeat actions without writing the
            same code many times.
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
              "Interactive Loops",
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
                Mano has a repetitive problem.
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
              Watch why writing the same instruction
              again and again is inefficient, and how
              loops solve the problem.
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
                src="/videos/python/module-04-repeating-actions.mp4"
                type="video/mp4"
              />

              Your browser does not support video.
            </video>
          </motion.div>
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
              Repeat once.

              <span className="block text-[#168BE8]">
                Let Python do the rest.
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
              A loop repeats a block of code.
              This keeps programs shorter, clearer
              and easier to change.
            </p>
          </motion.div>

          {/* COMPARISON */}

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            {/* WITHOUT LOOP */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-[28px]
                border
                border-[#168BE8]/10
                bg-white
                p-6
              "
            >
              <p
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-[#E45B5B]
                "
              >
                Without a Loop
              </p>

              <div
                className="
                  mt-5
                  rounded-[18px]
                  bg-[#07182A]
                  p-5
                  font-mono
                  text-sm
                  leading-8
                  text-white
                "
              >
                <p>move_forward()</p>
                <p>move_forward()</p>
                <p>move_forward()</p>
                <p>move_forward()</p>
              </div>
            </motion.div>

            {/* WITH LOOP */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-[28px]
                border
                border-[#168BE8]/10
                bg-white
                p-6
              "
            >
              <p
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-[#37A66A]
                "
              >
                With a Loop
              </p>

              <div
                className="
                  mt-5
                  rounded-[18px]
                  bg-[#07182A]
                  p-5
                  font-mono
                  text-sm
                  leading-8
                  text-white
                "
              >
                <p>
                  <span className="text-[#C4B5FD]">
                    for
                  </span>{" "}
                  step{" "}
                  <span className="text-[#C4B5FD]">
                    in
                  </span>{" "}
                  range(4):
                </p>

                <p className="pl-6">
                  move_forward()
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOOP INTERACTIVE
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
              Make ManoBot

              <span className="block text-[#168BE8]">
                repeat the move.
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
              Choose a loop, change the number
              of repetitions and watch each loop
              iteration become one movement.
            </p>
          </div>

          {/* MODE BUTTONS */}

          <div
            className="
              mx-auto
              mt-10
              flex
              max-w-lg
              justify-center
              gap-3
            "
          >
            <button
              type="button"
              disabled={stage === "running"}
              onClick={() => {
                setLoopMode("for");
                resetActivity();
              }}
              className={`
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-bold
                transition

                ${
                  loopMode === "for"
                    ? "border-[#168BE8] bg-[#EAF7FF] text-[#168BE8]"
                    : "border-[#168BE8]/10 bg-white text-[#526A80]"
                }
              `}
            >
              for loop
            </button>

            <button
              type="button"
              disabled={stage === "running"}
              onClick={() => {
                setLoopMode("while");
                resetActivity();
              }}
              className={`
                rounded-full
                border
                px-6
                py-3
                text-sm
                font-bold
                transition

                ${
                  loopMode === "while"
                    ? "border-[#168BE8] bg-[#EAF7FF] text-[#168BE8]"
                    : "border-[#168BE8]/10 bg-white text-[#526A80]"
                }
              `}
            >
              while loop
            </button>
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
                CODE SIDE
                ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[32px]
                bg-[#07182A]
                shadow-[0_25px_65px_rgba(7,24,42,0.18)]
              "
            >
              {/* WINDOW BAR */}

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
                  manobot_loop.py
                </span>
              </div>

              {/* CONTROLS */}

              <div
                className="
                  border-b
                  border-white/10
                  px-6
                  py-5
                "
              >
                {loopMode === "for" ? (
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-white/45
                      "
                    >
                      Repetitions
                    </p>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <button
                        type="button"
                        disabled={
                          stage === "running" ||
                          steps <= 1
                        }
                        onClick={() =>
                          setSteps((value) =>
                            Math.max(1, value - 1)
                          )
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          font-bold
                          text-white
                        "
                      >
                        −
                      </button>

                      <span
                        className="
                          w-10
                          text-center
                          font-mono
                          text-2xl
                          font-black
                          text-[#65CFFF]
                        "
                      >
                        {steps}
                      </span>

                      <button
                        type="button"
                        disabled={
                          stage === "running" ||
                          steps >= 6
                        }
                        onClick={() =>
                          setSteps((value) =>
                            Math.min(6, value + 1)
                          )
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          font-bold
                          text-white
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-white/45
                      "
                    >
                      Blocks until destination
                    </p>

                    <div
                      className="
                        mt-3
                        flex
                        items-center
                        gap-4
                      "
                    >
                      <button
                        type="button"
                        disabled={
                          stage === "running" ||
                          whileDistance <= 1
                        }
                        onClick={() =>
                          setWhileDistance((value) =>
                            Math.max(1, value - 1)
                          )
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          font-bold
                          text-white
                        "
                      >
                        −
                      </button>

                      <span
                        className="
                          w-10
                          text-center
                          font-mono
                          text-2xl
                          font-black
                          text-[#65CFFF]
                        "
                      >
                        {whileDistance}
                      </span>

                      <button
                        type="button"
                        disabled={
                          stage === "running" ||
                          whileDistance >= 6
                        }
                        onClick={() =>
                          setWhileDistance((value) =>
                            Math.min(6, value + 1)
                          )
                        }
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-white/10
                          font-bold
                          text-white
                        "
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* CODE */}

              <div
                className="
                  min-h-[350px]
                  overflow-x-auto
                  p-7
                  font-mono
                  text-base
                  leading-10
                "
              >
                {loopMode === "for" ? (
                  <>
                    <motion.div
                      animate={{
                        backgroundColor:
                          stage === "running"
                            ? "rgba(22,139,232,0.18)"
                            : "rgba(22,139,232,0)",
                      }}
                      className="
                        -mx-3
                        rounded-lg
                        px-3
                      "
                    >
                      <span className="mr-5 text-white/25">
                        1
                      </span>

                      <span className="text-[#C4B5FD]">
                        for
                      </span>

                      <span className="text-white">
                        {" step "}
                      </span>

                      <span className="text-[#C4B5FD]">
                        in
                      </span>

                      <span className="text-white">
                        {" range("}
                      </span>

                      <span className="text-[#FFD38A]">
                        {steps}
                      </span>

                      <span className="text-white">
                        ):
                      </span>
                    </motion.div>

                    <motion.div
                      animate={{
                        backgroundColor:
                          stage === "running"
                            ? "rgba(22,139,232,0.10)"
                            : "rgba(22,139,232,0)",
                      }}
                      className="
                        -mx-3
                        rounded-lg
                        px-3
                      "
                    >
                      <span className="mr-5 text-white/25">
                        2
                      </span>

                      <span className="ml-6 text-[#7DD3FC]">
                        move_forward
                      </span>

                      <span className="text-white">
                        ()
                      </span>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <div>
                      <span className="mr-5 text-white/25">
                        1
                      </span>

                      <span className="text-[#7DD3FC]">
                        destination_reached
                      </span>

                      <span className="text-white">
                        {" = "}
                      </span>

                      <span className="text-[#C4B5FD]">
                        False
                      </span>
                    </div>

                    <div>
                      <span className="mr-5 text-white/25">
                        2
                      </span>
                    </div>

                    <motion.div
                      animate={{
                        backgroundColor:
                          stage === "running"
                            ? "rgba(22,139,232,0.18)"
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
                        while
                      </span>

                      <span className="text-white">
                        {" destination_reached == "}
                      </span>

                      <span className="text-[#C4B5FD]">
                        False
                      </span>

                      <span className="text-white">
                        :
                      </span>
                    </motion.div>

                    <motion.div
                      animate={{
                        backgroundColor:
                          stage === "running"
                            ? "rgba(22,139,232,0.10)"
                            : "rgba(22,139,232,0)",
                      }}
                      className="
                        -mx-3
                        rounded-lg
                        px-3
                      "
                    >
                      <span className="mr-5 text-white/25">
                        4
                      </span>

                      <span className="ml-6 text-[#7DD3FC]">
                        move_forward
                      </span>

                      <span className="text-white">
                        ()
                      </span>
                    </motion.div>
                  </>
                )}

                {/* CURRENT ITERATION */}

                <AnimatePresence>
                  {stage !== "idle" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="
                        mt-10
                        rounded-[18px]
                        bg-white/5
                        p-4
                      "
                    >
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-white/40
                        "
                      >
                        Loop Status
                      </p>

                      <p
                        className="
                          mt-2
                          text-sm
                          font-bold
                          text-[#65CFFF]
                        "
                      >
                        {stage === "done"
                          ? "Loop complete ✓"
                          : `Iteration ${currentStep}`}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BUTTONS */}

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
                  disabled={stage === "running"}
                  onClick={runLoop}
                  whileTap={
                    stage === "running"
                      ? {}
                      : {
                          scale: 0.97,
                        }
                  }
                  className={`
                    rounded-full
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white

                    ${
                      stage === "running"
                        ? "cursor-not-allowed bg-[#168BE8]/40"
                        : "bg-[#168BE8] hover:bg-[#249BF4]"
                    }
                  `}
                >
                  {stage === "running"
                    ? "Loop Running..."
                    : "Run Code"}{" "}
                  ▶
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
                  "
                >
                  Reset
                </button>
              </div>
            </div>

            {/* =================================================
                MANOCITY ROAD
                ================================================= */}

            <div
              className="
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
                ManoCity Road
              </p>

              <h3
                className="
                  mt-2
                  text-2xl
                  font-extrabold
                "
              >
                One loop = one move.
              </h3>

              {/* ROAD */}

              <div
                className="
                  relative
                  mt-10
                  h-[220px]
                  overflow-hidden
                  rounded-[26px]
                  bg-[#DDE4E9]
                "
              >
                {/* ROAD STRIP */}

                <div
                  className="
                    absolute
                    left-[7%]
                    right-[7%]
                    top-1/2
                    h-[92px]
                    -translate-y-1/2
                    rounded-[20px]
                    bg-[#3C4854]
                  "
                />

                {/* LANE LINE */}

                <div
                  className="
                    absolute
                    left-[10%]
                    right-[10%]
                    top-1/2
                    border-t-2
                    border-dashed
                    border-white/70
                  "
                />

                {/* HOME */}

                <div
                  className="
                    absolute
                    left-[3%]
                    top-[20px]
                    text-4xl
                  "
                >
                  🏠
                </div>

                {/* SCHOOL */}

                <div
                  className="
                    absolute
                    right-[3%]
                    top-[20px]
                    text-4xl
                  "
                >
                  🏫
                </div>

                {/* ROBOT */}

                <motion.div
                  animate={{
                    left: `${8 + robotPosition * 0.79}%`,
                  }}
                  transition={{
                    duration: 0.5,
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

              {/* ITERATION BOXES */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {Array.from({
                  length:
                    loopMode === "for"
                      ? steps
                      : whileDistance,
                }).map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      backgroundColor:
                        currentStep > index
                          ? "#168BE8"
                          : "#EAF7FF",

                      color:
                        currentStep > index
                          ? "#ffffff"
                          : "#168BE8",
                    }}
                    className="
                      flex
                      h-10
                      min-w-10
                      items-center
                      justify-center
                      rounded-full
                      px-3
                      text-xs
                      font-extrabold
                    "
                  >
                    {index}
                  </motion.div>
                ))}
              </div>

              {/* STATUS */}

              <div
                className="
                  mt-6
                  min-h-[105px]
                  rounded-[22px]
                  bg-white
                  p-5
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${stage}-${currentStep}`}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    {stage === "idle" && (
                      <>
                        <p className="font-bold">
                          Ready to repeat?
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Press Run Code and watch each
                          loop iteration move ManoBot.
                        </p>
                      </>
                    )}

                    {stage === "running" && (
                      <>
                        <p className="font-bold">
                          Iteration {currentStep}
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Python runs{" "}
                          <span className="font-mono font-bold text-[#168BE8]">
                            move_forward()
                          </span>{" "}
                          again.
                        </p>
                      </>
                    )}

                    {stage === "done" && (
                      <>
                        <p
                          className="
                            font-extrabold
                            text-green-700
                          "
                        >
                          ✓ Destination reached
                        </p>

                        <p
                          className="
                            mt-2
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Python repeated the same
                          instruction without us writing
                          it again and again.
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
          FOR VS WHILE
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
              Two Types of Loop
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
              Know how many?

              <span className="block text-[#168BE8]">
                Or know when to stop?
              </span>
            </h2>
          </div>

          <div
            className="
              mt-14
              grid
              gap-6
              md:grid-cols-2
            "
          >
            {/* FOR */}

            <div
              className="
                rounded-[30px]
                border
                border-[#168BE8]/10
                bg-white
                p-8
              "
            >
              <span
                className="
                  font-mono
                  text-lg
                  font-black
                  text-[#168BE8]
                "
              >
                for
              </span>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-extrabold
                "
              >
                I know how many times.
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#647A8F]
                "
              >
                Use a for loop when the number
                of repetitions is known.
              </p>

              <div
                className="
                  mt-6
                  rounded-[18px]
                  bg-[#07182A]
                  p-5
                  font-mono
                  text-sm
                  text-white
                "
              >
                <p>
                  <span className="text-[#C4B5FD]">
                    for
                  </span>{" "}
                  step{" "}
                  <span className="text-[#C4B5FD]">
                    in
                  </span>{" "}
                  range(5):
                </p>

                <p className="pl-6">
                  move_forward()
                </p>
              </div>
            </div>

            {/* WHILE */}

            <div
              className="
                rounded-[30px]
                border
                border-[#168BE8]/10
                bg-white
                p-8
              "
            >
              <span
                className="
                  font-mono
                  text-lg
                  font-black
                  text-[#168BE8]
                "
              >
                while
              </span>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-extrabold
                "
              >
                I know when to stop.
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#647A8F]
                "
              >
                Use a while loop when repetition
                depends on a condition.
              </p>

              <div
                className="
                  mt-6
                  rounded-[18px]
                  bg-[#07182A]
                  p-5
                  font-mono
                  text-sm
                  text-white
                "
              >
                <p>
                  <span className="text-[#C4B5FD]">
                    while
                  </span>{" "}
                  destination_reached == False:
                </p>

                <p className="pl-6">
                  move_forward()
                </p>
              </div>
            </div>
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
            ManoBot must flash 3 times.
          </h2>

          <p
            className="
              mt-4
              text-base
              leading-7
              text-[#647A8F]
            "
          >
            What number should go inside{" "}
            <span
              className="
                font-mono
                font-bold
                text-[#168BE8]
              "
            >
              range()
            </span>
            ?
          </p>

          {/* CODE */}

          <div
            className="
              mt-7
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
              <span className="text-[#C4B5FD]">
                for
              </span>{" "}
              flash{" "}
              <span className="text-[#C4B5FD]">
                in
              </span>{" "}
              range(
              <span className="text-[#FFD38A]">
                ?
              </span>
              ):
            </p>

            <p className="pl-6">
              print(
              <span className="text-[#FFD38A]">
                &quot;Light ON&quot;
              </span>
              )
            </p>
          </div>

          {/* OPTIONS */}

          <div
            className="
              mt-7
              flex
              flex-wrap
              gap-3
            "
          >
            {[2, 3, 4].map((answer) => (
              <button
                key={answer}
                type="button"
                onClick={() => {
                  setChallengeAnswer(answer);
                  setChallengeChecked(false);
                }}
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  font-mono
                  font-black

                  ${
                    challengeAnswer === answer
                      ? "border-[#168BE8] bg-[#EAF7FF] text-[#168BE8]"
                      : "border-[#168BE8]/15 bg-white"
                  }
                `}
              >
                {answer}
              </button>
            ))}

            <button
              type="button"
              disabled={challengeAnswer === null}
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
                    challengeAnswer === 3
                      ? "bg-[#F0FFF7]"
                      : "bg-[#FFF5F5]"
                  }
                `}
              >
                {challengeAnswer === 3 ? (
                  <>
                    <p
                      className="
                        font-extrabold
                        text-green-700
                      "
                    >
                      ✓ Correct — 3 repetitions.
                    </p>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-6
                        text-[#647A8F]
                      "
                    >
                      range(3) makes the loop run
                      three times.
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
                      ManoBot needs exactly three
                      flashes. Try again.
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
            Loops repeat instructions

            <span className="block text-[#168BE8]">
              without repeating your code.
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
            <span
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
              for → known repetitions
            </span>

            <span
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
              while → repeat while true
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          MODULE NAVIGATION
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
            href="/learning/python/making-decisions"
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
                Making Decisions
              </p>
            </div>
          </Link>

          {/* NEXT */}

          <Link
            href="/learning/python/functions"
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
                Module 05
              </p>

              <p
                className="
                  mt-1
                  font-extrabold
                "
              >
                Functions
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
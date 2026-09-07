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

type RunStage =
  | "idle"
  | "destination"
  | "speed"
  | "output";

const destinations = [
  "School",
  "Shop",
  "Park",
];

/* =========================================================
   PAGE
   ========================================================= */

export default function VariablesDataPage() {
  const [destination, setDestination] =
    useState("School");

  const [speed, setSpeed] =
    useState(3);

  const [stage, setStage] =
    useState<RunStage>("idle");

  const [running, setRunning] =
    useState(false);

  const [storedDestination, setStoredDestination] =
    useState("");

  const [storedSpeed, setStoredSpeed] =
    useState<number | null>(null);

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
     RUN CODE
     ===================================================== */

  const runCode = () => {
    clearTimers();

    setRunning(true);
    setStage("idle");
    setStoredDestination("");
    setStoredSpeed(null);

    /*
     * Stage 1:
     * Python stores the destination.
     */

    timersRef.current.push(
      setTimeout(() => {
        setStage("destination");
        setStoredDestination(destination);
      }, 500)
    );

    /*
     * Stage 2:
     * Python stores the speed.
     */

    timersRef.current.push(
      setTimeout(() => {
        setStage("speed");
        setStoredSpeed(speed);
      }, 1500)
    );

    /*
     * Stage 3:
     * Python uses the stored information.
     */

    timersRef.current.push(
      setTimeout(() => {
        setStage("output");
        setRunning(false);
      }, 2700)
    );
  };

  /* =====================================================
     RESET
     ===================================================== */

  const resetActivity = () => {
    clearTimers();

    setDestination("School");
    setSpeed(3);
    setStage("idle");
    setRunning(false);
    setStoredDestination("");
    setStoredSpeed(null);
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
        {/* BACKGROUND ACCENTS */}

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
              Variables & Data
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
            Module 02 • Foundation
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
            Variables

            <span className="block text-[#168BE8]">
              & Data
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
            ManoBot now understands instructions.
            But to travel through ManoCity, she also
            needs to remember information such as
            her destination and speed.
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
              "Interactive Activity",
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
          VIDEO LESSON
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

          {/* VIDEO INTRO */}

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
                Mano needs to remember.
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
              Watch how Python can store information
              such as Mano&apos;s destination and speed.
              Then try it yourself below.
            </p>
          </div>

          {/* VIDEO */}

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
  src="/videos/python/module-02-variables-data.mp4"
  type="video/mp4"
/>

              Your browser does not support video.
            </video>
          </motion.div>

          {/* CONTINUE HINT */}

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

            Finished watching? Now see what happens
            inside Python.
          </div>
        </div>
      </section>

      {/* =====================================================
          CONCEPT
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
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* LEFT */}

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
                leading-[1.06]
                tracking-tight
                md:text-5xl
              "
            >
              Think of a variable

              <span className="block text-[#168BE8]">
                like a labelled box.
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
              The variable&apos;s name is the label.
              The information we store is the value
              inside the box.
            </p>
          </motion.div>

          {/* VARIABLE VISUAL */}

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
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            {/* DESTINATION */}

            <div
              className="
                rounded-[30px]
                border
                border-[#168BE8]/10
                bg-white
                p-7
                shadow-[0_15px_45px_rgba(11,31,58,0.06)]
              "
            >
              <p
                className="
                  font-mono
                  text-sm
                  font-bold
                  text-[#168BE8]
                "
              >
                destination
              </p>

              <div
                className="
                  mt-5
                  flex
                  min-h-[110px]
                  items-center
                  justify-center
                  rounded-[20px]
                  border-2
                  border-dashed
                  border-[#168BE8]/25
                  bg-[#F8FCFF]
                "
              >
                <span
                  className="
                    font-mono
                    text-2xl
                    font-bold
                    text-[#0B1F3A]
                  "
                >
                  &quot;School&quot;
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-xs
                  font-semibold
                  text-[#8294A6]
                "
              >
                String — text data
              </p>
            </div>

            {/* SPEED */}

            <div
              className="
                rounded-[30px]
                border
                border-[#168BE8]/10
                bg-white
                p-7
                shadow-[0_15px_45px_rgba(11,31,58,0.06)]
              "
            >
              <p
                className="
                  font-mono
                  text-sm
                  font-bold
                  text-[#168BE8]
                "
              >
                speed
              </p>

              <div
                className="
                  mt-5
                  flex
                  min-h-[110px]
                  items-center
                  justify-center
                  rounded-[20px]
                  border-2
                  border-dashed
                  border-[#168BE8]/25
                  bg-[#F8FCFF]
                "
              >
                <span
                  className="
                    font-mono
                    text-3xl
                    font-bold
                    text-[#0B1F3A]
                  "
                >
                  3
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-xs
                  font-semibold
                  text-[#8294A6]
                "
              >
                Integer — whole number
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE ACTIVITY
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
              Give Mano

              <span className="block text-[#168BE8]">
                a mission.
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
              Choose Mano&apos;s destination and speed.
              Then run the program and watch Python
              store the information.
            </p>
          </motion.div>

          {/* =================================================
              CONTROLS
              ================================================= */}

          <div
            className="
              mx-auto
              mt-12
              grid
              max-w-4xl
              gap-5
              rounded-[30px]
              border
              border-[#168BE8]/10
              bg-[#F8FCFF]
              p-6
              sm:grid-cols-2
              md:p-8
            "
          >
            {/* DESTINATION SELECT */}

            <div>
              <label
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-[#526A80]
                "
              >
                Destination
              </label>

              <select
                value={destination}
                disabled={running}
                onChange={(event) =>
                  setDestination(event.target.value)
                }
                className="
                  mt-3
                  w-full
                  rounded-[18px]
                  border
                  border-[#168BE8]/15
                  bg-white
                  px-5
                  py-4
                  text-base
                  font-bold
                  text-[#0B1F3A]
                  outline-none
                  transition
                  focus:border-[#168BE8]
                "
              >
                {destinations.map((place) => (
                  <option
                    key={place}
                    value={place}
                  >
                    {place}
                  </option>
                ))}
              </select>
            </div>

            {/* SPEED */}

            <div>
              <label
                className="
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-[#526A80]
                "
              >
                Speed
              </label>

              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                  rounded-[18px]
                  border
                  border-[#168BE8]/15
                  bg-white
                  p-2
                "
              >
                <button
                  type="button"
                  disabled={running || speed <= 1}
                  onClick={() =>
                    setSpeed((value) =>
                      Math.max(1, value - 1)
                    )
                  }
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF7FF]
                    text-xl
                    font-bold
                    text-[#168BE8]
                    transition
                    hover:bg-[#D7F0FF]
                    disabled:opacity-40
                  "
                >
                  −
                </button>

                <span
                  className="
                    font-mono
                    text-2xl
                    font-black
                    text-[#0B1F3A]
                  "
                >
                  {speed}
                </span>

                <button
                  type="button"
                  disabled={running || speed >= 5}
                  onClick={() =>
                    setSpeed((value) =>
                      Math.min(5, value + 1)
                    )
                  }
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF7FF]
                    text-xl
                    font-bold
                    text-[#168BE8]
                    transition
                    hover:bg-[#D7F0FF]
                    disabled:opacity-40
                  "
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* =================================================
              WORKSPACE
              ================================================= */}

          <div
            className="
              mt-7
              grid
              gap-6
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >
            {/* =================================================
                CODE PANEL
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
                  mano_mission.py
                </span>
              </div>

              {/* CODE */}

              <div
                className="
                  min-h-[350px]
                  p-7
                  font-mono
                  text-base
                  leading-10
                  md:text-lg
                "
              >
                {/* LINE 1 */}

                <motion.div
                  animate={{
                    backgroundColor:
                      stage === "destination"
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

                  <span className="text-[#7DD3FC]">
                    destination
                  </span>

                  <span className="text-white">
                    {" = "}
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;{destination}&quot;
                  </span>
                </motion.div>

                {/* LINE 2 */}

                <motion.div
                  animate={{
                    backgroundColor:
                      stage === "speed"
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
                    2
                  </span>

                  <span className="text-[#7DD3FC]">
                    speed
                  </span>

                  <span className="text-white">
                    {" = "}
                  </span>

                  <span className="text-[#C4B5FD]">
                    {speed}
                  </span>
                </motion.div>

                {/* EMPTY LINE */}

                <div>
                  <span className="mr-5 text-white/25">
                    3
                  </span>
                </div>

                {/* PRINT */}

                <motion.div
                  animate={{
                    backgroundColor:
                      stage === "output"
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
                    4
                  </span>

                  <span className="text-[#7DD3FC]">
                    print
                  </span>

                  <span className="text-white">
                    (
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;Destination:&quot;
                  </span>

                  <span className="text-white">
                    , destination)
                  </span>
                </motion.div>

                <motion.div
                  animate={{
                    backgroundColor:
                      stage === "output"
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
                    5
                  </span>

                  <span className="text-[#7DD3FC]">
                    print
                  </span>

                  <span className="text-white">
                    (
                  </span>

                  <span className="text-[#FFD38A]">
                    &quot;Speed:&quot;
                  </span>

                  <span className="text-white">
                    , speed)
                  </span>
                </motion.div>
              </div>

              {/* BUTTONS */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  border-t
                  border-white/10
                  px-6
                  py-5
                "
              >
                <motion.button
                  type="button"
                  onClick={runCode}
                  disabled={running}
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
                    transition

                    ${
                      running
                        ? "cursor-not-allowed bg-[#168BE8]/40"
                        : "bg-[#168BE8] hover:bg-[#249BF4]"
                    }
                  `}
                >
                  {running
                    ? "Running..."
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
                    hover:border-white/40
                    hover:text-white
                  "
                >
                  Reset
                </button>
              </div>
            </div>

            {/* =================================================
                MEMORY VISUAL
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
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#168BE8]
                    "
                  >
                    Python Memory
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-extrabold
                    "
                  >
                    Watch the values get stored.
                  </h3>
                </div>

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF7FF]
                    text-lg
                  "
                >
                  🧠
                </div>
              </div>

              {/* MEMORY BOXES */}

              <div
                className="
                  mt-8
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >
                {/* DESTINATION BOX */}

                <motion.div
                  animate={{
                    scale:
                      stage === "destination"
                        ? [1, 1.04, 1]
                        : 1,
                    borderColor:
                      storedDestination
                        ? "#168BE8"
                        : "rgba(22,139,232,0.18)",
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    rounded-[24px]
                    border-2
                    bg-white
                    p-5
                  "
                >
                  <p
                    className="
                      font-mono
                      text-xs
                      font-bold
                      text-[#168BE8]
                    "
                  >
                    destination
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      min-h-[100px]
                      items-center
                      justify-center
                      rounded-[18px]
                      bg-[#F7FBFE]
                    "
                  >
                    <AnimatePresence mode="wait">
                      {storedDestination ? (
                        <motion.span
                          key={storedDestination}
                          initial={{
                            opacity: 0,
                            y: -25,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          className="
                            font-mono
                            text-xl
                            font-black
                            text-[#0B1F3A]
                          "
                        >
                          &quot;
                          {storedDestination}
                          &quot;
                        </motion.span>
                      ) : (
                        <motion.span
                          key="empty"
                          className="
                            text-xs
                            font-bold
                            text-[#A1AFBC]
                          "
                        >
                          Empty
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <p
                    className="
                      mt-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#8294A6]
                    "
                  >
                    String
                  </p>
                </motion.div>

                {/* SPEED BOX */}

                <motion.div
                  animate={{
                    scale:
                      stage === "speed"
                        ? [1, 1.04, 1]
                        : 1,
                    borderColor:
                      storedSpeed !== null
                        ? "#168BE8"
                        : "rgba(22,139,232,0.18)",
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    rounded-[24px]
                    border-2
                    bg-white
                    p-5
                  "
                >
                  <p
                    className="
                      font-mono
                      text-xs
                      font-bold
                      text-[#168BE8]
                    "
                  >
                    speed
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      min-h-[100px]
                      items-center
                      justify-center
                      rounded-[18px]
                      bg-[#F7FBFE]
                    "
                  >
                    <AnimatePresence mode="wait">
                      {storedSpeed !== null ? (
                        <motion.span
                          key={storedSpeed}
                          initial={{
                            opacity: 0,
                            y: -25,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          className="
                            font-mono
                            text-3xl
                            font-black
                            text-[#0B1F3A]
                          "
                        >
                          {storedSpeed}
                        </motion.span>
                      ) : (
                        <motion.span
                          key="empty"
                          className="
                            text-xs
                            font-bold
                            text-[#A1AFBC]
                          "
                        >
                          Empty
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>

                  <p
                    className="
                      mt-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#8294A6]
                    "
                  >
                    Integer
                  </p>
                </motion.div>
              </div>

              {/* EXPLANATION */}

              <div
                className="
                  mt-6
                  min-h-[95px]
                  rounded-[20px]
                  bg-white
                  p-5
                "
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage}
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
                          Ready?
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Press Run Code to see how
                          Python stores Mano&apos;s
                          information.
                        </p>
                      </>
                    )}

                    {stage === "destination" && (
                      <>
                        <p className="font-bold">
                          Storing destination...
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Python creates a variable
                          called{" "}
                          <span className="font-mono font-bold text-[#168BE8]">
                            destination
                          </span>{" "}
                          and stores the text{" "}
                          <span className="font-mono font-bold">
                            &quot;{destination}&quot;
                          </span>
                          .
                        </p>
                      </>
                    )}

                    {stage === "speed" && (
                      <>
                        <p className="font-bold">
                          Storing speed...
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Now Python stores the number{" "}
                          <span className="font-mono font-bold">
                            {speed}
                          </span>{" "}
                          inside the variable{" "}
                          <span className="font-mono font-bold text-[#168BE8]">
                            speed
                          </span>
                          .
                        </p>
                      </>
                    )}

                    {stage === "output" && (
                      <>
                        <p className="font-bold">
                          Mission ready!
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            leading-6
                            text-[#647A8F]
                          "
                        >
                          Python can now use the
                          information stored inside
                          both variables.
                        </p>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* =================================================
              OUTPUT / MISSION CARD
              ================================================= */}

          <AnimatePresence>
            {stage === "output" && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                  mx-auto
                  mt-7
                  max-w-3xl
                  overflow-hidden
                  rounded-[30px]
                  bg-[#0B1F3A]
                  p-8
                  text-white
                  shadow-[0_22px_55px_rgba(11,31,58,0.16)]
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    justify-between
                    gap-6
                    sm:flex-row
                    sm:items-center
                  "
                >
                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#65CFFF]
                      "
                    >
                      Mano&apos;s Mission
                    </p>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-extrabold
                      "
                    >
                      Information stored successfully.
                    </h3>
                  </div>

                  <div
                    className="
                      rounded-[20px]
                      bg-white/10
                      px-6
                      py-4
                    "
                  >
                    <p
                      className="
                        font-mono
                        text-sm
                        leading-7
                      "
                    >
                      Destination:{" "}
                      <span className="font-bold text-[#65CFFF]">
                        {storedDestination}
                      </span>

                      <br />

                      Speed:{" "}
                      <span className="font-bold text-[#65CFFF]">
                        {storedSpeed}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          DATA TYPES
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
              Different Kinds of Data
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
              Variables can remember

              <span className="block text-[#168BE8]">
                different kinds of information.
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
            {/* STRING */}

            <div
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
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.17em]
                  text-[#168BE8]
                "
              >
                String
              </span>

              <p
                className="
                  mt-5
                  font-mono
                  text-xl
                  font-bold
                "
              >
                destination = &quot;School&quot;
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#647A8F]
                "
              >
                Strings store text. Text is normally
                placed inside quotation marks.
              </p>
            </div>

            {/* INTEGER */}

            <div
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
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.17em]
                  text-[#168BE8]
                "
              >
                Integer
              </span>

              <p
                className="
                  mt-5
                  font-mono
                  text-xl
                  font-bold
                "
              >
                speed = 3
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#647A8F]
                "
              >
                Integers store whole numbers such as
                1, 3, 10 or 100.
              </p>
            </div>

            {/* FLOAT */}

            <div
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
                  text-xs
                  font-extrabold
                  uppercase
                  tracking-[0.17em]
                  text-[#168BE8]
                "
              >
                Float
              </span>

              <p
                className="
                  mt-5
                  font-mono
                  text-xl
                  font-bold
                "
              >
                distance = 2.5
              </p>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#647A8F]
                "
              >
                Floats store numbers containing a
                decimal point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INPUT
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
            grid
            max-w-6xl
            items-center
            gap-12
            lg:grid-cols-2
          "
        >
          {/* TEXT */}

          <div>
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#168BE8]
              "
            >
              One More Idea
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
              Let the user

              <span className="block text-[#168BE8]">
                provide the information.
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
              Instead of putting a value directly into
              our program, Python can ask the user for
              information using{" "}
              <span
                className="
                  font-mono
                  font-bold
                  text-[#168BE8]
                "
              >
                input()
              </span>
              .
            </p>
          </div>

          {/* CODE */}

          <div
            className="
              overflow-hidden
              rounded-[28px]
              bg-[#07182A]
              shadow-[0_20px_55px_rgba(7,24,42,0.16)]
            "
          >
            <div
              className="
                border-b
                border-white/10
                px-6
                py-4
              "
            >
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/40
                "
              >
                ask_mano.py
              </span>
            </div>

            <div
              className="
                overflow-x-auto
                p-7
                font-mono
                text-base
                leading-9
              "
            >
              <div>
                <span className="text-[#7DD3FC]">
                  destination
                </span>

                <span className="text-white">
                  {" = "}
                </span>

                <span className="text-[#C4B5FD]">
                  input
                </span>

                <span className="text-white">
                  (
                </span>

                <span className="text-[#FFD38A]">
                  &quot;Where should Mano go? &quot;
                </span>

                <span className="text-white">
                  )
                </span>
              </div>

              <div className="mt-4">
                <span className="text-[#C4B5FD]">
                  print
                </span>

                <span className="text-white">
                  (
                </span>

                <span className="text-[#FFD38A]">
                  &quot;Destination:&quot;
                </span>

                <span className="text-white">
                  , destination)
                </span>
              </div>
            </div>
          </div>
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
            A variable gives information

            <span className="block text-[#168BE8]">
              a name so Python can remember it.
            </span>
          </h2>

          <div
            className="
              mx-auto
              mt-8
              grid
              max-w-2xl
              gap-3
              text-left
              sm:grid-cols-3
            "
          >
            {[
              ["String", '"School"'],
              ["Integer", "3"],
              ["Float", "2.5"],
            ].map(([type, example]) => (
              <div
                key={type}
                className="
                  rounded-[18px]
                  bg-[#F7FBFE]
                  p-4
                "
              >
                <p
                  className="
                    text-xs
                    font-bold
                    text-[#168BE8]
                  "
                >
                  {type}
                </p>

                <p
                  className="
                    mt-2
                    font-mono
                    font-bold
                  "
                >
                  {example}
                </p>
              </div>
            ))}
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
            sm:items-stretch
          "
        >
          {/* PREVIOUS */}

          <Link
            href="/learning/python/meet-mano-python"
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
                shrink-0
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
                  text-[#0B1F3A]
                "
              >
                Meet Mano & Python
              </p>
            </div>
          </Link>

          {/* NEXT */}

          <Link
            href="/learning/python/making-decisions"
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
                Module 03
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

            <span
              className="
                flex
                h-11
                w-11
                shrink-0
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
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

/* =========================================================
   INTERACTIVE STEPS
   ========================================================= */

const codeSteps = [
  {
    step: 1,
    label: "Python reads the instruction",
    code: 'print("Hello Mano!")',
    explanation:
      "Python reads the instruction from left to right. The word print tells Python that we want something to appear on the screen.",
    highlight: "print",
  },
  {
    step: 2,
    label: "Python finds the message",
    code: 'print("Hello Mano!")',
    explanation:
      'The text inside the quotation marks is the message we want Python to display: "Hello Mano!"',
    highlight: '"Hello Mano!"',
  },
  {
    step: 3,
    label: "Python runs the instruction",
    code: 'print("Hello Mano!")',
    explanation:
      "Python executes the instruction and sends the message to the output.",
    highlight: "run",
  },
  {
    step: 4,
    label: "Mano sees the result",
    code: 'print("Hello Mano!")',
    explanation:
      "The instruction has finished. Python displays the message exactly as we asked.",
    highlight: "output",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function MeetManoPythonPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  /* =====================================================
     RUN CODE
     ===================================================== */

  const runCode = () => {
    setRunning(true);
    setShowOutput(false);
    setCurrentStep(0);

    /*
     * Show the code-flow stages automatically.
     */

    setTimeout(() => {
      setCurrentStep(1);
    }, 650);

    setTimeout(() => {
      setCurrentStep(2);
    }, 1300);

    setTimeout(() => {
      setCurrentStep(3);
    }, 1950);

    setTimeout(() => {
      setShowOutput(true);
      setRunning(false);
    }, 2500);
  };

  /* =====================================================
     RESET
     ===================================================== */

  const resetActivity = () => {
    setCurrentStep(0);
    setRunning(false);
    setShowOutput(false);
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
          LESSON HERO
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
            top-[-10%]
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#168BE8]/10
            blur-[130px]
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
              Meet Mano & Python
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
            Module 01 • Start Here
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
            Meet Mano

            <span className="block text-[#168BE8]">
              & Python.
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
            Mano has a problem. She needs instructions
            to move through ManoCity. Python is the
            language we will use to give those
            instructions.
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
              "10 Minutes",
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

          {/* SECTION TITLE */}

          <div
            className="
              mb-8
              flex
              flex-col
              justify-between
              gap-4
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
                Mano needs your help.
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
              Watch the story first. Then use the
              interactive activity below to see how
              Python turns an instruction into an action.
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
              bg-[#07182A]
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
                src="/videos/python/module-01-meet-mano-python.mp4"
                type="video/mp4"
              />

              Your browser does not support video.
            </video>
          </motion.div>

          {/* VIDEO NOTE */}

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

            Watch the lesson, then continue to the
            interactive activity.
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE LEARNING
          ===================================================== */}

      <section
        className="
          bg-[#F7FBFE]
          px-6
          py-24
          md:px-12
          md:py-32
        "
      >
        <div className="mx-auto max-w-6xl">

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
              What happens when

              <span className="block text-[#168BE8]">
                Python runs your code?
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
              Press Run Code and follow the instruction
              from your program to the final output.
            </p>
          </motion.div>

          {/* =================================================
              INTERACTIVE WORKSPACE
              ================================================= */}

          <div
            className="
              mt-14
              grid
              gap-6
              lg:grid-cols-[1fr_0.9fr]
            "
          >
            {/* =================================================
                CODE SIDE
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
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
                  mano.py
                </span>
              </div>

              {/* CODE AREA */}

              <div
                className="
                  min-h-[270px]
                  p-7
                  font-mono
                "
              >
                <div
                  className="
                    flex
                    gap-5
                    text-lg
                    md:text-xl
                  "
                >
                  {/* LINE NUMBER */}

                  <span className="select-none text-white/25">
                    1
                  </span>

                  {/* CODE */}

                  <div>
                    <motion.span
                      animate={
                        currentStep === 0
                          ? {
                              backgroundColor:
                                "rgba(22,139,232,0.28)",
                            }
                          : {
                              backgroundColor:
                                "rgba(22,139,232,0)",
                            }
                      }
                      className="
                        rounded
                        px-1
                        text-[#7DD3FC]
                      "
                    >
                      print
                    </motion.span>

                    <span className="text-white">
                      (
                    </span>

                    <motion.span
                      animate={
                        currentStep === 1
                          ? {
                              backgroundColor:
                                "rgba(255,157,23,0.30)",
                            }
                          : {
                              backgroundColor:
                                "rgba(255,157,23,0)",
                            }
                      }
                      className="
                        rounded
                        px-1
                        text-[#FFD38A]
                      "
                    >
                      &quot;Hello Mano!&quot;
                    </motion.span>

                    <span className="text-white">
                      )
                    </span>
                  </div>
                </div>

                {/* EXECUTION INDICATOR */}

                <AnimatePresence>
                  {running && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className="
                        mt-10
                        flex
                        items-center
                        gap-3
                        text-sm
                        font-semibold
                        text-[#65CFFF]
                      "
                    >
                      <motion.span
                        animate={{
                          x: [0, 10, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.9,
                        }}
                      >
                        ▶
                      </motion.span>

                      Python is running your instruction...
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CONTROLS */}

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
                  whileHover={
                    running
                      ? {}
                      : {
                          y: -2,
                        }
                  }
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
                  Run Code

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
            </motion.div>

            {/* =================================================
                EXPLANATION SIDE
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex
                min-h-[450px]
                flex-col
                rounded-[32px]
                border
                border-[#168BE8]/10
                bg-white
                p-7
                shadow-[0_18px_50px_rgba(11,31,58,0.07)]
                md:p-8
              "
            >
              {/* STEP */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#168BE8]
                  "
                >
                  Follow the Code
                </span>

                <span
                  className="
                    rounded-full
                    bg-[#EAF7FF]
                    px-3
                    py-1.5
                    text-[10px]
                    font-extrabold
                    text-[#168BE8]
                  "
                >
                  Step {currentStep + 1} / 4
                </span>
              </div>

              {/* CURRENT EXPLANATION */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
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
                    y: -8,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="mt-8"
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#168BE8]
                      text-sm
                      font-extrabold
                      text-white
                    "
                  >
                    {currentStep + 1}
                  </div>

                  <h3
                    className="
                      mt-5
                      text-2xl
                      font-extrabold
                    "
                  >
                    {codeSteps[currentStep].label}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-base
                      leading-8
                      text-[#61788E]
                    "
                  >
                    {codeSteps[currentStep].explanation}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* OUTPUT */}

              <AnimatePresence>
                {showOutput && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 15,
                      scale: 0.96,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      mt-auto
                      rounded-[22px]
                      bg-[#F4FAFE]
                      p-5
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#8294A6]
                      "
                    >
                      Python Output
                    </p>

                    <p
                      className="
                        mt-3
                        font-mono
                        text-xl
                        font-bold
                        text-[#168BE8]
                      "
                    >
                      Hello Mano!
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KEY IDEA
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
            max-w-5xl
          "
        >
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
              rounded-[38px]
              border
              border-[#168BE8]/10
              bg-[#F8FCFF]
              px-8
              py-12
              text-center
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
              Code is a set of instructions

              <span className="block text-[#168BE8]">
                a computer can follow.
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
              Today Python displayed a message.
              Later the same idea will let you tell
              ManoBot to move, stop, turn and respond
              to ManoCity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          NEXT MODULE
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
            flex
            max-w-5xl
            flex-col
            items-center
            justify-between
            gap-8
            rounded-[36px]
            bg-[#0B1F3A]
            px-8
            py-12
            text-white
            md:flex-row
            md:px-12
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#65CFFF]
              "
            >
              Module 02
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-extrabold
              "
            >
              Variables & Data
            </h2>

            <p
              className="
                mt-3
                max-w-xl
                text-sm
                leading-7
                text-white/65
              "
            >
              Next, teach Python how to remember
              information Mano will need.
            </p>
          </div>

          <Link
            href="/learning/python/variables-data"
            className="
              shrink-0
              rounded-full
              bg-white
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#0B1F3A]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#65CFFF]
            "
          >
            Next Module →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
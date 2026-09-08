"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================================
   MODULE DATA
   ========================================================= */

const steps = [
  {
    line: 1,
    title: "Teach Mano a new skill",
    explanation:
      "The def keyword creates a function. We are teaching Mano a skill called move_forward.",
    activeCode: "def move_forward():",
  },
  {
    line: 2,
    title: "Store the instructions",
    explanation:
      "The indented code belongs to the function. These instructions are stored until the function is called.",
    activeCode: '    print("Moving forward")',
  },
  {
    line: 4,
    title: "Call the function",
    explanation:
      "Writing the function name followed by () tells Python to run the function.",
    activeCode: "move_forward()",
  },
  {
    line: 2,
    title: "Python enters the function",
    explanation:
      "Python jumps back to the function and executes the instructions inside it.",
    activeCode: '    print("Moving forward")',
  },
  {
    line: 4,
    title: "Return to the program",
    explanation:
      "When the function finishes, Python returns to the point where the function was called.",
    activeCode: "move_forward()",
  },
];

const codeLines = [
  "def move_forward():",
  '    print("Moving forward")',
  "",
  "move_forward()",
];

/* =========================================================
   PAGE
   ========================================================= */

export default function FunctionsPage() {
  const [step, setStep] = useState(0);
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState("");

  const currentStep = steps[step];

  /* =========================================================
     NEXT STEP
     ========================================================= */

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((previous) => previous + 1);
    } else {
      setStep(0);
      setOutput("");
    }
  };

  /* =========================================================
     RUN FUNCTION
     ========================================================= */

  const runFunction = () => {
    setRunning(true);
    setOutput("");

    setTimeout(() => {
      setOutput("Moving forward");
      setRunning(false);
    }, 700);
  };

  return (
    <main className="min-h-screen bg-white text-[#0B1F3A]">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-12 md:pb-28">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#EAF7FF] blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* BREADCRUMB */}

          <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#6B8195]">
            <Link
              href="/learning"
              className="transition hover:text-[#168BE8]"
            >
              Learning
            </Link>

            <span>›</span>

            <Link
              href="/learning/python"
              className="transition hover:text-[#168BE8]"
            >
              Python Essentials
            </Link>

            <span>›</span>

            <span className="text-[#168BE8]">
              Functions
            </span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT */}

            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-[#168BE8]">
                Module 05
              </p>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
                Teach Mano
                <span className="block text-[#168BE8]">
                  New Skills
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-[#49647E]">
                Functions let us give a group of instructions
                a name. Once Mano learns a skill, we can ask her
                to use it whenever we need it.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "def",
                  "Function Calls",
                  "Reusable Code",
                  "Parameters",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#F2F9FE] px-4 py-2 text-sm font-bold text-[#168BE8]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* MODULE NUMBER */}

            <div className="hidden justify-end lg:flex">
              <div className="flex h-56 w-56 items-center justify-center rounded-full bg-[#F5FBFF]">
                <div className="text-center">
                  <span className="block text-sm font-bold uppercase tracking-[0.25em] text-[#7C93A7]">
                    Python
                  </span>

                  <span className="mt-2 block text-8xl font-black text-[#168BE8]">
                    05
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO LESSON
          ===================================================== */}

      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#168BE8]">
              Watch
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">
              Meet Python Functions
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#60778C]">
              Watch the short lesson, then use the interactive
              activity below to follow Python as it calls a
              function.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-black shadow-[0_25px_70px_rgba(11,31,58,0.12)]">
            <video
              className="aspect-video w-full"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src="/videos/python/module-05-functions.mp4"
                type="video/mp4"
              />

              Your browser does not support video playback.
            </video>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONCEPT
          ===================================================== */}

      <section className="bg-[#F8FCFF] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#168BE8]">
              The Big Idea
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Write once.
              <span className="text-[#168BE8]">
                {" "}Use many times.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#60778C]">
              Imagine Mano needs to move forward many times.
              Instead of repeatedly writing the same instructions,
              we can package them into one function.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">

            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <div className="text-3xl">1</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Define
              </h3>

              <p className="mt-3 leading-7 text-[#60778C]">
                Use <strong>def</strong> to teach Python a new
                function.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <div className="text-3xl">2</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Name
              </h3>

              <p className="mt-3 leading-7 text-[#60778C]">
                Give the skill a meaningful name such as
                <strong> move_forward</strong>.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-sm">
              <div className="text-3xl">3</div>

              <h3 className="mt-5 text-xl font-extrabold">
                Call
              </h3>

              <p className="mt-3 leading-7 text-[#60778C]">
                Use <strong>move_forward()</strong> whenever Mano
                needs that skill.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE CODE EXPLORER
          ===================================================== */}

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#168BE8]">
              Interactive Learning
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Follow the function
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#60778C]">
              Step through the program and watch how Python moves
              from the main program into the function and then
              returns.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

            {/* =================================================
                CODE WINDOW
                ================================================= */}

            <div className="overflow-hidden rounded-[30px] bg-[#0B1F3A] shadow-[0_25px_60px_rgba(11,31,58,0.16)]">

              {/* WINDOW HEADER */}

              <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="h-3 w-3 rounded-full bg-white/30" />
                <span className="h-3 w-3 rounded-full bg-white/30" />

                <span className="ml-3 text-xs font-bold text-white/50">
                  mano_functions.py
                </span>
              </div>

              {/* CODE */}

              <div className="p-6 font-mono text-sm leading-9 md:p-8 md:text-base">
                {codeLines.map((line, index) => {
                  const lineNumber = index + 1;
                  const active =
                    currentStep.line === lineNumber;

                  return (
                    <motion.div
                      key={lineNumber}
                      animate={{
                        backgroundColor: active
                          ? "rgba(22,139,232,0.18)"
                          : "rgba(0,0,0,0)",
                      }}
                      className="flex rounded-lg px-3"
                    >
                      <span className="mr-6 w-5 select-none text-right text-white/25">
                        {lineNumber}
                      </span>

                      <span
                        className={
                          active
                            ? "font-bold text-[#75C9FF]"
                            : "text-white/80"
                        }
                      >
                        {line || " "}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* OUTPUT */}

              <div className="border-t border-white/10 px-8 py-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  Output
                </p>

                <div className="min-h-[28px] font-mono text-[#7EE2B8]">
                  {running
                    ? "Running function..."
                    : output || "Waiting for Mano..."}
                </div>
              </div>
            </div>

            {/* =================================================
                EXPLANATION
                ================================================= */}

            <div className="flex flex-col justify-center">

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
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
                    duration: 0.3,
                  }}
                >
                  <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#168BE8]">
                    Step {step + 1} of {steps.length}
                  </span>

                  <h3 className="mt-4 text-3xl font-extrabold">
                    {currentStep.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-[#60778C]">
                    {currentStep.explanation}
                  </p>

                  <div className="mt-6 rounded-2xl bg-[#F2F9FE] p-5 font-mono text-sm font-bold text-[#168BE8]">
                    {currentStep.activeCode}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-9 flex flex-wrap gap-3">
                <button
                  onClick={nextStep}
                  className="rounded-full bg-[#0B1F3A] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#168BE8]"
                >
                  {step === steps.length - 1
                    ? "Start Again ↻"
                    : "Next Step →"}
                </button>

                <button
                  onClick={runFunction}
                  disabled={running}
                  className="rounded-full border-2 border-[#168BE8]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#168BE8] transition hover:border-[#168BE8] disabled:opacity-50"
                >
                  ▶ Run Function
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PARAMETERS
          ===================================================== */}

      <section className="bg-[#F8FCFF] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#168BE8]">
                Give Functions Information
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Functions can use
                <span className="block text-[#168BE8]">
                  parameters.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#60778C]">
                Mano does not always need to move the same
                distance. A parameter lets us give the function
                information when we call it.
              </p>
            </div>

            <div className="rounded-[30px] bg-[#0B1F3A] p-8 font-mono text-sm leading-9 text-white shadow-xl md:text-base">
              <div>
                <span className="text-[#75C9FF]">
                  def
                </span>{" "}
                move_forward(distance):
              </div>

              <div className="pl-6">
                print(
                <span className="text-[#7EE2B8]">
                  "Moving"
                </span>
                , distance,
                <span className="text-[#7EE2B8]">
                  "cm"
                </span>
                )
              </div>

              <div className="mt-5">
                move_forward(
                <span className="text-[#FFBD66]">
                  20
                </span>
                )
              </div>

              <div>
                move_forward(
                <span className="text-[#FFBD66]">
                  50
                </span>
                )
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MINI CHALLENGE
          ===================================================== */}

      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-5xl rounded-[36px] bg-[#EAF7FF] p-8 md:p-14">

          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-[#168BE8]">
            Your Mission
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Teach Mano to turn left.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#526C83]">
            Create a function called{" "}
            <strong>turn_left()</strong> that prints
            <strong> "Turning left"</strong>. Then call the
            function twice.
          </p>

          <div className="mt-8 rounded-[24px] bg-white p-6 font-mono leading-8 text-[#0B1F3A]">
            <div>
              def __________________():
            </div>

            <div className="pl-6">
              print("__________________")
            </div>

            <br />

            <div>
              __________________()
            </div>

            <div>
              __________________()
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          NEXT MODULE
          ===================================================== */}

      <section className="border-t border-[#168BE8]/10 px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-bold text-[#7B91A4]">
              You&apos;ve completed Module 05
            </p>

            <h3 className="mt-2 text-2xl font-extrabold">
              Mano has learned how functions work.
            </h3>
          </div>

          <Link
            href="/learning/python"
            className="inline-flex items-center justify-center rounded-full bg-[#0B1F3A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#168BE8]"
          >
            Back to Python Essentials →
          </Link>

        </div>
      </section>

    </main>
  );
}
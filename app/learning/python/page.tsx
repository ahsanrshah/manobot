"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* =========================================================
   COURSE MODULES
   ========================================================= */

const modules = [
  {
    number: "01",
    title: "Meet Mano & Python",
    duration: "10 min",
    description:
      "Meet Mano, discover the problem she needs to solve and see how Python gives instructions to computers and ManoBot.",
    topics: [
      "What is programming?",
      "Python instructions",
      "print()",
    ],
    status: "Start Here",
    href: "/learning/python/meet-mano-python",
  },

  {
    number: "02",
    title: "Variables & Data",
    duration: "15 min",
    description:
      "Teach Python how to remember information such as names, distances, speeds and destinations.",
    topics: [
      "Variables",
      "Strings",
      "Integers & floats",
      "Input",
    ],
    status: "Foundation",
    href: "/learning/python/variables-data",
  },

  {
    number: "03",
    title: "Making Decisions",
    duration: "15 min",
    description:
      "Help Mano make choices at roads, junctions and traffic signals using Python conditions.",
    topics: [
      "if",
      "if / else",
      "elif",
      "Comparisons",
    ],
    status: "Decisions",
    href: "/learning/python/making-decisions",
  },

  {
    number: "04",
    title: "Repeating Actions",
    duration: "15 min",
    description:
      "Make programs repeat instructions efficiently instead of writing the same code again and again.",
    topics: [
      "for loops",
      "while loops",
      "Counters",
      "Repeated actions",
    ],
    status: "Loops",
    href: "/learning/python/repeating-actions",
  },

  {
    number: "05",
    title: "Functions",
    duration: "15 min",
    description:
      "Organise useful instructions into reusable actions that ManoBot can perform whenever needed.",
    topics: [
      "Functions",
      "Parameters",
      "Reusable code",
      "Robot actions",
    ],
    status: "Build Skills",
    href: "/learning/python/functions",
  },

  {
    number: "06",
    title: "Your First ManoCity Challenge",
    duration: "20 min",
    description:
      "Bring everything together by writing a Python program that solves a ManoCity problem.",
    topics: [
      "Variables",
      "Decisions",
      "Loops",
      "Functions",
    ],
    status: "Challenge",
    href: "/learning/python/manocity-challenge",
  },
];

/* =========================================================
   SKILLS
   ========================================================= */

const skills = [
  {
    title: "Write Python",
    text: "Create and run simple Python programs confidently.",
  },
  {
    title: "Use Data",
    text: "Store and work with numbers, text and user input.",
  },
  {
    title: "Make Decisions",
    text: "Use conditions to make programs respond intelligently.",
  },
  {
    title: "Repeat Actions",
    text: "Use loops to automate repeated instructions.",
  },
  {
    title: "Build Functions",
    text: "Turn groups of instructions into reusable actions.",
  },
  {
    title: "Prepare for Robotics",
    text: "Understand the programming concepts used later to control ManoBot.",
  },
];

/* =========================================================
   PAGE
   ========================================================= */

export default function PythonEssentialsPage() {
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
          py-20
          md:px-12
          md:py-28
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[5%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-[#168BE8]/10
            blur-[150px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* COPY */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div
              className="
                mb-8
                flex
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

              <span className="text-[#168BE8]">
                Python Essentials
              </span>
            </div>

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
              Course 01 • Start Here
            </p>

            <h1
              className="
                text-5xl
                font-extrabold
                leading-[1.02]
                tracking-tight
                md:text-7xl
              "
            >
              Python

              <span className="block text-[#168BE8]">
                Essentials
              </span>
            </h1>

            <p
              className="
                mt-4
                text-xl
                font-semibold
                text-[#49647E]
              "
            >
              Learn the code ManoBot needs.
            </p>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-[#5D748A]
              "
            >
              Learn Python through Mano&apos;s story.
              Start with simple instructions, teach programs
              to remember information and make decisions,
              then build the programming skills you will
              use to control ManoBot.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {[
                "Beginner",
                "≈ 90 Minutes",
                "6 Modules",
                "No Experience Needed",
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

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/learning/python/meet-mano-python"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#0B1F3A]
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_35px_rgba(11,31,58,0.22)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#168BE8]
                "
              >
                Start Course
                <span>→</span>
              </Link>

              <Link
                href="/learning"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#168BE8]/20
                  bg-white
                  px-8
                  py-4
                  text-sm
                  font-bold
                  text-[#168BE8]
                  transition
                  hover:border-[#168BE8]
                "
              >
                All Courses
              </Link>
            </div>
          </motion.div>

          {/* HERO IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
            }}
            className="
              relative
              flex
              items-center
              justify-center
            "
          >
            <Image
              src="/python essentials.png"
              alt="Python Essentials"
              width={1100}
              height={850}
              priority
              unoptimized
              className="
                w-full
                max-w-[680px]
                rounded-[36px]
                object-contain
                drop-shadow-[0_28px_55px_rgba(11,31,58,0.15)]
              "
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COURSE JOURNEY
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
            className="max-w-3xl"
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
              Course Journey
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
              Six short modules.

              <span className="block text-[#168BE8]">
                One connected story.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-[#5D748A]
              "
            >
              Each module contains a short video and
              an interactive activity that helps you
              understand how the code actually works.
            </p>
          </motion.div>

          {/* MODULES */}

          <div className="mt-14 space-y-5">
            {modules.map((module, index) => (
              <motion.div
                key={module.number}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="
                  group
                  grid
                  gap-6
                  rounded-[30px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  p-6
                  shadow-[0_14px_45px_rgba(11,31,58,0.05)]
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_55px_rgba(11,31,58,0.09)]
                  md:grid-cols-[90px_1fr_auto]
                  md:items-center
                  md:p-8
                "
              >
                {/* NUMBER */}

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-[20px]
                    bg-[#EAF7FF]
                    text-lg
                    font-black
                    text-[#168BE8]
                  "
                >
                  {module.number}
                </div>

                {/* CONTENT */}

                <div>
                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.17em]
                        text-[#168BE8]
                      "
                    >
                      {module.status}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#F4F7F9]
                        px-3
                        py-1
                        text-[10px]
                        font-bold
                        text-[#708496]
                      "
                    >
                      {module.duration}
                    </span>
                  </div>

                  {/* MODULE TITLE IS NOW A LINK */}

                  <Link href={module.href}>
                    <h3
                      className="
                        mt-3
                        text-2xl
                        font-extrabold
                        text-[#0B1F3A]
                        transition
                        hover:text-[#168BE8]
                      "
                    >
                      {module.title}
                    </h3>
                  </Link>

                  <p
                    className="
                      mt-2
                      max-w-2xl
                      text-sm
                      leading-7
                      text-[#647A8F]
                    "
                  >
                    {module.description}
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {module.topics.map((topic) => (
                      <span
                        key={topic}
                        className="
                          rounded-full
                          bg-[#F8FBFE]
                          px-3
                          py-1.5
                          text-[10px]
                          font-bold
                          text-[#526A80]
                        "
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* OPEN MODULE */}

                <Link
                  href={module.href}
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#0B1F3A]
                    px-6
                    py-3
                    text-xs
                    font-bold
                    text-white
                    transition
                    duration-300
                    group-hover:bg-[#168BE8]
                  "
                >
                  {index === 0
                    ? "Start Module"
                    : "Open Module"}

                  <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
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
              By the End
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
              You&apos;ll be ready

              <span className="block text-[#168BE8]">
                to program ManoBot.
              </span>
            </h2>
          </div>

          <div
            className="
              mt-14
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
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
                transition={{
                  delay: index * 0.07,
                }}
                className="
                  rounded-[26px]
                  border
                  border-[#168BE8]/10
                  bg-[#F9FCFE]
                  p-7
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#168BE8]
                    text-sm
                    font-extrabold
                    text-white
                  "
                >
                  ✓
                </div>

                <h3
                  className="
                    mt-5
                    text-xl
                    font-extrabold
                  "
                >
                  {skill.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-7
                    text-[#647A8F]
                  "
                >
                  {skill.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          NEXT COURSE
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
            gap-10
            overflow-hidden
            rounded-[40px]
            bg-[#0B1F3A]
            p-8
            text-white
            md:p-12
            lg:grid-cols-[1fr_0.75fr]
          "
        >
          <div>
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#65CFFF]
              "
            >
              After Python
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-extrabold
                md:text-5xl
              "
            >
              Take your code

              <span className="block text-[#65CFFF]">
                into the real world.
              </span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-base
                leading-7
                text-white/70
              "
            >
              Move into ManoBot Robotics and use the
              Python ideas you learned here to control
              motors, sensors and physical movement.
            </p>

            <Link
              href="/learning/robotics"
              className="
                mt-8
                inline-flex
                rounded-full
                bg-white
                px-7
                py-3.5
                text-sm
                font-bold
                text-[#0B1F3A]
                transition
                hover:-translate-y-1
                hover:bg-[#65CFFF]
              "
            >
              Explore ManoBot Robotics →
            </Link>
          </div>

          <div
            className="
              relative
              flex
              min-h-[300px]
              items-center
              justify-center
            "
          >
            <Image
              src="/manobot robotics.png"
              alt="ManoBot Robotics"
              width={600}
              height={450}
              unoptimized
              className="
                w-full
                max-w-[440px]
                rounded-[28px]
                object-contain
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
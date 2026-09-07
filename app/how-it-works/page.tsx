"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const systemFlow = [
  {
    step: "01",
    title: "Learn the idea",
    text: "Understand the coding concept in a short lesson.",
    accent: "Python",
  },
  {
    step: "02",
    title: "Send the instruction",
    text: "Your Python code is sent to ManoBot.",
    accent: "Code",
  },
  {
    step: "03",
    title: "Robot responds",
    text: "Motors and sensors turn code into physical behaviour.",
    accent: "Robot",
  },
  {
    step: "04",
    title: "Complete the mission",
    text: "ManoBot moves through ManoCity and solves the challenge.",
    accent: "Mission",
  },
];

const missions = [
  {
    label: "Mission 01",
    title: "Follow the Line",
    concept: "Movement + sensing",
  },
  {
    label: "Mission 02",
    title: "Stop at Red",
    concept: "Conditions",
  },
  {
    label: "Mission 03",
    title: "Reach School",
    concept: "Navigation",
  },
  {
    label: "Mission 04",
    title: "Handle a Junction",
    concept: "Decisions",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B1F3A]">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="absolute left-0 top-0 z-[100] flex w-full items-center justify-between px-8 py-6 md:px-12">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-white"
        >
          Mano
          <span className="text-[#65CFFF]">
            City
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
          <Link
            href="/story"
            className="transition duration-300 hover:text-[#65CFFF]"
          >
            Story
          </Link>

          <Link
            href="/how-it-works"
            className="text-[#65CFFF]"
          >
            How It Works
          </Link>

          <Link
            href="/#schools"
            className="transition duration-300 hover:text-[#65CFFF]"
          >
            For Schools
          </Link>

          <Link
            href="/#shop"
            className="transition duration-300 hover:text-[#FFB347]"
          >
            Shop
          </Link>
        </nav>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="relative min-h-[92vh] overflow-hidden bg-[#07182A] px-6 pt-28 text-white md:px-12">

        <div className="pointer-events-none absolute -right-20 top-10 h-[520px] w-[520px] rounded-full bg-[#168BE8]/20 blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[-150px] left-[20%] h-[400px] w-[400px] rounded-full bg-[#65CFFF]/10 blur-[110px]" />

        <div className="relative z-10 mx-auto grid min-h-[92vh] max-w-7xl items-center gap-14 py-20 lg:grid-cols-[0.85fr_1.15fr]">

          {/* LEFT */}

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
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#65CFFF]">
              How ManoCity Works
            </p>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
              One line of code.

              <span className="block text-[#65CFFF]">
                One real-world action.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
              ManoCity connects Python, electronics and physical missions
              into one learning loop: understand it, code it, watch it happen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Learn", "Code", "Move", "Solve"].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-white/80
                    backdrop-blur
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="relative"
          >
            <div
              className="
                rounded-[36px]
                border
                border-white/10
                bg-white/5
                p-6
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                backdrop-blur-xl
                md:p-8
              "
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {systemFlow.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.1,
                    }}
                    className="
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.06]
                      p-5
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#65CFFF]">
                        {item.step}
                      </span>

                      <span
                        className="
                          rounded-full
                          bg-[#168BE8]/20
                          px-3
                          py-1
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#65CFFF]
                        "
                      >
                        {item.accent}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-extrabold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          UNDER THE HOOD — ANIMATED SIGNAL FLOW
          ===================================================== */}

      <section className="relative bg-white px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT COPY */}

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
              transition={{
                duration: 0.7,
              }}
              className="lg:sticky lg:top-32"
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#168BE8]">
                Under the Hood
              </p>

              <h2 className="text-4xl font-extrabold leading-[1.07] tracking-tight md:text-6xl">
                Your code travels

                <span className="block text-[#168BE8]">
                  through the robot.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5D748A]">
                ManoCity is not a simulation. Follow one instruction as it
                travels from Python code through ManoBot&apos;s electronics
                and becomes physical movement.
              </p>

              <div className="mt-10 hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#168BE8] lg:flex">
                <span>Code</span>
                <span className="text-[#9CCBEF]">→</span>
                <span>Pico W</span>
                <span className="text-[#9CCBEF]">→</span>
                <span>Hardware</span>
                <span className="text-[#9CCBEF]">→</span>
                <span>Movement</span>
              </div>
            </motion.div>

            {/* RIGHT FLOW */}

            <div className="relative">

              {/* BACKGROUND TRACK */}

              <div
                className="
                  absolute
                  bottom-[80px]
                  left-[31px]
                  top-[80px]
                  w-[2px]
                  bg-[#DCECF8]
                  md:left-[39px]
                "
              />

              {/* =============================================
                  STEP 1
                  ============================================= */}

              <AnimatedFlowStep
                number="01"
                eyebrow="Step 1"
                title="Python Code"
                description="The learner writes an instruction."
                delay={0}
              >
                <div
                  className="
                    mt-6
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#168BE8]/10
                    bg-[#07182A]
                    p-5
                    font-mono
                    text-sm
                    shadow-[0_14px_35px_rgba(7,24,42,0.15)]
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
                      light
                    </span>{" "}
                    <span className="text-[#FFCF70]">
                      ==
                    </span>{" "}
                    <span className="text-[#8FE3B5]">
                      &quot;green&quot;
                    </span>
                    :
                  </p>

                  <p className="pl-6 text-white">
                    go_straight()
                  </p>
                </div>
              </AnimatedFlowStep>

              <AnimatedConnector delay={0.12} />

              {/* =============================================
                  STEP 2
                  ============================================= */}

              <AnimatedFlowStep
                number="02"
                eyebrow="Step 2"
                title="Raspberry Pi Pico W"
                description="The controller interprets the instruction and reads the robot's inputs."
                delay={0.1}
              >
                <div className="mt-6 flex items-center gap-4">

                  <motion.div
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.7,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EAF7FF]
                      text-2xl
                      shadow-inner
                    "
                  >
                    ⚡
                  </motion.div>

                  <div>
                    <p className="text-sm font-bold text-[#0B1F3A]">
                      Instruction received
                    </p>

                    <p className="mt-1 text-xs text-[#6A8195]">
                      Processing code + sensor data
                    </p>
                  </div>

                </div>
              </AnimatedFlowStep>

              <AnimatedConnector delay={0.22} />

              {/* =============================================
                  STEP 3
                  ============================================= */}

              <AnimatedFlowStep
                number="03"
                eyebrow="Step 3"
                title="Motors + Sensors"
                description="Electronic signals become motor movement while sensors keep checking the environment."
                delay={0.2}
              >
                <div className="mt-6 grid grid-cols-2 gap-3">

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-[#168BE8]/10
                      bg-[#F4FAFF]
                      p-4
                    "
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#168BE8]">
                      Sensors
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#0B1F3A]">
                      Read the road
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.8,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-[#168BE8]/10
                      bg-[#F4FAFF]
                      p-4
                    "
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#168BE8]">
                      Motors
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#0B1F3A]">
                      Turn the wheels
                    </p>
                  </motion.div>

                </div>
              </AnimatedFlowStep>

              <AnimatedConnector delay={0.32} />

              {/* =============================================
                  STEP 4
                  ============================================= */}

              <AnimatedFlowStep
                number="04"
                eyebrow="Step 4"
                title="ManoBot Moves"
                description="The instruction finally becomes a visible action in the physical ManoCity."
                delay={0.3}
              >
                <div
                  className="
                    relative
                    mt-6
                    h-[130px]
                    overflow-hidden
                    rounded-2xl
                    bg-[#EFF8FE]
                  "
                >
                  {/* ROAD */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-1/2
                      h-[44px]
                      -translate-y-1/2
                      bg-[#273849]
                    "
                  />

                  {/* ROAD LINE */}

                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-1/2
                      h-[2px]
                      -translate-y-1/2
                      border-t-2
                      border-dashed
                      border-white/70
                    "
                  />

                  {/* MANOBOT */}

                  <motion.div
                    initial={{
                      left: "-15%",
                      opacity: 0,
                    }}
                    whileInView={{
                      left: "72%",
                      opacity: 1,
                    }}
                    viewport={{
                      once: false,
                      amount: 0.7,
                    }}
                    transition={{
                      duration: 1.8,
                      delay: 0.35,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute
                      top-1/2
                      z-10
                      -translate-y-1/2
                    "
                  >
                    <Image
                      src="/manobot-route.png"
                      alt="ManoBot moving"
                      width={130}
                      height={100}
                      unoptimized
                      className="
                        w-[90px]
                        object-contain
                        drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]
                      "
                    />
                  </motion.div>

                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.8,
                  }}
                  transition={{
                    delay: 0.85,
                    duration: 0.45,
                  }}
                  className="
                    mt-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#E9FBF3]
                    px-4
                    py-2
                    text-xs
                    font-bold
                    text-[#168B63]
                  "
                >
                  <span>✓</span>

                  Instruction completed
                </motion.div>

              </AnimatedFlowStep>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION ANATOMY
          ===================================================== */}

      <section className="bg-[#F6FAFD] px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">

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
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#168BE8]">
              Anatomy of a Mission
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Every challenge teaches

              <span className="block text-[#168BE8]">
                something new.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5D748A]">
              Missions are not random tasks. Each one introduces a coding or
              robotics idea and then asks the learner to apply it physically.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  p-6
                  shadow-[0_18px_50px_rgba(11,31,58,0.06)]
                "
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#168BE8]">
                  {mission.label}
                </p>

                <h3 className="mt-4 text-2xl font-extrabold text-[#0B1F3A]">
                  {mission.title}
                </h3>

                <div
                  className="
                    mt-5
                    inline-flex
                    rounded-full
                    bg-[#EAF7FF]
                    px-3
                    py-1.5
                    text-xs
                    font-bold
                    text-[#168BE8]
                  "
                >
                  {mission.concept}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PHYSICAL KIT ROLE
          ===================================================== */}

      <section className="bg-white px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

            {/* IMAGE */}

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
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >
              <div
                className="
                  relative
                  aspect-[4/3]
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-[#168BE8]/10
                  bg-[#F8FCFF]
                  shadow-[0_25px_70px_rgba(11,31,58,0.10)]
                "
              >
                <Image
                  src="/manocity kit image.png"
                  alt="ManoCity physical learning kit"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* COPY */}

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
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#168BE8]">
                Why the Physical Kit Matters
              </p>

              <h2 className="text-4xl font-extrabold leading-[1.07] tracking-tight md:text-6xl">
                The city gives code

                <span className="block text-[#168BE8]">
                  a place to act.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#5D748A]">
                Roads, buildings and traffic signals are not decoration.
                They create real constraints that make programming
                decisions meaningful.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Roads create navigation problems.",
                  "Traffic lights create conditional logic.",
                  "Junctions create decisions.",
                  "Destinations create missions.",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-[#168BE8]/10
                      bg-[#F8FBFE]
                      px-4
                      py-3
                    "
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#168BE8]" />

                    <span className="text-sm font-semibold text-[#405A72]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING PROGRESSION
          ===================================================== */}

      <section className="bg-[#0B1F3A] px-6 py-28 text-white md:px-12 md:py-36">
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
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#65CFFF]">
              Progression
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
              Start simple.

              <span className="block text-[#65CFFF]">
                Build toward autonomy.
              </span>
            </h2>
          </motion.div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">

            {[
              "Movement",
              "Line Sensing",
              "Decisions",
              "Loops",
              "Junctions",
              "Traffic Logic",
              "Navigation",
              "Autonomous Missions",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-white/80
                "
              >
                {item}
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="bg-white px-6 py-28 md:px-12 md:py-36">

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
            mx-auto
            max-w-6xl
            rounded-[40px]
            bg-gradient-to-br
            from-[#EAF7FF]
            via-white
            to-[#F8FCFF]
            px-8
            py-16
            text-center
            shadow-[0_24px_70px_rgba(11,31,58,0.08)]
            md:px-14
          "
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#168BE8]">
            Ready to Try It?
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Make your first

            <span className="block text-[#168BE8]">
              line of code move.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5D748A]">
            Start with Python Essentials or explore the physical ManoCity kit.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/#learning"
              className="
                rounded-full
                bg-[#0B1F3A]
                px-8
                py-4
                text-sm
                font-bold
                text-white
                shadow-lg
                transition
                hover:bg-[#168BE8]
              "
            >
              Start Learning →
            </Link>

            <Link
              href="/#manocity-kit"
              className="
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
              Explore the Kit
            </Link>

          </div>
        </motion.div>
      </section>

    </main>
  );
}

/* =========================================================
   ANIMATED FLOW STEP
   ========================================================= */

function AnimatedFlowStep({
  number,
  eyebrow,
  title,
  description,
  delay = 0,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  delay?: number;
  children?: ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 35,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.55,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        z-10
        flex
        gap-5
        md:gap-7
      "
    >
      {/* NUMBER */}

      <motion.div
        initial={{
          scale: 0.7,
          backgroundColor: "#EAF7FF",
          color: "#168BE8",
        }}
        whileInView={{
          scale: 1,
          backgroundColor: "#168BE8",
          color: "#ffffff",
        }}
        viewport={{
          once: false,
          amount: 0.65,
        }}
        transition={{
          duration: 0.45,
          delay,
        }}
        className="
          relative
          z-20
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-full
          border-[5px]
          border-white
          text-sm
          font-extrabold
          shadow-[0_8px_24px_rgba(22,139,232,0.28)]
          md:h-20
          md:w-20
        "
      >
        {number}
      </motion.div>

      {/* CARD */}

      <motion.div
        whileInView={{
          boxShadow:
            "0 20px 55px rgba(22,139,232,0.10)",
        }}
        viewport={{
          once: false,
          amount: 0.55,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          mb-2
          flex-1
          rounded-[28px]
          border
          border-[#168BE8]/10
          bg-white
          p-6
          md:p-7
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
          {eyebrow}
        </p>

        <h3
          className="
            mt-2
            text-2xl
            font-extrabold
            text-[#0B1F3A]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            max-w-lg
            text-sm
            leading-6
            text-[#60768A]
          "
        >
          {description}
        </p>

        {children}
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   ANIMATED CONNECTOR
   ========================================================= */

function AnimatedConnector({
  delay = 0,
}: {
  delay?: number;
}) {
  return (
    <div
      className="
        relative
        ml-[31px]
        h-16
        w-[2px]
        overflow-visible
        bg-[#DCECF8]
        md:ml-[39px]
      "
    >
      {/* BLUE FILL */}

      <motion.div
        initial={{
          scaleY: 0,
        }}
        whileInView={{
          scaleY: 1,
        }}
        viewport={{
          once: false,
          amount: 0.8,
        }}
        transition={{
          duration: 0.55,
          delay,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          origin-top
          bg-[#168BE8]
        "
      />

      {/* MOVING SIGNAL */}

      <motion.div
        initial={{
          top: "-5px",
          opacity: 0,
        }}
        whileInView={{
          top: "calc(100% - 5px)",
          opacity: [0, 1, 1, 0],
        }}
        viewport={{
          once: false,
          amount: 0.8,
        }}
        transition={{
          duration: 0.8,
          delay: delay + 0.15,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          h-3
          w-3
          -translate-x-1/2
          rounded-full
          bg-[#65CFFF]
          shadow-[0_0_16px_rgba(101,207,255,1)]
        "
      />
    </div>
  );
}
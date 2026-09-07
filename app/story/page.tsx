"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Learn",
    text: "Start with simple programming ideas and understand what each line of code actually means.",
  },
  {
    number: "02",
    title: "Build",
    text: "Assemble ManoBot and discover how motors, sensors and electronics work together.",
  },
  {
    number: "03",
    title: "Code",
    text: "Write Python instructions that control ManoBot's movement and decisions.",
  },
  {
    number: "04",
    title: "Explore",
    text: "Place ManoBot in ManoCity and solve real missions across roads, junctions and traffic systems.",
  },
];

const places = [
  "Mano's Home",
  "School",
  "Hospital",
  "Shop",
  "Park",
  "Traffic Junctions",
];

export default function StoryPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B1F3A]">

      {/* =====================================================
          HEADER / NAVIGATION
          ===================================================== */}

      <header
        className="
          absolute
          left-0
          top-0
          z-[100]
          flex
          w-full
          items-center
          justify-between
          px-8
          py-6
          md:px-12
        "
      >
        {/* LOGO */}

        <Link
          href="/"
          className="
            text-2xl
            font-extrabold
            tracking-tight
            text-[#0B1F3A]
          "
        >
          Mano
          <span className="text-[#168BE8]">
            City
          </span>
        </Link>

        {/* NAVIGATION */}

        <nav
          className="
            hidden
            items-center
            gap-8
            text-sm
            font-semibold
            text-[#16304F]
            md:flex
          "
        >
          <Link
            href="/story"
            className="
              text-[#168BE8]
              transition
              duration-300
            "
          >
            Story
          </Link>

          <Link
            href="/#how"
            className="
              transition
              duration-300
              hover:text-[#168BE8]
            "
          >
            How It Works
          </Link>

          <Link
            href="/#schools"
            className="
              transition
              duration-300
              hover:text-[#168BE8]
            "
          >
            For Schools
          </Link>

          <Link
            href="/#shop"
            className="
              transition
              duration-300
              hover:text-[#FF9D17]
            "
          >
            Shop
          </Link>
        </nav>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-gradient-to-br
          from-white
          via-[#F6FBFF]
          to-[#EAF7FF]
          px-6
          md:px-12
        "
      >
        {/* BLUE GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[10%]
            h-[700px]
            w-[700px]
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
            grid
            min-h-screen
            max-w-7xl
            items-center
            gap-12
            py-24
            pt-32
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT COPY */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
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
              The ManoCity Story
            </p>

            <h1
              className="
                max-w-3xl
                text-5xl
                font-extrabold
                leading-[1.02]
                tracking-tight
                text-[#0B1F3A]
                md:text-7xl
              "
            >
              Welcome to a city where

              <span className="block text-[#168BE8]">
                code comes to life.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-[#526A80]
                md:text-xl
              "
            >
              ManoCity was created to make programming physical,
              visual and meaningful — so learners do not just write
              code, they see what their code actually does.
            </p>

            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/#learning"
                className="
                  rounded-full
                  bg-[#0B1F3A]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition
                  duration-300
                  hover:-translate-y-1
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
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-[#168BE8]
                  shadow-sm
                  transition
                  duration-300
                  hover:border-[#168BE8]
                "
              >
                Explore the Kit
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* GLOW */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[520px]
                w-[520px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#74D7FF]/15
                blur-[90px]
              "
            />

            {/* HERO IMAGE */}

            <div
              className="
                relative
                mx-auto
                aspect-[16/10]
                w-full
                max-w-[760px]
                overflow-hidden
                rounded-[40px]
                border
                border-[#168BE8]/10
                bg-white
                shadow-[0_30px_90px_rgba(11,31,58,0.12)]
              "
            >
              <Image
                src="/mano-city-hero.png"
                alt="Mano exploring ManoCity"
                fill
                priority
                unoptimized
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          THE PROBLEM
          ===================================================== */}

      <section className="bg-white px-6 py-28 md:px-12 md:py-36">
        <div className="mx-auto max-w-6xl">

          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-3xl text-center"
          >
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
              Why ManoCity?
            </p>

            <h2
              className="
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-[#0B1F3A]
                md:text-6xl
              "
            >
              Coding can feel

              <span className="block text-[#168BE8]">
                too abstract.
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
              A learner can type instructions onto a screen without
              ever understanding how those instructions affect the
              physical world. ManoCity changes that relationship.
            </p>
          </motion.div>

          {/* COMPARISON CARDS */}

          <div className="mt-16 grid gap-6 md:grid-cols-2">

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
                duration: 0.65,
              }}
              className="
                rounded-[32px]
                border
                border-[#DCE7F0]
                bg-[#F8FAFC]
                p-8
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#8999A9]
                "
              >
                Traditional Experience
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-extrabold
                  text-[#0B1F3A]
                "
              >
                Type code.
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-[#667A8D]
                "
              >
                See output on a screen and move on to the next exercise.
              </p>
            </motion.div>

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
              transition={{
                duration: 0.65,
              }}
              className="
                rounded-[32px]
                border
                border-[#168BE8]/15
                bg-[#F4FAFF]
                p-8
                shadow-[0_18px_55px_rgba(22,139,232,0.08)]
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
                ManoCity Experience
              </p>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-extrabold
                  text-[#0B1F3A]
                "
              >
                Type code. Watch the world respond.
              </h3>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-[#5D748A]
                "
              >
                ManoBot moves, senses, stops, turns and completes
                missions because of the learner&apos;s instructions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          MEET MANO
          ===================================================== */}

      <section
        className="
          bg-[#F7FBFF]
          px-6
          py-28
          md:px-12
          md:py-36
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-2
          "
        >
          {/* CHARACTER */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
            }}
            className="relative"
          >
            <div
              className="
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#168BE8]/8
                blur-[100px]
              "
            />

            <Image
              src="/Manobot Hero section.png"
              alt="Mano, the ManoCity guide"
              width={900}
              height={1000}
              unoptimized
              className="
                mx-auto
                max-h-[620px]
                w-auto
                object-contain
                drop-shadow-[0_30px_45px_rgba(11,31,58,0.15)]
              "
            />
          </motion.div>

          {/* COPY */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
            }}
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
              Meet Mano
            </p>

            <h2
              className="
                text-4xl
                font-extrabold
                leading-[1.08]
                tracking-tight
                text-[#0B1F3A]
                md:text-6xl
              "
            >
              Curious. Adventurous.

              <span className="block text-[#168BE8]">
                Always ready to learn.
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
              Mano guides learners through the city, turning each lesson
              into a problem worth solving. She does not simply explain
              programming concepts — she gives learners a reason to use them.
            </p>

            <p
              className="
                mt-5
                text-lg
                leading-8
                text-[#5D748A]
              "
            >
              A junction becomes a decision. A traffic light becomes a
              condition. A repeated road becomes a loop. A destination
              becomes a function.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
          ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-28
          md:px-12
          md:py-36
        "
      >
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
              The Journey
            </p>

            <h2
              className="
                text-4xl
                font-extrabold
                tracking-tight
                text-[#0B1F3A]
                md:text-6xl
              "
            >
              Learn it.

              <span className="block text-[#168BE8]">
                Then make it real.
              </span>
            </h2>
          </motion.div>

          {/* STEP CARDS */}

          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[28px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  p-7
                  shadow-[0_18px_55px_rgba(11,31,58,0.06)]
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#EAF7FF]
                    text-sm
                    font-extrabold
                    text-[#168BE8]
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-extrabold
                    text-[#0B1F3A]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-[#63798D]
                  "
                >
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WORLD OF MANOCITY
          ===================================================== */}

      <section
        className="
          bg-[#F6FBFF]
          px-6
          py-28
          md:px-12
          md:py-36
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* COPY */}

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
                The World of ManoCity
              </p>

              <h2
                className="
                  text-4xl
                  font-extrabold
                  leading-[1.08]
                  tracking-tight
                  text-[#0B1F3A]
                  md:text-6xl
                "
              >
                Every place creates

                <span className="block text-[#168BE8]">
                  a new coding problem.
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
                ManoCity is deliberately simple: a physical city with
                roads, junctions, buildings and programmable elements
                that give learners a growing set of real-world missions.
              </p>

              {/* PLACES */}

              <div className="mt-8 flex flex-wrap gap-3">
                {places.map((place) => (
                  <span
                    key={place}
                    className="
                      rounded-full
                      border
                      border-[#168BE8]/15
                      bg-white
                      px-4
                      py-2
                      text-sm
                      font-semibold
                      text-[#37566E]
                      shadow-sm
                    "
                  >
                    {place}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* MAP IMAGE */}

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
              transition={{
                duration: 0.7,
              }}
              className="
                relative
                aspect-[16/10]
                overflow-hidden
                rounded-[36px]
                border
                border-[#168BE8]/10
                bg-white
                shadow-[0_25px_70px_rgba(11,31,58,0.10)]
              "
            >
              <Image
                src="/manocity kit image.png"
                alt="ManoCity physical city map"
                fill
                unoptimized
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BIG IDEA
          ===================================================== */}

      <section
        className="
          bg-[#0B1F3A]
          px-6
          py-28
          text-white
          md:px-12
          md:py-36
        "
      >
        <div className="mx-auto max-w-5xl text-center">

          <motion.p
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
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#65CFFF]
            "
          >
            The Bigger Idea
          </motion.p>

          <motion.h2
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
              delay: 0.08,
            }}
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-tight
              md:text-6xl
            "
          >
            Code should not stay

            <span className="block text-[#65CFFF]">
              trapped inside a screen.
            </span>
          </motion.h2>

          <motion.p
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
              delay: 0.15,
            }}
            className="
              mx-auto
              mt-7
              max-w-3xl
              text-lg
              leading-8
              text-white/70
            "
          >
            ManoCity connects software with movement, sensors, decisions
            and places. The aim is simple: help learners understand that
            programming is a tool for changing the world around them.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section
        className="
          bg-white
          px-6
          py-28
          md:px-12
          md:py-36
        "
      >
        <motion.div
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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[40px]
            bg-gradient-to-br
            from-[#EAF7FF]
            via-[#F8FCFF]
            to-white
            px-8
            py-14
            text-center
            shadow-[0_25px_80px_rgba(11,31,58,0.08)]
            md:px-14
            md:py-20
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
            Your Adventure Starts Here
          </p>

          <h2
            className="
              mx-auto
              mt-4
              max-w-4xl
              text-4xl
              font-extrabold
              tracking-tight
              text-[#0B1F3A]
              md:text-6xl
            "
          >
            Build ManoBot.

            <span className="block text-[#168BE8]">
              Write the code. Explore the city.
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
            Start with Python fundamentals and work toward real
            autonomous ManoCity missions.
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
                duration-300
                hover:-translate-y-1
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
                duration-300
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
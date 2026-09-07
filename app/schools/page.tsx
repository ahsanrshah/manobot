"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ============================================================
   WHAT SCHOOLS GET
   ============================================================ */

const schoolOffer = [
  {
    title: "ManoBot Kits",
    text: "Hands-on robotics kits that students assemble, program and use across ManoCity missions.",
    image: "/manocity kit school page.png",
  },
  {
    title: "ManoCity Maps",
    text: "Physical city maps with roads, junctions, destinations and spaces for programmable challenges.",
    image: "/manocity kit image school.png",
  },
  {
    title: "Structured Learning",
    text: "A guided pathway from Python fundamentals to robotics, sensors and autonomous missions.",
    image: "/guide for schools.png",
  },
];

/* ============================================================
   DELIVERY MODELS
   ============================================================ */

const deliveryModels = [
  {
    number: "01",
    title: "Classroom Module",
    text: "Use ManoCity as a structured computing, coding or robotics module within the school timetable.",
    tag: "Curriculum",
  },
  {
    number: "02",
    title: "STEM & Robotics Club",
    text: "Run ManoCity as an after-school club, enrichment activity or school robotics programme.",
    tag: "Enrichment",
  },
  {
    number: "03",
    title: "School Challenge",
    text: "Turn missions into a school-level engineering challenge or competition between student teams.",
    tag: "Competition",
  },
];

/* ============================================================
   LEARNING OUTCOMES
   ============================================================ */

const outcomes = [
  "Python programming",
  "Computational thinking",
  "Sensors and actuators",
  "Robotics systems",
  "Problem solving",
  "Logical decision-making",
  "Physical computing",
  "Engineering design",
];

/* ============================================================
   IMPLEMENTATION
   ============================================================ */

const implementationSteps = [
  {
    number: "01",
    title: "Choose your setup",
    text: "Select the number of learners, teams and kits that fit your classroom or programme.",
  },
  {
    number: "02",
    title: "Prepare teachers",
    text: "Use the teaching guidance and structured learning pathway to plan delivery.",
  },
  {
    number: "03",
    title: "Learn + build",
    text: "Students learn Python concepts while assembling and understanding ManoBot.",
  },
  {
    number: "04",
    title: "Run missions",
    text: "Students move from basic control to sensors, junctions and physical ManoCity challenges.",
  },
  {
    number: "05",
    title: "Extend the programme",
    text: "Progress into school challenges, team projects and more advanced autonomous missions.",
  },
];

const schoolLeaderPoints = [
  "A repeatable STEM programme rather than a one-off activity.",
  "Visible student outcomes through physical robot behaviour.",
  "Suitable for curriculum support, enrichment and competitions.",
  "Combines coding, electronics, robotics and problem solving.",
];

/* ============================================================
   PAGE
   ============================================================ */

export default function SchoolsPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B1F3A]">

      {/* ======================================================
          HEADER
          ====================================================== */}

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
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-[#0B1F3A]"
        >
          Mano
          <span className="text-[#168BE8]">City</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#16304F] md:flex">
          <Link
            href="/story"
            className="transition duration-300 hover:text-[#168BE8]"
          >
            Story
          </Link>

          <Link
            href="/how-it-works"
            className="transition duration-300 hover:text-[#168BE8]"
          >
            How It Works
          </Link>

          <Link
            href="/schools"
            className="text-[#168BE8]"
          >
            For Schools
          </Link>

          <Link
            href="/#shop"
            className="transition duration-300 hover:text-[#FF9D17]"
          >
            Shop
          </Link>
        </nav>
      </header>

      {/* ======================================================
          HERO
          ====================================================== */}

      <section
        className="
          relative
          min-h-screen
          overflow-hidden
          bg-gradient-to-br
          from-[#F8FCFF]
          via-white
          to-[#EAF7FF]
          px-6
          pt-28
          md:px-12
        "
      >
        {/* BACKGROUND GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[10%]
            h-[650px]
            w-[650px]
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
            min-h-[92vh]
            max-w-7xl
            items-center
            gap-14
            py-16
            lg:grid-cols-[0.9fr_1.1fr]
          "
        >
          {/* LEFT COPY */}

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
              ManoCity for Schools
            </p>

            <h1
              className="
                max-w-3xl
                text-5xl
                font-extrabold
                leading-[1.03]
                tracking-tight
                text-[#0B1F3A]
                md:text-7xl
              "
            >
              Bring coding

              <span className="block text-[#168BE8]">
                into the physical classroom.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-xl
                text-lg
                leading-8
                text-[#526A80]
                md:text-xl
              "
            >
              ManoCity gives schools a practical way to teach Python,
              robotics and physical computing through structured lessons
              and real-world missions.
            </p>

            {/* BUTTONS */}

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#school-packages"
                className="
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
                Explore School Packages →
              </Link>

              <Link
                href="#contact-schools"
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
                  shadow-sm
                  transition
                  duration-300
                  hover:border-[#168BE8]
                "
              >
                Request Information
              </Link>
            </div>

            {/* TAGS */}

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Classroom",
                "STEM Club",
                "Robotics Lab",
                "Competition",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-[#168BE8]/10
                    bg-white/85
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#4B687F]
                    shadow-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HERO IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="relative"
          >
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
                bg-[#65CFFF]/15
                blur-[100px]
              "
            />

            <div
              className="
                relative
                mx-auto
                aspect-[16/10]
                w-full
                max-w-[760px]
                overflow-hidden
                rounded-[38px]
                border
                border-[#168BE8]/10
                bg-white
                p-2
                shadow-[0_30px_90px_rgba(11,31,58,0.12)]
              "
            >
              <div
                className="
                  relative
                  h-full
                  w-full
                  overflow-hidden
                  rounded-[30px]
                "
              >
                <Image
                  src="/classroom-hero.png"
                  alt="Students learning robotics with ManoCity"
                  fill
                  priority
                  unoptimized
                  className="rounded-[30px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          WHAT SCHOOLS GET
          ====================================================== */}

      <section
        id="school-packages"
        className="
          bg-white
          px-6
          py-28
          md:px-12
          md:py-36
        "
      >
        <div className="mx-auto max-w-7xl">

          {/* INTRO */}

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
              What Schools Get
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
              More than a robot kit.

              <span className="block text-[#168BE8]">
                A complete learning system.
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
              Hardware, city environments and learning materials work
              together so schools can deliver a connected STEM experience.
            </p>
          </motion.div>

          {/* ==================================================
              PRODUCT CARDS
              ================================================== */}

          <div
            className="
              mx-auto
              mt-16
              grid
              max-w-6xl
              gap-7
              md:grid-cols-3
            "
          >
            {schoolOffer.map((item, index) => (
              <motion.div
                key={item.title}
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
                  y: -7,
                }}
                className="
                  group
                  rounded-[32px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  p-3
                  shadow-[0_18px_55px_rgba(11,31,58,0.07)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_25px_65px_rgba(11,31,58,0.11)]
                "
              >
                {/* IMAGE */}

                <div className="px-1 pt-1">
                  <div
                    className="
                      relative
                      h-[265px]
                      w-full
                      overflow-hidden
                      rounded-[24px]
                      bg-white
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="
                        rounded-[24px]
                        object-cover
                        object-center
                        transition
                        duration-500
                        group-hover:scale-[1.03]
                      "
                    />
                  </div>
                </div>

                {/* CARD TEXT */}

                <div className="px-4 pb-5 pt-6">
                  <h3
                    className="
                      text-xl
                      font-extrabold
                      text-[#0B1F3A]
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          FLEXIBLE DELIVERY
          ====================================================== */}

      <section
        className="
          bg-[#F7FBFE]
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
              items-start
              gap-14
              lg:grid-cols-[0.8fr_1.2fr]
            "
          >
            {/* LEFT */}

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
                Flexible Delivery
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
                One platform.

                <span className="block text-[#168BE8]">
                  Different school models.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-[#5D748A]
                "
              >
                Schools can adopt ManoCity in the way that best fits
                their timetable, resources and STEM priorities.
              </p>
            </motion.div>

            {/* DELIVERY CARDS */}

            <div className="space-y-5">
              {deliveryModels.map((model, index) => (
                <motion.div
                  key={model.title}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    gap-5
                    rounded-[28px]
                    border
                    border-[#168BE8]/10
                    bg-white
                    p-6
                    shadow-[0_16px_45px_rgba(11,31,58,0.05)]
                    md:p-7
                  "
                >
                  {/* NUMBER */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EAF7FF]
                      text-sm
                      font-extrabold
                      text-[#168BE8]
                    "
                  >
                    {model.number}
                  </div>

                  {/* CONTENT */}

                  <div className="flex-1">
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-3
                      "
                    >
                      <h3
                        className="
                          text-2xl
                          font-extrabold
                          text-[#0B1F3A]
                        "
                      >
                        {model.title}
                      </h3>

                      <span
                        className="
                          rounded-full
                          bg-[#F1F8FD]
                          px-3
                          py-1.5
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#168BE8]
                        "
                      >
                        {model.tag}
                      </span>
                    </div>

                    <p
                      className="
                        mt-3
                        text-sm
                        leading-7
                        text-[#63798D]
                      "
                    >
                      {model.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          LEARNING OUTCOMES
          ====================================================== */}

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
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              items-center
              gap-14
              lg:grid-cols-[0.9fr_1.1fr]
            "
          >
            {/* LEFT */}

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
                  text-[#65CFFF]
                "
              >
                Learning Outcomes
              </p>

              <h2
                className="
                  text-4xl
                  font-extrabold
                  leading-[1.08]
                  tracking-tight
                  md:text-6xl
                "
              >
                Skills students can

                <span className="block text-[#65CFFF]">
                  see themselves using.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-white/70
                "
              >
                ManoCity combines coding and engineering concepts in a
                physical setting where student decisions produce visible
                outcomes.
              </p>
            </motion.div>

            {/* OUTCOME GRID */}

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/5
                    px-5
                    py-4
                  "
                >
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#168BE8]/20
                      text-sm
                      font-bold
                      text-[#65CFFF]
                    "
                  >
                    ✓
                  </span>

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-white/85
                    "
                  >
                    {outcome}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          IMPLEMENTATION
          ====================================================== */}

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

          {/* INTRO */}

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
              Implementation
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
              From delivery

              <span className="block text-[#168BE8]">
                to first mission.
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
              Schools can move from setup to structured student activity
              through a clear implementation pathway.
            </p>
          </motion.div>

          {/* STEPS */}

          <div
            className="
              relative
              mx-auto
              mt-16
              max-w-5xl
            "
          >
            <div
              className="
                absolute
                bottom-12
                left-[25px]
                top-12
                hidden
                w-[2px]
                bg-[#E2EDF6]
                md:block
              "
            />

            <div className="space-y-6">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={step.title}
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
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="
                    relative
                    flex
                    gap-6
                    rounded-[28px]
                    border
                    border-[#168BE8]/10
                    bg-white
                    p-6
                    shadow-[0_16px_45px_rgba(11,31,58,0.05)]
                    md:p-7
                  "
                >
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#168BE8]
                      text-xs
                      font-extrabold
                      text-white
                      shadow-[0_8px_20px_rgba(22,139,232,0.25)]
                    "
                  >
                    {step.number}
                  </div>

                  <div>
                    <h3
                      className="
                        text-xl
                        font-extrabold
                        text-[#0B1F3A]
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        leading-7
                        text-[#63798D]
                      "
                    >
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          TEACHERS + SCHOOL LEADERS
          ====================================================== */}

      <section
        className="
          bg-[#F7FBFE]
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
            gap-7
            lg:grid-cols-2
          "
        >
          {/* FOR TEACHERS */}

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
            transition={{
              duration: 0.65,
            }}
            className="
              rounded-[34px]
              border
              border-[#168BE8]/10
              bg-white
              p-8
              shadow-[0_18px_55px_rgba(11,31,58,0.06)]
              md:p-10
            "
          >
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#168BE8]
              "
            >
              For Teachers
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-extrabold
                tracking-tight
                text-[#0B1F3A]
              "
            >
              You do not need to design the programme from scratch.
            </h2>

            <p
              className="
                mt-5
                text-base
                leading-8
                text-[#5D748A]
              "
            >
              ManoCity provides a structured learning sequence, mission
              progression and implementation guidance so teachers can
              focus on supporting learners rather than building a complete
              robotics curriculum themselves.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Structured lesson pathway",
                "Build guidance",
                "Mission activities",
                "Progressive challenge design",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    text-sm
                    font-semibold
                    text-[#405A72]
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF7FF]
                      text-xs
                      text-[#168BE8]
                    "
                  >
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* SCHOOL LEADERS */}

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
            transition={{
              duration: 0.65,
            }}
            className="
              rounded-[34px]
              bg-[#0B1F3A]
              p-8
              text-white
              shadow-[0_22px_65px_rgba(11,31,58,0.16)]
              md:p-10
            "
          >
            <p
              className="
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#65CFFF]
              "
            >
              For School Leaders
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-extrabold
                tracking-tight
              "
            >
              Build a visible, repeatable STEM experience.
            </h2>

            <div className="mt-7 space-y-4">
              {schoolLeaderPoints.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                  "
                >
                  <span
                    className="
                      mt-1
                      h-2.5
                      w-2.5
                      shrink-0
                      rounded-full
                      bg-[#65CFFF]
                    "
                  />

                  <p
                    className="
                      text-sm
                      leading-6
                      text-white/75
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
          ====================================================== */}

      <section
        id="contact-schools"
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
            py-16
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
            Bring ManoCity to Your School
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
            Turn your classroom

            <span className="block text-[#168BE8]">
              into a coding city.
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
            Explore school packages, classroom delivery options and
            implementation support for your learners.
          </p>

          <div
            className="
              mt-9
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <button
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
              Request School Information →
            </button>

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
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    number: "01",
    eyebrow: "Start Here",
    title: "Python Essentials",
    subtitle: "Learn the code ManoBot needs.",
    description:
      "Short, story-led lessons introduce variables, decisions, loops and functions through ManoCity challenges.",
    image: "/python essentials.png",
    badge: "Beginner",
    cta: "Start Python",
    href: "/learning",
  },
  {
    number: "02",
    eyebrow: "Build & Control",
    title: "ManoBot Robotics",
    subtitle: "Turn code into movement.",
    description:
      "Learn how ManoBot uses motors, sensors and the Pico W to move, detect lines and respond to the physical world.",
    image: "/manobot robotics.png",
    badge: "Hands-on",
    cta: "Explore ManoBot",
    href: "/learning",
  },
  {
    number: "03",
    eyebrow: "Apply Your Skills",
    title: "ManoCity Missions",
    subtitle: "Code real journeys across the city.",
    description:
      "Guide ManoBot through roads, junctions, traffic signals and destinations while solving progressively harder missions.",
    image: "/manocity missions.png",
    badge: "Challenge",
    cta: "Explore Missions",
    href: "/learning",
  },
];

export default function LearningPaths() {
  return (
    <section
      id="learning"
      className="
        relative
        overflow-hidden
        bg-[#F8FBFE]
        px-6
        py-28
        md:px-12
        md:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-[28%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#168BE8]/5
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          right-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#74D7FF]/5
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
            ===================================================== */}

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
            ease: "easeOut",
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
            Learn with ManoCity
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
            From your first line of code

            <span className="block text-[#168BE8]">
              to autonomous city missions.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[#49647E]
            "
          >
            ManoCity guides learners through one connected journey:
            learn Python, control ManoBot and then apply those skills
            in the physical city.
          </p>

          {/* LEARNING HUB LINK */}

          <Link
            href="/learning"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#168BE8]/15
              bg-white
              px-6
              py-3
              text-sm
              font-bold
              text-[#168BE8]
              shadow-sm
              transition
              duration-300
              hover:-translate-y-0.5
              hover:border-[#168BE8]
              hover:shadow-md
            "
          >
            Explore Learning Resources
            <span>→</span>
          </Link>
        </motion.div>

        {/* =====================================================
            JOURNEY LINE
            ===================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-20
            hidden
            max-w-5xl
            lg:block
          "
        >
          {/* LIGHT BACKGROUND LINE */}

          <div
            className="
              absolute
              left-[15%]
              right-[15%]
              top-1/2
              h-[2px]
              -translate-y-1/2
              bg-[#168BE8]/10
            "
          />

          {/* ANIMATED BLUE LINE */}

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              absolute
              left-[15%]
              right-[15%]
              top-1/2
              h-[2px]
              origin-left
              -translate-y-1/2
              bg-gradient-to-r
              from-[#168BE8]
              via-[#65CFFF]
              to-[#168BE8]
            "
          />
        </div>

        {/* =====================================================
            COURSE CARDS
            ===================================================== */}

        <div
          className="
            relative
            mt-10
            grid
            gap-7
            lg:grid-cols-3
          "
        >
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={{
                opacity: 0,
                x: index === 0 ? -45 : index === 2 ? 45 : 0,
                y: index === 1 ? 35 : 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#168BE8]/10
                bg-white
                shadow-[0_20px_60px_rgba(11,31,58,0.10)]
                transition-shadow
                duration-300
                hover:shadow-[0_30px_80px_rgba(11,31,58,0.18)]
              "
            >
              {/* =================================================
                  COURSE THUMBNAIL
                  ================================================= */}

              <Link
                href={course.href}
                className="
                  relative
                  block
                  h-[285px]
                  w-full
                  overflow-hidden
                "
              >
                {/* IMAGE */}

                <motion.div
                  whileHover={{
                    scale: 1.055,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    unoptimized
                    className="
                      object-cover
                      object-center
                    "
                  />
                </motion.div>

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    bg-gradient-to-b
                    from-[#061A2E]/55
                    via-[#061A2E]/5
                    to-[#061A2E]/65
                  "
                />

                {/* SUBTLE BLUE OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    bg-[#168BE8]/5
                  "
                />

                {/* NUMBER + LEVEL */}

                <div
                  className="
                    absolute
                    left-6
                    right-6
                    top-5
                    z-20
                    flex
                    items-start
                    justify-between
                  "
                >
                  <span
                    className="
                      block
                      text-[44px]
                      font-black
                      leading-none
                      tracking-[-0.05em]
                      text-white
                    "
                    style={{
                      textShadow:
                        "0 4px 14px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.8)",
                    }}
                  >
                    {course.number}
                  </span>

                  <div
                    className="
                      rounded-full
                      border
                      border-white/30
                      bg-[#071B30]/65
                      px-4
                      py-2
                      text-[11px]
                      font-extrabold
                      uppercase
                      tracking-[0.18em]
                      text-white
                      shadow-[0_6px_18px_rgba(0,0,0,0.30)]
                      backdrop-blur-md
                    "
                    style={{
                      textShadow:
                        "0 2px 5px rgba(0,0,0,0.55)",
                    }}
                  >
                    {course.badge}
                  </div>
                </div>

                {/* IMAGE BOTTOM LABEL */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-6
                    z-20
                  "
                >
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-white/85
                    "
                    style={{
                      textShadow:
                        "0 2px 8px rgba(0,0,0,0.7)",
                    }}
                  >
                    Learning Path {course.number}
                  </p>
                </div>
              </Link>

              {/* =================================================
                  CARD CONTENT
                  ================================================= */}

              <div className="p-7">

                {/* EYEBROW */}

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#168BE8]
                  "
                >
                  {course.eyebrow}
                </p>

                {/* TITLE */}

                <Link href={course.href}>
                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-[#0B1F3A]
                      transition
                      duration-300
                      hover:text-[#168BE8]
                    "
                  >
                    {course.title}
                  </h3>
                </Link>

                {/* SUBTITLE */}

                <p
                  className="
                    mt-2
                    text-base
                    font-semibold
                    text-[#49647E]
                  "
                >
                  {course.subtitle}
                </p>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-[#647A8F]
                  "
                >
                  {course.description}
                </p>

                {/* =================================================
                    PROGRESS
                    ================================================= */}

                <div className="mt-6">
                  <div
                    className="
                      mb-2
                      flex
                      items-center
                      justify-between
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#8294A6]
                    "
                  >
                    <span>Learning Path</span>

                    <span>
                      {index + 1} / {courses.length}
                    </span>
                  </div>

                  <div
                    className="
                      h-1.5
                      overflow-hidden
                      rounded-full
                      bg-[#E7EFF6]
                    "
                  >
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${
                          ((index + 1) / courses.length) * 100
                        }%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.35 + index * 0.12,
                      }}
                      className="
                        h-full
                        rounded-full
                        bg-[#168BE8]
                        shadow-[0_2px_8px_rgba(22,139,232,0.35)]
                      "
                    />
                  </div>
                </div>

                {/* =================================================
                    COURSE BUTTON
                    ================================================= */}

                <Link
                  href={course.href}
                  className="
                    mt-7
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#0B1F3A]
                    px-6
                    py-3
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_8px_20px_rgba(11,31,58,0.18)]
                    transition
                    duration-300
                    group-hover:bg-[#168BE8]
                    group-hover:shadow-[0_10px_25px_rgba(22,139,232,0.28)]
                  "
                >
                  {course.cta}

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM JOURNEY MESSAGE
            ===================================================== */}

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
            amount: 0.35,
          }}
          transition={{
            duration: 0.65,
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-5xl
            flex-col
            items-center
            justify-between
            gap-7
            rounded-[30px]
            border
            border-[#168BE8]/10
            bg-white
            px-8
            py-8
            shadow-[0_15px_45px_rgba(11,31,58,0.05)]
            md:flex-row
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
              One Connected Learning Journey
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-extrabold
                text-[#0B1F3A]
              "
            >
              Learn. Build. Program. Explore.
            </h3>

            <p
              className="
                mt-3
                max-w-2xl
                text-base
                leading-7
                text-[#5D748A]
              "
            >
              Every lesson leads to something ManoBot can actually do
              in ManoCity.
            </p>
          </div>

          <Link
            href="/learning"
            className="
              shrink-0
              rounded-full
              border
              border-[#168BE8]/20
              bg-[#F5FAFF]
              px-7
              py-3.5
              text-sm
              font-bold
              text-[#168BE8]
              transition
              duration-300
              hover:bg-[#168BE8]
              hover:text-white
            "
          >
            Explore Learning Resources →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
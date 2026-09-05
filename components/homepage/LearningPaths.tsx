"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    number: "01",
    eyebrow: "Start Here",
    title: "Python Essentials",
    subtitle: "Learn the code ManoBot needs.",
    description:
      "Short, story-led lessons introduce variables, decisions, loops and functions through ManoCity challenges.",
    image: "/courses/python-essentials.png",
    badge: "Beginner",
    cta: "Start Python",
  },
  {
    number: "02",
    eyebrow: "Build & Control",
    title: "ManoBot Robotics",
    subtitle: "Turn code into movement.",
    description:
      "Learn how ManoBot uses motors, sensors and the Pico W to move, detect lines and respond to the physical world.",
    image: "/courses/manobot-robotics.png",
    badge: "Hands-on",
    cta: "Explore ManoBot",
  },
  {
    number: "03",
    eyebrow: "Apply Your Skills",
    title: "ManoCity Missions",
    subtitle: "Code real journeys across the city.",
    description:
      "Guide ManoBot through roads, junctions, traffic signals and destinations while solving progressively harder missions.",
    image: "/courses/manocity-missions.png",
    badge: "Challenge",
    cta: "Start Missions",
  },
];

export default function LearningPaths() {
  return (
    <section
      id="learning"
      className="relative overflow-hidden bg-[#F8FBFE] px-6 py-28 md:px-12 md:py-36"
    >
      {/* BACKGROUND DETAILS */}

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
          right-[10%]
          bottom-[10%]
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
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#168BE8]/10
                bg-white
                shadow-[0_20px_60px_rgba(11,31,58,0.07)]
                transition
                duration-300
              "
            >
              {/* COURSE NUMBER */}

              <div
                className="
                  absolute
                  left-5
                  top-5
                  z-20
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/50
                  bg-white/90
                  text-xs
                  font-extrabold
                  text-[#168BE8]
                  shadow-sm
                  backdrop-blur-md
                "
              >
                {course.number}
              </div>

              {/* BADGE */}

              <div
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  rounded-full
                  border
                  border-white/50
                  bg-white/90
                  px-3
                  py-1.5
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#0B1F3A]
                  shadow-sm
                  backdrop-blur-md
                "
              >
                {course.badge}
              </div>

              {/* IMAGE AREA */}

              <div
                className="
                  relative
                  flex
                  h-[270px]
                  items-center
                  justify-center
                  overflow-hidden
                  bg-gradient-to-br
                  from-[#F4FAFF]
                  via-white
                  to-[#EAF7FF]
                  p-6
                "
              >
                <motion.div
                  whileHover={{
                    scale: 1.06,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    flex
                    h-full
                    w-full
                    items-center
                    justify-center
                  "
                >
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={340}
                    unoptimized
                    className="
                      max-h-[230px]
                      w-auto
                      object-contain
                      drop-shadow-[0_20px_35px_rgba(11,31,58,0.12)]
                    "
                  />
                </motion.div>
              </div>

              {/* CONTENT */}

              <div className="p-7">

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

                <h3
                  className="
                    mt-3
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-[#0B1F3A]
                  "
                >
                  {course.title}
                </h3>

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

                {/* PROGRESS INDICATOR */}

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
                    <span>{index + 1} / 3</span>
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
                        width: `${((index + 1) / 3) * 100}%`,
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
                      "
                    />
                  </div>
                </div>

                {/* CTA */}

                <button
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
                    transition
                    duration-300
                    group-hover:bg-[#168BE8]
                  "
                >
                  {course.cta}

                  <span
                    className="
                      transition
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>

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
              Every lesson leads to something ManoBot can actually do in
              ManoCity.
            </p>
          </div>

          <button
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
            View All Learning →
          </button>
        </motion.div>

      </div>
    </section>
  );
}
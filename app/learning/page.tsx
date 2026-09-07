"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    number: "01",
    title: "Python Essentials",
    subtitle: "Learn the programming ManoBot needs.",
    description:
      "Start with the fundamentals of Python through short, visual lessons built around ManoCity. Learn variables, decisions, loops and functions before applying them to robotics.",
    image: "/python essentials.png",
    href: "/learning/python",
    level: "Beginner",
    lessons: "Core Python",
    duration: "Start Here",
    topics: [
      "Variables & data",
      "Conditions",
      "Loops",
      "Functions",
    ],
  },
  {
    number: "02",
    title: "ManoBot Robotics",
    subtitle: "Turn your code into real movement.",
    description:
      "Learn how ManoBot works, connect sensors and motors, program the Pico W and build the behaviours needed to navigate ManoCity.",
    image: "/manobot robotics.png",
    href: "/learning/robotics",
    level: "Hands-on",
    lessons: "Physical Computing",
    duration: "Build Next",
    topics: [
      "Pico W",
      "Motors",
      "Line sensors",
      "Ultrasonic sensing",
    ],
  },
];

export default function LearningPage() {
  return (
    <main className="overflow-hidden bg-white text-[#0B1F3A]">

      {/* =====================================================
          HEADER
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
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-[#0B1F3A]"
        >
          Mano
          <span className="text-[#168BE8]">
            City
          </span>
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
            className="transition duration-300 hover:text-[#168BE8]"
          >
            For Schools
          </Link>

          <Link
            href="/learning"
            className="text-[#168BE8]"
          >
            Learning
          </Link>

          <Link
            href="/#shop"
            className="transition duration-300 hover:text-[#FF9D17]"
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
          min-h-[82vh]
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
        {/* GLOWS */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-8%]
            top-[10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#168BE8]/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-100px]
            left-[10%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#65CFFF]/10
            blur-[110px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[82vh]
            max-w-7xl
            items-center
            justify-center
            py-20
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mx-auto max-w-4xl text-center"
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
              ManoCity Learning
            </p>

            <h1
              className="
                text-5xl
                font-extrabold
                leading-[1.03]
                tracking-tight
                text-[#0B1F3A]
                md:text-7xl
              "
            >
              Learn the code.

              <span className="block text-[#168BE8]">
                Then make it move.
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-[#526A80]
                md:text-xl
              "
            >
              Start with Python fundamentals, then move into physical
              robotics and learn how to control ManoBot inside ManoCity.
            </p>

            {/* JOURNEY */}

            <div
              className="
                mx-auto
                mt-10
                flex
                max-w-xl
                items-center
                justify-center
                gap-3
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#168BE8]
              "
            >
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Python
              </span>

              <span className="text-[#9CCBEF]">
                →
              </span>

              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Robotics
              </span>

              <span className="text-[#9CCBEF]">
                →
              </span>

              <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                Missions
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          COURSE CHOICES
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
              duration: 0.7,
            }}
            className="mb-14"
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
              Choose Your Course
            </p>

            <h2
              className="
                mt-3
                max-w-3xl
                text-4xl
                font-extrabold
                tracking-tight
                text-[#0B1F3A]
                md:text-5xl
              "
            >
              Two courses.
              <span className="text-[#168BE8]">
                {" "}One connected journey.
              </span>
            </h2>
          </motion.div>

          {/* COURSES */}

          <div className="grid gap-8 lg:grid-cols-2">

            {courses.map((course, index) => (
              <motion.div
                key={course.title}
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
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  shadow-[0_22px_70px_rgba(11,31,58,0.08)]
                  transition
                  duration-300
                  hover:shadow-[0_30px_85px_rgba(11,31,58,0.13)]
                "
              >
                {/* IMAGE */}

                <div className="p-4">
                  <div
                    className="
                      relative
                      h-[340px]
                      overflow-hidden
                      rounded-[28px]
                    "
                  >
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      unoptimized
                      className="
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-[1.035]
                      "
                    />

                    {/* NUMBER */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-white/95
                        text-sm
                        font-extrabold
                        text-[#168BE8]
                        shadow-[0_10px_24px_rgba(0,0,0,0.22)]
                      "
                    >
                      {course.number}
                    </div>

                    {/* LEVEL */}

                    <div
                      className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        bg-white/95
                        px-4
                        py-2
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.16em]
                        text-[#0B1F3A]
                        shadow-[0_10px_24px_rgba(0,0,0,0.22)]
                      "
                    >
                      {course.level}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="px-8 pb-9 pt-4">

                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="
                        rounded-full
                        bg-[#EAF7FF]
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#168BE8]
                      "
                    >
                      {course.lessons}
                    </span>

                    <span
                      className="
                        rounded-full
                        bg-[#F7F9FB]
                        px-3
                        py-1.5
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#6B7F91]
                      "
                    >
                      {course.duration}
                    </span>
                  </div>

                  <h2
                    className="
                      mt-5
                      text-3xl
                      font-extrabold
                      tracking-tight
                      text-[#0B1F3A]
                    "
                  >
                    {course.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-lg
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

                  {/* TOPICS */}

                  <div className="mt-6 grid grid-cols-2 gap-3">

                    {course.topics.map((topic) => (
                      <div
                        key={topic}
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-2xl
                          bg-[#F8FBFE]
                          px-4
                          py-3
                          text-xs
                          font-semibold
                          text-[#405A72]
                        "
                      >
                        <span className="h-2 w-2 rounded-full bg-[#168BE8]" />
                        {topic}
                      </div>
                    ))}

                  </div>

                  {/* CTA */}

                  <Link
                    href={course.href}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#0B1F3A]
                      px-7
                      py-3.5
                      text-sm
                      font-bold
                      text-white
                      shadow-[0_10px_25px_rgba(11,31,58,0.18)]
                      transition
                      duration-300
                      hover:bg-[#168BE8]
                    "
                  >
                    Open Course

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
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          HOW TO PROGRESS
          ===================================================== */}

      <section
        className="
          bg-[#F7FBFE]
          px-6
          py-28
          md:px-12
          md:py-36
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
            className="text-center"
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
              Recommended Journey
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
              Learn first.

              <span className="block text-[#168BE8]">
                Build when you are ready.
              </span>
            </h2>
          </motion.div>

          <div
            className="
              mt-16
              grid
              gap-5
              md:grid-cols-3
            "
          >
            {[
              {
                number: "1",
                title: "Learn Python",
                text: "Understand the programming ideas ManoBot will use.",
              },
              {
                number: "2",
                title: "Learn Robotics",
                text: "Connect software with sensors, motors and the Pico W.",
              },
              {
                number: "3",
                title: "Enter ManoCity",
                text: "Use everything together to complete physical missions.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
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
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="
                  rounded-[26px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  p-7
                  shadow-[0_15px_45px_rgba(11,31,58,0.05)]
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#168BE8]
                    text-sm
                    font-extrabold
                    text-white
                  "
                >
                  {item.number}
                </div>

                <h3
                  className="
                    mt-5
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
              </motion.div>
            ))}

          </div>
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
            max-w-5xl
            rounded-[40px]
            bg-[#0B1F3A]
            px-8
            py-16
            text-center
            text-white
            shadow-[0_25px_75px_rgba(11,31,58,0.18)]
            md:px-14
          "
        >
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-[#65CFFF]
            "
          >
            Start Your Journey
          </p>

          <h2
            className="
              mx-auto
              mt-4
              max-w-3xl
              text-4xl
              font-extrabold
              tracking-tight
              md:text-6xl
            "
          >
            New to coding?

            <span className="block text-[#65CFFF]">
              Start with Python.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-lg
              leading-8
              text-white/70
            "
          >
            Build the programming foundation first, then move into
            ManoBot robotics and physical ManoCity missions.
          </p>

          <Link
            href="/learning/python"
            className="
              mt-9
              inline-flex
              rounded-full
              bg-white
              px-8
              py-4
              text-sm
              font-bold
              text-[#0B1F3A]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#65CFFF]
            "
          >
            Start Python Essentials →
          </Link>

        </motion.div>
      </section>

    </main>
  );
}
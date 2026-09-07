"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* =========================================================
   PRODUCTS
   ========================================================= */

const products = [
  {
    name: "ManoBot Kit",
    price: "£75",
    description:
      "Build and program your own ESP32-powered ManoBot.",
    features: [
      "ESP32-powered ManoBot",
      "Line-following sensor",
      "Ultrasonic distance sensor",
      "Motors and wheels",
      "Rechargeable power system",
      "Python & robotics learning access",
    ],
    image: "/manobot-route.png",
    featured: false,
  },

  {
    name: "ManoCity Complete Kit",
    price: "£249",
    launchPrice: "£125",
    description:
      "The complete ManoCity experience — robot, physical city and structured learning journey.",
    features: [
      "ESP32-powered ManoBot",
      "ManoCity physical map",
      "3D city buildings",
      "Programmable traffic signal",
      "Learning guide & missions",
      "Python Essentials course",
      "ManoBot Robotics course",
    ],
    image: "/manocity%20kit%20image.png",
    featured: true,
  },
];

/* =========================================================
   KIT CONTENTS
   ========================================================= */

const kitContents = [
  {
    title: "ManoBot",
    text: "An ESP32-powered robot learners build, program and bring to life.",
    image: "/manobot-route.png",
  },
  {
    title: "ManoCity Map",
    text: "A physical city map with roads, junctions, destinations and coding missions.",
    image: "/map.png",
  },
  {
    title: "3D Buildings",
    text: "Physical city landmarks including Mano's Home, School and Shop.",
    image: "/buildings.png",
  },
  {
    title: "Traffic Signals",
    text: "Programmable traffic signals for interactive smart-city challenges.",
    image: "/traffic signal.png",
  },
  {
    title: "Learning Guide",
    text: "Structured activities that take learners from Python basics to robotics missions.",
    image: "/guide.png",
  },
];

/* =========================================================
   LEARNING JOURNEY
   ========================================================= */

const learningJourney = [
  {
    number: "01",
    title: "Build",
    text: "Assemble ManoBot and discover how its motors, sensors and ESP32 controller work together.",
  },
  {
    number: "02",
    title: "Code",
    text: "Learn Python and write programs that control ManoBot's movement and behaviour.",
  },
  {
    number: "03",
    title: "Explore",
    text: "Place ManoBot in ManoCity and use code to navigate roads, junctions and destinations.",
  },
  {
    number: "04",
    title: "Complete Missions",
    text: "Apply coding and robotics skills to increasingly challenging ManoCity missions.",
  },
];

/* =========================================================
   INCLUDED ITEMS
   ========================================================= */

const includedItems = [
  "1 × ESP32-powered ManoBot",
  "Line-following sensor",
  "Ultrasonic distance sensor",
  "Motors, wheels and rechargeable power system",
  "1 × Physical ManoCity map",
  "3D Home, School, Shop & city landmarks",
  "Programmable traffic signal",
  "ManoCity learning guide",
  "Coding missions",
  "Python Essentials course",
  "ManoBot Robotics course",
];

/* =========================================================
   SHOP PAGE
   ========================================================= */

export default function ShopPage() {
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
          from-[#F7FCFF]
          via-white
          to-[#EAF7FF]
          px-6
          py-20
          md:px-12
          md:py-28
        "
      >
        {/* BACKGROUND GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            right-[-10%]
            top-[5%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-[#168BE8]/[0.08]
            blur-[140px]
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
            lg:grid-cols-[0.85fr_1.15fr]
          "
        >
          {/* =================================================
              HERO TEXT
              ================================================= */}

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
              ManoCity Shop
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
              Build the robot.

              <span className="block text-[#168BE8]">
                Bring the city to life.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-xl
                text-lg
                leading-8
                text-[#526A80]
              "
            >
              One complete hands-on learning experience
              connecting Python, electronics and robotics
              with a physical city learners can explore.
            </p>

            {/* TAGS */}

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "ESP32 Powered",
                "Python",
                "Robotics",
                "Hands-on STEM",
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

            {/* =================================================
                HERO PRICE
                ================================================= */}

            <div className="mt-8">
              <div className="flex items-center gap-3">
                <span
                  className="
                    text-sm
                    font-semibold
                    text-[#8294A6]
                    line-through
                  "
                >
                  £249
                </span>

                <span
                  className="
                    rounded-full
                    bg-[#FFF3E1]
                    px-3
                    py-1
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-[#E88400]
                  "
                >
                  Launch Price
                </span>
              </div>

              <div className="mt-1 flex items-end gap-3">
                <span
                  className="
                    text-5xl
                    font-extrabold
                    tracking-tight
                    text-[#0B1F3A]
                  "
                >
                  £125
                </span>

                <span
                  className="
                    pb-1
                    text-sm
                    font-semibold
                    text-[#8294A6]
                  "
                >
                  incl. VAT
                </span>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#buy"
                className="
                  inline-flex
                  items-center
                  gap-2
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
                Get the ManoCity Kit →
              </a>

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
                  duration-300
                  hover:border-[#168BE8]
                "
              >
                Explore Learning
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              HERO PRODUCT IMAGE
              ================================================= */}

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
            <div
              className="
                pointer-events-none
                absolute
                h-[500px]
                w-[500px]
                rounded-full
                bg-[#65CFFF]/10
                blur-[100px]
              "
            />

            <Image
              src="/manocity%20kit%20image.png"
              alt="Complete ManoCity educational robotics kit"
              width={1400}
              height={1100}
              priority
              unoptimized
              className="
                relative
                z-10
                w-full
                max-w-[760px]
                object-contain
                drop-shadow-[0_30px_50px_rgba(11,31,58,0.14)]
              "
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CHOOSE YOUR KIT
          ===================================================== */}

      <section
        id="buy"
        className="
          bg-white
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
              Choose Your Kit
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
              Start with ManoBot.

              <span className="block text-[#168BE8]">
                Or unlock the whole city.
              </span>
            </h2>
          </motion.div>

          {/* PRODUCT CARDS */}

          <div
            className="
              mx-auto
              mt-16
              grid
              max-w-5xl
              gap-7
              lg:grid-cols-2
            "
          >
            {products.map((product, index) => (
              <motion.div
                key={product.name}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className={`
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  p-6
                  transition
                  duration-300

                  ${
                    product.featured
                      ? "border-[#168BE8]/25 bg-[#F8FCFF] shadow-[0_25px_65px_rgba(22,139,232,0.12)]"
                      : "border-[#0B1F3A]/10 bg-white shadow-[0_20px_55px_rgba(11,31,58,0.07)]"
                  }
                `}
              >
                {/* FEATURED LABEL */}

                {product.featured && (
                  <div
                    className="
                      absolute
                      right-5
                      top-5
                      z-20
                      rounded-full
                      bg-[#168BE8]
                      px-4
                      py-2
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.15em]
                      text-white
                    "
                  >
                    Best Experience
                  </div>
                )}

                {/* PRODUCT IMAGE */}

                <div
                  className="
                    flex
                    h-[300px]
                    items-center
                    justify-center
                    rounded-[25px]
                    bg-[#F8FBFE]
                    p-5
                  "
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={700}
                    height={550}
                    unoptimized
                    className="
                      max-h-[270px]
                      w-full
                      object-contain
                    "
                  />
                </div>

                {/* PRODUCT DETAILS */}

                <div className="px-2 pb-2 pt-7">
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#168BE8]
                    "
                  >
                    {product.featured
                      ? "Complete Learning Experience"
                      : "Robot Kit"}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-3xl
                      font-extrabold
                      text-[#0B1F3A]
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      min-h-[56px]
                      text-sm
                      leading-7
                      text-[#61788E]
                    "
                  >
                    {product.description}
                  </p>

                  {/* PRICE */}

                  {product.launchPrice ? (
                    <div className="mt-6">
                      <div className="flex items-center gap-2">
                        <span
                          className="
                            text-sm
                            font-semibold
                            text-[#8A9BAC]
                            line-through
                          "
                        >
                          {product.price}
                        </span>

                        <span
                          className="
                            rounded-full
                            bg-[#FFF3E1]
                            px-3
                            py-1
                            text-[9px]
                            font-extrabold
                            uppercase
                            tracking-[0.12em]
                            text-[#E88400]
                          "
                        >
                          Launch
                        </span>
                      </div>

                      <div className="mt-1 flex items-end gap-2">
                        <span
                          className="
                            text-4xl
                            font-extrabold
                            text-[#0B1F3A]
                          "
                        >
                          {product.launchPrice}
                        </span>

                        <span
                          className="
                            pb-1
                            text-xs
                            font-semibold
                            text-[#8294A6]
                          "
                        >
                          incl. VAT
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-6 flex items-end gap-2">
                      <span
                        className="
                          text-4xl
                          font-extrabold
                          text-[#0B1F3A]
                        "
                      >
                        {product.price}
                      </span>

                      <span
                        className="
                          pb-1
                          text-xs
                          font-semibold
                          text-[#8294A6]
                        "
                      >
                        incl. VAT
                      </span>
                    </div>
                  )}

                  {/* FEATURES */}

                  <div className="mt-7 space-y-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
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
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#EAF7FF]
                            text-xs
                            font-extrabold
                            text-[#168BE8]
                          "
                        >
                          ✓
                        </span>

                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}

                  <motion.button
                    type="button"
                    whileTap={{
                      scale: 0.98,
                    }}
                    className={`
                      mt-8
                      inline-flex
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      px-7
                      py-4
                      text-sm
                      font-bold
                      transition
                      duration-300

                      ${
                        product.featured
                          ? "bg-[#168BE8] text-white hover:bg-[#0B1F3A]"
                          : "bg-[#0B1F3A] text-white hover:bg-[#168BE8]"
                      }
                    `}
                  >
                    Pre-order {product.name} →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT IS INSIDE THE COMPLETE KIT
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
              Inside the Complete Kit
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
              Everything in one box.

              <span className="block text-[#168BE8]">
                Ready for the adventure.
              </span>
            </h2>
          </motion.div>

          {/* CONTENT CARDS */}

          <div
            className="
              mt-16
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {kitContents.map((item, index) => (
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[26px]
                  border
                  border-[#168BE8]/10
                  bg-white
                  p-4
                  shadow-[0_15px_45px_rgba(11,31,58,0.06)]
                "
              >
                <div
                  className="
                    flex
                    h-[155px]
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-[19px]
                    bg-[#F8FBFE]
                    p-3
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={240}
                    height={170}
                    unoptimized
                    className="
                      max-h-[135px]
                      w-full
                      object-contain
                    "
                  />
                </div>

                <h3
                  className="
                    mt-5
                    text-lg
                    font-extrabold
                    text-[#0B1F3A]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
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
          COMPLETE KIT DETAILS
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
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            items-center
            gap-14
            lg:grid-cols-[1fr_0.9fr]
          "
        >
          {/* IMAGE */}

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
            className="
              relative
              flex
              min-h-[500px]
              items-center
              justify-center
              rounded-[36px]
              bg-[#FAFCFE]
              p-7
            "
          >
            <Image
              src="/manocity%20kit%20image.png"
              alt="Complete ManoCity Kit"
              width={1200}
              height={900}
              unoptimized
              className="
                w-full
                object-contain
                drop-shadow-[0_22px_35px_rgba(11,31,58,0.12)]
              "
            />

            <div
              className="
                absolute
                left-7
                top-7
                rounded-full
                bg-white
                px-4
                py-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.15em]
                text-[#168BE8]
                shadow-[0_8px_25px_rgba(11,31,58,0.08)]
              "
            >
              ESP32 Powered
            </div>
          </motion.div>

          {/* DETAILS */}

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
          >
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#168BE8]
              "
            >
              ManoCity Complete Kit
            </p>

            <h2
              className="
                mt-3
                text-4xl
                font-extrabold
                tracking-tight
                md:text-5xl
              "
            >
              The complete ManoCity experience.
            </h2>

            <p
              className="
                mt-5
                text-lg
                leading-8
                text-[#5D748A]
              "
            >
              Everything learners need to move from their
              first line of Python to an ESP32-powered robot
              navigating a physical city.
            </p>

            {/* PRICE */}

            <div
              className="
                mt-7
                rounded-[26px]
                border
                border-[#168BE8]/10
                bg-[#F8FBFE]
                p-6
              "
            >
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#8294A6]
                    "
                  >
                    Launch Price
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span
                      className="
                        text-4xl
                        font-extrabold
                        tracking-tight
                        text-[#0B1F3A]
                      "
                    >
                      £125
                    </span>

                    <span
                      className="
                        pb-1
                        text-xs
                        font-semibold
                        text-[#8294A6]
                      "
                    >
                      incl. VAT
                    </span>
                  </div>

                  <p
                    className="
                      mt-1
                      text-xs
                      font-semibold
                      text-[#8294A6]
                    "
                  >
                    Regular price{" "}
                    <span className="line-through">
                      £249
                    </span>
                  </p>
                </div>

                <div
                  className="
                    rounded-full
                    bg-[#EAF7FF]
                    px-4
                    py-2
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.15em]
                    text-[#168BE8]
                  "
                >
                  Complete Kit
                </div>
              </div>
            </div>

            {/* INCLUDED */}

            <div className="mt-7 space-y-3">
              {includedItems.map((item) => (
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
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF7FF]
                      text-xs
                      font-extrabold
                      text-[#168BE8]
                    "
                  >
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-9
                inline-flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-[#0B1F3A]
                px-8
                py-4
                text-sm
                font-bold
                text-white
                shadow-[0_14px_30px_rgba(11,31,58,0.20)]
                transition
                duration-300
                hover:bg-[#168BE8]
                sm:w-auto
              "
            >
              Pre-order Complete Kit →
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          LEARNING JOURNEY
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
        <div className="mx-auto max-w-7xl">
          <div
            className="
              grid
              gap-14
              lg:grid-cols-[0.75fr_1.25fr]
            "
          >
            {/* LEFT */}

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
                More Than Hardware
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
                A learning journey

                <span className="block text-[#168BE8]">
                  inside every kit.
                </span>
              </h2>

              <p
                className="
                  mt-6
                  max-w-lg
                  text-lg
                  leading-8
                  text-[#5D748A]
                "
              >
                Learners do not simply assemble a robot.
                They learn how to program it, understand
                how it works and use it to solve problems.
              </p>

              <Link
                href="/learning"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#168BE8]/20
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#168BE8]
                  transition
                  hover:border-[#168BE8]
                "
              >
                View Learning Resources →
              </Link>
            </div>

            {/* JOURNEY */}

            <div className="space-y-4">
              {learningJourney.map((item, index) => (
                <motion.div
                  key={item.title}
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
                    delay: index * 0.08,
                  }}
                  className="
                    flex
                    gap-5
                    rounded-[24px]
                    border
                    border-[#168BE8]/10
                    bg-white
                    p-6
                    shadow-[0_12px_35px_rgba(11,31,58,0.05)]
                  "
                >
                  <div
                    className="
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
                    "
                  >
                    {item.number}
                  </div>

                  <div>
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
                        mt-2
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
        </div>
      </section>

      {/* =====================================================
          SCHOOL PACKAGES
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
        <div className="mx-auto max-w-6xl">
          {/* HEADING */}

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
              For Schools
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
              Bring ManoCity

              <span className="block text-[#168BE8]">
                into your classroom.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                leading-8
                text-[#5D748A]
              "
            >
              Multi-kit packages make it possible for
              student teams to build, code and explore
              ManoCity together.
            </p>
          </div>

          {/* PACKAGES */}

          <div
            className="
              mt-14
              grid
              gap-6
              md:grid-cols-2
            "
          >
            {/* 5 KIT PACK */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
                rounded-[32px]
                border
                border-[#168BE8]/10
                bg-[#F9FCFE]
                p-8
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
                School Pack
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                "
              >
                5 ManoCity Kits
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <span
                  className="
                    text-4xl
                    font-extrabold
                  "
                >
                  £1,125
                </span>

                <span
                  className="
                    pb-1
                    text-xs
                    font-semibold
                    text-[#8294A6]
                  "
                >
                  incl. VAT
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[#61788E]
                "
              >
                Five complete ManoCity learning kits for
                small-group STEM and robotics activities.
              </p>

              <Link
                href="/schools"
                className="
                  mt-7
                  inline-flex
                  rounded-full
                  bg-[#0B1F3A]
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-[#168BE8]
                "
              >
                Explore School Pack →
              </Link>
            </motion.div>

            {/* 10 KIT PACK */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-[#0B1F3A]
                p-8
                text-white
                shadow-[0_25px_60px_rgba(11,31,58,0.18)]
              "
            >
              <div
                className="
                  absolute
                  right-6
                  top-6
                  rounded-full
                  bg-[#168BE8]
                  px-4
                  py-2
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.15em]
                "
              >
                Classroom
              </div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#65CFFF]
                "
              >
                Classroom Pack
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                "
              >
                10 ManoCity Kits
              </h3>

              <div className="mt-5 flex items-end gap-2">
                <span
                  className="
                    text-4xl
                    font-extrabold
                  "
                >
                  £2,125
                </span>

                <span
                  className="
                    pb-1
                    text-xs
                    font-semibold
                    text-white/50
                  "
                >
                  incl. VAT
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-white/70
                "
              >
                Ten complete kits for larger classroom,
                robotics-club and school STEM programmes.
              </p>

              <Link
                href="/schools"
                className="
                  mt-7
                  inline-flex
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#0B1F3A]
                  transition
                  hover:bg-[#65CFFF]
                "
              >
                Explore Classroom Pack →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
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
            max-w-6xl
            overflow-hidden
            rounded-[38px]
            bg-[#0B1F3A]
            px-7
            py-12
            text-white
            md:px-14
            md:py-16
          "
        >
          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-10
              lg:flex-row
            "
          >
            <div
              className="
                max-w-2xl
                text-center
                lg:text-left
              "
            >
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#65CFFF]
                "
              >
                Start Building
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-extrabold
                  md:text-5xl
                "
              >
                Your ManoCity adventure starts here.
              </h2>

              <p
                className="
                  mt-4
                  text-base
                  leading-7
                  text-white/70
                "
              >
                Build ManoBot. Learn Python. Explore the city.
                Turn code into something you can see move.
              </p>
            </div>

            <div className="shrink-0 text-center">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#65CFFF]
                "
              >
                Launch Price
              </p>

              <div className="mt-2">
                <span
                  className="
                    text-4xl
                    font-extrabold
                  "
                >
                  £125
                </span>

                <span
                  className="
                    ml-2
                    text-xs
                    font-semibold
                    text-white/50
                  "
                >
                  incl. VAT
                </span>
              </div>

              <p
                className="
                  mt-1
                  text-xs
                  text-white/45
                "
              >
                Regular price £249
              </p>

              <a
                href="#buy"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
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
                Pre-order ManoCity Kit →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
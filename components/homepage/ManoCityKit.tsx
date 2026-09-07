"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useInView,
} from "framer-motion";

/* =========================================================
   MANOCITY KIT ITEMS
   ========================================================= */

const kitItems = [
  {
    title: "ManoBot",
    description:
      "Build and program your own line-following robot.",
    image: "/manobot-route.png",

    x: -330,
    y: -150,

    delay: 0.45,
  },

  {
    title: "ManoCity Map",
    description:
      "A physical city poster with roads, junctions and missions.",
    image: "/map.png",

    x: 330,
    y: -150,

    delay: 0.62,
  },

  {
    title: "3D Buildings",
    description:
      "Simple physical landmarks including Home, School and Shop.",
    image: "/buildings.png",

    x: -360,
    y: 100,

    delay: 0.79,
  },

  {
    title: "Traffic Signals",
    description:
      "Programmable LED traffic lights for smart-city challenges.",
    image: "/traffic signal.png",

    x: 360,
    y: 100,

    delay: 0.96,
  },

  {
    title: "Learning Guide",
    description:
      "Step-by-step activities that take learners from coding basics to real ManoCity missions.",
    image: "/guide.png",

    x: 0,
    y: 220,

    delay: 1.13,
  },
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ManoCityKit() {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const isInView = useInView(
    sectionRef,
    {
      once: true,
      amount: 0.18,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="manocity-kit"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        px-6
        py-24
        md:px-12
        md:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[58%]
          h-[780px]
          w-[780px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#168BE8]/[0.025]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[900px]
          max-w-7xl
          flex-col
          items-center
        "
      >
        {/* =====================================================
            HEADING
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-40
            mx-auto
            max-w-3xl
            text-center
          "
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
            The ManoCity Kit
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
            Everything you need

            <span className="block text-[#168BE8]">
              to bring ManoCity to life.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-[#49647E]
            "
          >
            Build ManoBot, place it on the city,
            write real code and complete physical
            missions.
          </p>
        </motion.div>

        {/* =====================================================
            KIT STAGE
            ===================================================== */}

        <div
          className="
            relative
            mt-10
            h-[650px]
            w-full
            max-w-6xl
          "
        >
          {/* =================================================
              CENTRAL KIT
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.72,
              y: 50,
            }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    scale: 0.72,
                    y: 50,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-1/2
              top-[44%]
              z-10
              w-[520px]
              -translate-x-1/2
              -translate-y-1/2
              md:w-[600px]
            "
          >
            <Image
              src="/manocity%20kit%20image.png"
              alt="Complete ManoCity educational robotics kit"
              width={1400}
              height={1100}
              priority
              unoptimized
              className="
                w-full
                object-contain
                drop-shadow-[0_30px_45px_rgba(11,31,58,0.12)]
              "
            />
          </motion.div>

          {/* =================================================
              PRODUCT CARDS
              ================================================= */}

          {kitItems.map((item) => (
            <KitCard
              key={item.title}
              item={item}
              isInView={isInView}
            />
          ))}
        </div>

        {/* =====================================================
            SHOP CTA
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          transition={{
            duration: 0.65,
            delay: 1.5,
          }}
          className="
            relative
            z-50
            -mt-1
            flex
            flex-col
            items-center
            gap-4
          "
        >
          {/* SHOP BUTTON */}

          <Link
            href="/shop"
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
              shadow-[0_14px_30px_rgba(11,31,58,0.20)]
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#168BE8]
              hover:shadow-[0_18px_35px_rgba(22,139,232,0.25)]
            "
          >
            Shop the ManoCity Kit

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

          {/* SMALL JOURNEY LABEL */}

          <div
            className="
              rounded-full
              border
              border-[#168BE8]/15
              bg-white/90
              px-5
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#168BE8]
              shadow-sm
              backdrop-blur-md
            "
          >
            Build • Code • Explore
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   KIT CARD
   ========================================================= */

function KitCard({
  item,
  isInView,
}: {
  item: {
    title: string;
    description: string;
    image: string;
    x: number;
    y: number;
    delay: number;
  };

  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{
        x: 0,
        y: 0,
        scale: 0.7,
        opacity: 0,
        rotate: -5,
      }}
      animate={
        isInView
          ? {
              x: item.x,
              y: item.y,
              scale: 1,
              opacity: 1,
              rotate: 0,
            }
          : {
              x: 0,
              y: 0,
              scale: 0.7,
              opacity: 0,
              rotate: -5,
            }
      }
      transition={{
        duration: 0.85,
        delay: item.delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.045,
        y: item.y - 6,
        transition: {
          duration: 0.25,
        },
      }}
      className="
        absolute
        left-1/2
        top-[44%]
        z-20
        w-[220px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-[26px]
        border
        border-[#168BE8]/10
        bg-white/95
        p-4
        shadow-[0_20px_55px_rgba(11,31,58,0.10)]
        backdrop-blur-md
      "
    >
      {/* =================================================
          IMAGE
          ================================================= */}

      <div
        className="
          flex
          h-[115px]
          items-center
          justify-center
          overflow-hidden
          rounded-[18px]
          bg-[#F5FAFF]
        "
      >
        <Image
          src={item.image}
          alt={item.title}
          width={190}
          height={120}
          unoptimized
          className="
            max-h-[100px]
            max-w-[180px]
            object-contain
          "
        />
      </div>

      {/* TITLE */}

      <h3
        className="
          mt-4
          text-base
          font-extrabold
          text-[#0B1F3A]
        "
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-[#61788E]
        "
      >
        {item.description}
      </p>
    </motion.div>
  );
}
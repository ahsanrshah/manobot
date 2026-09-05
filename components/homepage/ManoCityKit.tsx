"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
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

    // Upper left
    x: -330,
    y: -150,

    start: 0.18,
    end: 0.34,
  },

  {
    title: "ManoCity Map",
    description:
      "A physical city poster with roads, junctions and missions.",
    image: "/map.png",

    // Upper right
    x: 330,
    y: -150,

    start: 0.28,
    end: 0.44,
  },

  {
    title: "3D Buildings",
    description:
      "Simple physical landmarks including Home, School and Shop.",
    image: "/buildings.png",

    // Lower left
    x: -360,
    y: 100,

    start: 0.38,
    end: 0.54,
  },

  {
    title: "Traffic Signals",
    description:
      "Programmable LED traffic lights for smart-city challenges.",
    image: "/traffic signal.png",

    // Lower right
    x: 360,
    y: 100,

    start: 0.48,
    end: 0.64,
  },

  {
    title: "Learning Guide",
    description:
      "Step-by-step activities that take learners from coding basics to real ManoCity missions.",
    image: "/guide.png",

    // Bottom centre
    x: 0,
    y: 300,

    start: 0.58,
    end: 0.74,
  },
];

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ManoCityKit() {
  const sectionRef = useRef<HTMLElement | null>(null);

  /* =====================================================
     SCROLL PROGRESS
     ===================================================== */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Smooth the raw scroll movement.
   * This prevents cards from feeling jerky on trackpads.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.7,
  });

  /* =====================================================
     CENTRAL KIT IMAGE ANIMATION
     ===================================================== */

  const kitScale = useTransform(
    smoothProgress,
    [0.02, 0.18],
    [0.78, 1]
  );

  const kitOpacity = useTransform(
    smoothProgress,
    [0.02, 0.12],
    [0, 1]
  );

  const kitY = useTransform(
    smoothProgress,
    [0.02, 0.18],
    [60, 0]
  );

  /* =====================================================
     HEADING ANIMATION
     ===================================================== */

  const headingOpacity = useTransform(
    smoothProgress,
    [0, 0.08, 0.22],
    [1, 1, 0.35]
  );

  const headingY = useTransform(
    smoothProgress,
    [0, 0.2],
    [0, -25]
  );

  return (
    <section
      ref={sectionRef}
      id="manocity-kit"
      className="relative h-[500vh] bg-white"
    >
      {/* ===================================================
          STICKY STAGE
          =================================================== */}

      <div
        className="
          sticky
          top-0
          h-screen
          overflow-hidden
          bg-white
        "
      >
        {/* =================================================
            BACKGROUND GLOW
            ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[52%]
            h-[900px]
            w-[900px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#168BE8]/5
            blur-[140px]
          "
        />

        {/* =================================================
            HEADING
            ================================================= */}

        <motion.div
          style={{
            opacity: headingOpacity,
            y: headingY,
          }}
          className="
            absolute
            left-1/2
            top-[7%]
            z-40
            w-full
            max-w-3xl
            -translate-x-1/2
            px-6
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
            Build ManoBot, place it on the city, write real code and
            complete physical missions.
          </p>
        </motion.div>

        {/* =================================================
            KIT STAGE
            ================================================= */}

        <div
          className="
            absolute
            left-1/2
            top-[58%]
            h-[720px]
            w-full
            max-w-6xl
            -translate-x-1/2
            -translate-y-1/2
          "
        >
          {/* ===============================================
              CENTRAL COMPLETE KIT IMAGE
              =============================================== */}

          <motion.div
            style={{
              opacity: kitOpacity,
              scale: kitScale,
              y: kitY,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              z-10
              w-[600px]
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* SOFT HALO */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -z-10
                h-[500px]
                w-[600px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#EAF7FF]/70
                blur-[80px]
              "
            />

            {/* COMPLETE MANOCITY KIT */}

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
                drop-shadow-[0_35px_55px_rgba(11,31,58,0.15)]
              "
            />
          </motion.div>

          {/* ===============================================
              SCROLL-TRIGGERED PRODUCT CARDS
              =============================================== */}

          {kitItems.map((item) => (
            <ScrollKitCard
              key={item.title}
              item={item}
              progress={smoothProgress}
            />
          ))}
        </div>

        {/* =================================================
            BOTTOM INDICATOR
            ================================================= */}

        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-50
            -translate-x-1/2
          "
        >
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
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SCROLL-TRIGGERED CARD
   ========================================================= */

function ScrollKitCard({
  item,
  progress,
}: {
  item: {
    title: string;
    description: string;
    image: string;
    x: number;
    y: number;
    start: number;
    end: number;
  };

  progress: MotionValue<number>;
}) {
  /* =====================================================
     POSITION

     Every card starts from the centre of the kit.
     As the user scrolls it moves outward.
     ===================================================== */

  const x = useTransform(
    progress,
    [item.start, item.end],
    [0, item.x]
  );

  const y = useTransform(
    progress,
    [item.start, item.end],
    [0, item.y]
  );

  /* =====================================================
     SCALE
     ===================================================== */

  const scale = useTransform(
    progress,
    [item.start, item.end],
    [0.72, 1]
  );

  /* =====================================================
     OPACITY
     ===================================================== */

  const opacity = useTransform(
    progress,
    [
      item.start,
      item.start + (item.end - item.start) * 0.35,
      item.end,
    ],
    [0, 1, 1]
  );

  /* =====================================================
     SMALL ROTATION DURING REVEAL
     ===================================================== */

  const rotate = useTransform(
    progress,
    [item.start, item.end],
    [-5, 0]
  );

  return (
    <motion.div
      style={{
        x,
        y,
        scale,
        opacity,
        rotate,
      }}
      whileHover={{
        scale: 1.04,
      }}
      className="
        absolute
        left-1/2
        top-1/2
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
      {/* ===============================================
          CARD IMAGE
          =============================================== */}

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

      {/* ===============================================
          CARD TITLE
          =============================================== */}

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

      {/* ===============================================
          CARD DESCRIPTION
          =============================================== */}

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
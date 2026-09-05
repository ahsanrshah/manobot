import Image from "next/image";
import BuildManoBot from "@/components/homepage/BuildManoBot";
import ExploreManoCity from "@/components/homepage/ExploreManoCity";
import ManoCityKit from "@/components/homepage/ManoCityKit";
import LearningPaths from "@/components/homepage/LearningPaths";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0B1F3A]">

      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/Manocity%20Map.png')",
        }}
      >

        {/* Cool light overlay */}
        <div className="absolute inset-0 bg-[#EAF7FF]/35" />

        {/* Blue-white gradient behind text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FCFF]/98 via-[#EAF7FF]/78 to-[#D9F3FF]/15" />

        {/* Subtle blue glow */}
        <div className="absolute -left-32 top-24 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[120px]" />

        {/* HEADER */}
        <header className="absolute left-0 top-0 z-30 flex w-full items-center justify-between px-8 py-6 md:px-12">

          {/* LOGO */}
          <div className="text-2xl font-extrabold tracking-tight text-[#0B1F3A]">
            Mano
            <span className="text-[#168BE8]">City</span>
          </div>

          <nav className="hidden gap-8 text-sm font-semibold text-[#16304F] md:flex">

            <a
              href="#story"
              className="transition duration-300 hover:text-[#168BE8]"
            >
              Story
            </a>

            <a
              href="#how"
              className="transition duration-300 hover:text-[#168BE8]"
            >
              How It Works
            </a>

            <a
              href="#schools"
              className="transition duration-300 hover:text-[#168BE8]"
            >
              For Schools
            </a>

            <a
              href="#shop"
              className="transition duration-300 hover:text-[#FF9D17]"
            >
              Shop
            </a>

          </nav>

        </header>

        {/* HERO CONTENT */}
        <div className="relative z-20 flex min-h-screen items-center px-6 pt-24 md:px-12">

          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1fr_0.9fr]">

            {/* LEFT SIDE */}
            <div className="relative z-20 max-w-xl">

              <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-[#168BE8]">
                Welcome to ManoCity
              </p>

              <h1 className="text-5xl font-extrabold leading-[1.02] tracking-tight text-[#0B1F3A] md:text-7xl">

                Where Code 

                <span className="block text-[#168BE8]">
                  Comes to Life
                </span>

              </h1>

              <p className="mt-7 max-w-lg text-lg leading-8 text-[#36516E]">
                Meet Mano. Build your ManoBot and write real code to help her
                travel through roads, junctions and destinations across ManoCity.
              </p>

              {/* BUTTONS */}
              <div className="mt-9 flex flex-wrap gap-4">

                <button className="rounded-full bg-[#0B1F3A] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(11,31,58,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#168BE8]">
                  Start the Adventure →
                </button>

                <button className="rounded-full border-2 border-[#168BE8]/30 bg-white/85 px-7 py-3.5 text-sm font-bold text-[#0B1F3A] shadow-sm backdrop-blur-md transition duration-300 hover:border-[#168BE8] hover:text-[#168BE8]">
                  Meet ManoBot
                </button>

              </div>

              {/* PRODUCT MESSAGE */}
              <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[#49647E]">

                <span className="h-2.5 w-2.5 rounded-full bg-[#FF9D17] shadow-[0_0_12px_rgba(255,157,23,0.6)]" />

                Physical robot + real city map + coding missions

              </div>

            </div>

            {/* MANOBOT */}
            <div className="relative hidden min-h-[620px] items-end justify-center md:flex">

              {/* Cyan glow behind ManoBot */}
              <div className="absolute bottom-16 h-[470px] w-[470px] rounded-full bg-[#74D7FF]/25 blur-[80px]" />

              {/* Orange accent glow */}
              <div className="absolute right-12 top-[28%] h-40 w-40 rounded-full bg-[#FFB347]/15 blur-[60px]" />

              {/* ManoBot image */}
              <Image
                src="/Manobot%20Hero%20section.png"
                alt="ManoBot"
                width={700}
                height={800}
                priority
                className="relative z-10 h-auto w-[430px] drop-shadow-[0_25px_40px_rgba(22,139,232,0.28)] lg:w-[500px]"
              />

              {/* Speech bubble */}
              <div className="absolute right-0 top-[18%] z-20 max-w-[220px] rounded-[28px] border border-[#168BE8]/20 bg-white/95 px-6 py-4 shadow-[0_15px_40px_rgba(22,139,232,0.18)] backdrop-blur-md">

                <p className="text-base font-bold leading-6 text-[#0B1F3A]">
                  Hi! I&apos;m Mano.
                  <br />
                  Ready to explore?
                </p>

                <div className="absolute -bottom-3 left-8 h-6 w-6 rotate-45 border-b border-r border-[#168BE8]/20 bg-white" />

              </div>

            </div>

          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2">

          <div className="flex flex-col items-center gap-2">

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#168BE8]">
              Explore ManoCity
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#168BE8]/25 bg-white/80 text-[#168BE8] shadow-sm backdrop-blur">
              ↓
            </div>

          </div>

        </div>

      </section>
      <BuildManoBot />
      <ExploreManoCity />
      <ManoCityKit />
      <LearningPaths />
    </main>
  );
}
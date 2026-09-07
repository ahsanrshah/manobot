"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Story",
    href: "/story",
  },
  {
    name: "How It Works",
    href: "/how-it-works",
  },
  {
    name: "Learning",
    href: "/learning",
  },
  {
    name: "For Schools",
    href: "/schools",
  },
  {
    name: "Shop",
    href: "/shop",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-[1000]
        w-full
        border-b
        border-[#168BE8]/10
        bg-white/90
        shadow-[0_4px_25px_rgba(11,31,58,0.05)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-[76px]
          max-w-[1440px]
          items-center
          justify-between
          px-6
          md:px-12
        "
      >
        {/* =====================================================
            LOGO
            ===================================================== */}

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="
            relative
            z-50
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

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <nav
          className="
            hidden
            items-center
            gap-1
            md:flex
          "
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative
                  rounded-full
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  transition
                  duration-300

                  ${
                    active
                      ? "bg-[#EAF7FF] text-[#168BE8]"
                      : "text-[#16304F] hover:bg-[#F4FAFE] hover:text-[#168BE8]"
                  }
                `}
              >
                {item.name}

                {/* ACTIVE DOT */}

                {active && (
                  <span
                    className="
                      absolute
                      -bottom-[2px]
                      left-1/2
                      h-1
                      w-1
                      -translate-x-1/2
                      rounded-full
                      bg-[#168BE8]
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* =====================================================
            DESKTOP CTA
            ===================================================== */}

        <div className="hidden md:block">
          <Link
            href="/learning"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#0B1F3A]
              px-5
              py-2.5
              text-sm
              font-bold
              text-white
              shadow-[0_8px_20px_rgba(11,31,58,0.16)]
              transition
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#168BE8]
              hover:shadow-[0_10px_25px_rgba(22,139,232,0.25)]
            "
          >
            Start Learning
            <span>→</span>
          </Link>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            relative
            z-50
            flex
            h-11
            w-11
            flex-col
            items-center
            justify-center
            gap-[5px]
            rounded-full
            border
            border-[#168BE8]/10
            bg-white
            md:hidden
          "
        >
          <span
            className={`
              h-[2px]
              w-5
              bg-[#0B1F3A]
              transition
              duration-300

              ${
                menuOpen
                  ? "translate-y-[7px] rotate-45"
                  : ""
              }
            `}
          />

          <span
            className={`
              h-[2px]
              w-5
              bg-[#0B1F3A]
              transition
              duration-300

              ${
                menuOpen
                  ? "opacity-0"
                  : ""
              }
            `}
          />

          <span
            className={`
              h-[2px]
              w-5
              bg-[#0B1F3A]
              transition
              duration-300

              ${
                menuOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : ""
              }
            `}
          />
        </button>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-[#168BE8]/10
          bg-white
          transition-all
          duration-300
          md:hidden

          ${
            menuOpen
              ? "max-h-[560px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <nav
          className="
            flex
            flex-col
            gap-2
            px-6
            pb-7
            pt-5
          "
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`
                  rounded-2xl
                  px-5
                  py-3.5
                  text-base
                  font-bold
                  transition

                  ${
                    active
                      ? "bg-[#EAF7FF] text-[#168BE8]"
                      : "text-[#16304F] hover:bg-[#F5FAFF] hover:text-[#168BE8]"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}

          {/* MOBILE CTA */}

          <Link
            href="/learning"
            onClick={() => setMenuOpen(false)}
            className="
              mt-3
              flex
              items-center
              justify-center
              rounded-full
              bg-[#0B1F3A]
              px-6
              py-4
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#168BE8]
            "
          >
            Start Learning →
          </Link>
        </nav>
      </div>
    </header>
  );
}
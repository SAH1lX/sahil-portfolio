"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <nav
  className={`
    fixed
    top-0
    left-0
    w-full

    z-[999]

    transition-all
    duration-500

    ${
      scrolled
        ? `
          bg-[#050816]/80
          backdrop-blur-3xl

          border-b
          border-violet-500/10

          shadow-[0_10px_50px_rgba(0,0,0,0.35)]

          py-4
        `
        : `
          bg-transparent

          py-5
        `
    }
  `}
>
  {/* TOP ACCENT LINE */}
  <div
    className="
      absolute
      top-0
      left-0

      w-full
      h-[2px]

      bg-gradient-to-r
      from-transparent
      via-fuchsia-500
      to-transparent

      opacity-90
    "
  />

  <div
    className="
      max-w-[1400px]

      mx-auto

      px-6
      sm:px-8
      lg:px-14

      flex
      items-center
      justify-between
    "
  >
       {/* LOGO */}
<a
  href="#home"
  className="
    group

    flex
    items-center

    text-xl
sm:text-2xl
md:text-3xl

    font-black

    tracking-[-0.05em]

    transition-all
    duration-300
  "
>
  <span
    className="
      text-white

      group-hover:text-gray-100

      transition-all
      duration-300
    "
  >
    Sahil
  </span>

  <span
    className="
      bg-gradient-to-r
      from-violet-400
      via-purple-400
      to-fuchsia-400

      bg-clip-text
      text-transparent

      drop-shadow-[0_0_15px_rgba(217,70,239,0.35)]

      group-hover:drop-shadow-[0_0_25px_rgba(217,70,239,0.6)]

      transition-all
      duration-300
    "
  >
    Bhatti
  </span>
</a>
<button
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="
    md:hidden
    text-white
    p-2
    rounded-xl
    border
    border-white/10
    bg-white/5
  "
>
  <Menu size={24} />
</button>

     {/* NAV LINKS */}
<div
  className="
    hidden
    md:flex

    items-center

    gap-10

    text-sm
    font-medium
  "
>
  <a
    href="#home"
    className="
      relative

      text-white/70

      hover:text-white

      transition-all
      duration-300

      hover:drop-shadow-[0_0_10px_rgba(217,70,239,0.45)]

      after:absolute
      after:left-0
      after:-bottom-1

      after:h-[2px]
      after:w-0

      after:bg-gradient-to-r
      after:from-violet-400
      after:to-fuchsia-400

      after:transition-all
      after:duration-300

      hover:after:w-full
    "
  >
    Home
  </a>

  <a
    href="#projects"
    className="
      relative

      text-white/70

      hover:text-violet-300

      transition-all
      duration-300

      hover:drop-shadow-[0_0_10px_rgba(217,70,239,0.45)]

      after:absolute
      after:left-0
      after:-bottom-1

      after:h-[2px]
      after:w-0

      after:bg-gradient-to-r
      after:from-violet-400
      after:to-fuchsia-400

      after:transition-all
      after:duration-300

      hover:after:w-full
    "
  >
    Projects
  </a>

  <a
    href="#about"
    className="
      relative

      text-white/70

      hover:text-violet-300

      transition-all
      duration-300

      hover:drop-shadow-[0_0_10px_rgba(217,70,239,0.45)]

      after:absolute
      after:left-0
      after:-bottom-1

      after:h-[2px]
      after:w-0

      after:bg-gradient-to-r
      after:from-violet-400
      after:to-fuchsia-400

      after:transition-all
      after:duration-300

      hover:after:w-full
    "
  >
    About
  </a>

  <a
    href="#contact"
    className="
      relative

      text-white/70

      hover:text-violet-300

      transition-all
      duration-300

      hover:drop-shadow-[0_0_10px_rgba(217,70,239,0.45)]

      after:absolute
      after:left-0
      after:-bottom-1

      after:h-[2px]
      after:w-0

      after:bg-gradient-to-r
      after:from-violet-400
      after:to-fuchsia-400

      after:transition-all
      after:duration-300

      hover:after:w-full
    "
  >
    Contact
  </a>
</div>

      </div>
   {mobileMenuOpen && (
  <div
    className="
      md:hidden

      absolute
      top-full
      left-0

      w-full

      bg-[#050816]/95
      backdrop-blur-xl

      border-b
      border-violet-500/10

      flex
      flex-col

      py-6
      px-6

      gap-6
    "
  >
    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
)}
    </nav>
  );
}
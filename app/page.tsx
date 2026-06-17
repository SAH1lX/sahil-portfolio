"use client";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SmoothScroll from "../components/SmoothScroll";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MouseGlow from "../components/MouseGlow";
import ScrollProgress from "../components/ScrollProgress";
import Loader from "../components/Loader";

export default function Home() {

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-x-hidden
        bg-[#f5f5f5]
        text-black
      "
    >

      {/* ===================================================== */}
      {/* BACKGROUND ATMOSPHERE */}
      {/* ===================================================== */}

      <div className="fixed inset-0 -z-30 overflow-hidden">

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

        {/* NOISE TEXTURE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            mix-blend-overlay
            bg-[url('https://grainy-gradients.vercel.app/noise.svg')]
          "
        />

        {/* TOP AMBIENT GLOW */}
        <div
          className="
            absolute
            top-[-15%]
            left-[10%]
            w-[800px]
            h-[800px]
            rounded-full
            bg-violet-300/40
            blur-[180px]
          "
        />

        {/* BOTTOM AMBIENT GLOW */}
        <div
          className="
            absolute
            bottom-[-15%]
            right-[5%]
            w-[800px]
            h-[800px]
            rounded-full
            bg-fuchsia-300/40
            blur-[180px]
          "
        />

      </div>

      {/* ===================================================== */}
      {/* INTERACTIVE ATMOSPHERE */}
      {/* ===================================================== */}

      <MouseGlow />

      <ScrollProgress />

      <Loader />

      <SmoothScroll />

      {/* ===================================================== */}
      {/* NAVBAR */}
      {/* ===================================================== */}

      <Navbar />

      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <div className="relative z-20">

        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />

        {/* EXPERIENCE */}
        <Experience />

        {/* PROJECTS */}
        <Projects />

        {/* CONTACT */}
        <Contact />

        {/* FOOTER */}
        <Footer />

      </div>

    </main>
  );
}
"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] relative overflow-hidden text-black flex items-center justify-center px-8">

      {/* Background Atmosphere */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200 rounded-full blur-[140px] opacity-50"></div>

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200 rounded-full blur-[140px] opacity-50"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          <h1 className="font-semibold text-lg tracking-wide">
            Sahil Bhatti
          </h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition">
              Home
            </a>

            <a href="#" className="hover:text-black transition">
              Projects
            </a>

            <a href="#" className="hover:text-black transition">
              About
            </a>

            <a href="#" className="hover:text-black transition">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4"
          >
            AI & Creative Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-7xl md:text-[9rem] font-black leading-[0.9] tracking-[-0.05em] mb-6"
          >
            Sahil <br /> Bhatti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8"
          >
            Building intelligent digital experiences with modern technologies,
            cinematic interactions, and creative engineering.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex gap-4"
          >

            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 bg-black text-white rounded-full"
            >
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Contact Me
            </motion.button>

          </motion.div>

        </motion.div>

        {/* Right Side Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-[500px] flex items-center justify-center"
        >

          <div className="relative flex items-center justify-center">

  {/* Outer Glow */}
  <motion.div
    animate={{
      scale: [1, 1.05, 1],
      rotate: [0, 10, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 10,
      ease: "easeInOut",
    }}
    className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-br from-blue-300 via-violet-400 to-purple-500 blur-3xl opacity-70"
  />

  {/* Glass Orb */}
  <motion.div
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    }}
    className="relative w-[320px] h-[320px] rounded-full border border-white/40 bg-white/10 backdrop-blur-2xl shadow-2xl"
  />

  {/* Small Floating Light */}
  <motion.div
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 8,
      ease: "easeInOut",
    }}
    className="absolute w-24 h-24 rounded-full bg-white/40 blur-2xl"
  />

</div>

        </motion.div>

      </section>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {

  return (
    <footer
  className="
    relative

    py-24
    px-6
    sm:px-8
    md:px-12
    lg:px-20

    bg-[#050816]

    overflow-hidden
  "
>

  {/* GRID */}
  <div
    className="
      absolute
      inset-0

      opacity-[0.03]

      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      [background-size:80px_80px]

      pointer-events-none
    "
  />

  <div
  className="
    relative

    max-w-[1200px]
    mx-auto

    rounded-[40px]

    border
    border-violet-500/15

    bg-white/[0.03]
    backdrop-blur-xl

    transition-all
    duration-500

    hover:border-violet-400/20
    hover:shadow-[0_0_120px_rgba(168,85,247,0.12)]

    overflow-hidden
  "
>

    {/* TOP GLOW */}
    <div
      className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[70%]
        h-[2px]

        bg-gradient-to-r
        from-transparent
        via-fuchsia-400
        to-transparent
      "
    />

    <div
      className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2

        w-[50%]
        h-[12px]

        bg-fuchsia-500/40

        blur-xl
      "
    />

    {/* CARD GLOW */}
    <div
      className="
        absolute
        inset-0
        pointer-events-none
      "
    >
      <div
        className="
          absolute
          top-1/2
          left-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[600px]
          h-[600px]

          rounded-full

          bg-violet-500/10

          blur-[150px]
        "
      />
    </div>

    {/* CONTENT */}
<div
  className="
    relative
    z-10

    grid
    md:grid-cols-3

    items-center

    gap-12

    p-10
    md:p-16
  "
>

  {/* LEFT */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="
      text-center
      md:text-left
    "
  >
    <h3
      className="
        text-3xl
        md:text-4xl

        font-black

        tracking-[-0.05em]

        text-white

        mb-6
      "
    >
      Sahil Bhatti
    </h3>

    <p
      className="
        text-gray-400

        text-sm
        md:text-base

        leading-relaxed

        max-w-sm
      "
    >
      Building cinematic digital experiences
      with modern frontend engineering and
      immersive UI systems.
    </p>
  </motion.div>

  {/* CENTER */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="
      text-center

      md:border-l
      md:border-r

      border-violet-500/20

      py-10
      px-8
    "
  >
   <p
  className="
    text-white

    text-xl
    md:text-2xl

    font-bold

    whitespace-nowrap

    drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]

    mb-4
  "
>
  © 2026 Sahil Bhatti
</p>

<div
  className="
    w-16
    h-px

    mx-auto
    mb-4

    bg-gradient-to-r
    from-transparent
    via-violet-400/70
    to-transparent
  "
/>

<p
  className="
    text-gray-200

    uppercase

    tracking-[0.35em]

    text-xs

    whitespace-nowrap
  "
>
  All Rights Reserved
</p>
  </motion.div>

  {/* RIGHT */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="
      flex
      flex-col
      items-center
    "
  >
    <p
      className="
        text-violet-300

        uppercase

        tracking-[0.3em]

        text-sm

        mb-8
      "
    >
      LET'S CONNECT
    </p>

    <div
      className="
        flex
        items-center
        justify-center

        gap-5
      "
    >

      {/* GITHUB */}
      <motion.a
        href="https://github.com/SAH1lX"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.12 }}
        className="
          flex
          items-center
          justify-center

          w-14
          h-14

          rounded-full

          border
          border-violet-500/20

          bg-white/[0.03]
          backdrop-blur-xl

          text-white

          shadow-[0_0_20px_rgba(168,85,247,0.10)]

          hover:border-violet-400/50
          hover:bg-violet-500/10
          hover:shadow-[0_0_50px_rgba(217,70,239,0.35)]

          transition-all
          duration-300
        "
      >
        <FaGithub size={28} />
      </motion.a>

      {/* LINKEDIN */}
      <motion.a
        href="https://www.linkedin.com/in/sahil-bhatti-094069359/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.12 }}
        className="
          flex
          items-center
          justify-center

          w-16
          h-16

          rounded-full

          border
          border-violet-500/20

          bg-white/[0.03]
          backdrop-blur-xl

          text-white

          shadow-[0_0_20px_rgba(168,85,247,0.10)]

          hover:border-violet-400/50
          hover:bg-violet-500/10
          hover:shadow-[0_0_40px_rgba(217,70,239,0.25)]

          transition-all
          duration-300
        "
      >
        <FaLinkedinIn size={24} />
      </motion.a>

      {/* EMAIL */}
      <motion.a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilbhatti9624@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -3, scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.12 }}
        className="
          flex
          items-center
          justify-center

          w-14
          h-14

          rounded-full

          border
          border-violet-500/20

          bg-white/[0.03]
          backdrop-blur-xl

          text-white

          shadow-[0_0_20px_rgba(168,85,247,0.10)]

          hover:border-violet-400/50
          hover:bg-violet-500/10
          hover:shadow-[0_0_40px_rgba(217,70,239,0.25)]

          transition-all
          duration-300
        "
      >
        <HiOutlineMail size={28} />
      </motion.a>

    </div>
  </motion.div>

</div>

    </div>
    </footer>
  );
}
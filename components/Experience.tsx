"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024",
    title: "Started CSE (AI & DS)",
    description:
      "Began my computer science journey and built strong programming fundamentals through academic coursework.",
  },

  {
    year: "2025",
    title: "Programming & Machine Learning",
    description:
      "Learned Java, Python, Data Structures and explored machine learning through academic projects.",
  },

  {
    year: "2026",
    title: "Frontend Development Journey",
    description:
      "Currently learning React, Next.js, TypeScript and building modern user interfaces.",
  },

  {
    year: "2028",
    title: "Graduation Goal",
    description:
      "Aspiring software engineer focused on creating impactful products and real-world solutions.",
  },
];

export default function Experience() {

  return (
    <section
  id="experience"
  className="
    relative
    overflow-hidden
    py-32
    bg-[#050816]
    text-white
  "
>
      {/* GRID */}
<div
  className="
    absolute inset-0
    opacity-[0.03]
    [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
    [background-size:80px_80px]
    pointer-events-none
  "
/>
<div
  className="
    absolute
    top-20
    right-0
    w-[700px]
    h-[700px]
    rounded-full
    bg-violet-600/10
    blur-[180px]
  "
/>

     <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

       {/* LABEL */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    flex
    items-center
    gap-3
    mb-8
  "
>
  <div
    className="
      w-2
      h-2
      rounded-full
      bg-violet-400
      shadow-[0px_0px_20px_rgba(139,92,246,1)]
    "
  />

  <span
    className="
      uppercase
      tracking-[0.35em]
      text-sm
      text-violet-300/80
    "
  >
    My Journey
  </span>
</motion.div>

       
  {/* HEADING */}
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="
    text-4xl
    sm:text-5xl
    md:text-6xl
    font-black
    leading-[0.92]
    tracking-[-0.06em]
    text-white
    max-w-4xl
    mb-12
  "
>
  Learning.

  <br />

  <span
    className="
      bg-gradient-to-r
      from-violet-400
      via-purple-300
      to-fuchsia-400
      bg-clip-text
      text-transparent
    "
  >
    Building. Growing.
  </span>
</motion.h2>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.1 }}
  className="
    text-lg
    text-white/60
    leading-relaxed
    max-w-2xl
    mb-20
  "
>
  My journey from learning programming fundamentals to
  exploring machine learning and modern frontend development.
</motion.p>
        {/* TIMELINE */}
       <div
  className="
    relative
    border-l
    border-violet-500/20
    ml-4
    space-y-20
  "
>

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className="
                relative
                pl-10
                max-w-4xl
              "
            >

              {/* DOT */}
<div
  className="
    absolute
    -left-[11px]
    top-2
    w-5
    h-5
    rounded-full
    bg-violet-400
    shadow-[0px_0px_25px_rgba(168,85,247,0.9)]
  "
/>
{/* YEAR */}
<p
  className="
    text-sm
    uppercase
    tracking-[0.25em]
    text-violet-300/70
    mb-4
    font-medium
  "
>
                {item.year}
              </p>
{/* CARD */}
<motion.div
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
  }}
  className="
    group
    relative
    overflow-hidden

    rounded-[32px]

    border
    border-white/10

    bg-white/5
    backdrop-blur-2xl

    p-8

    hover:border-violet-400/30
    hover:bg-white/[0.08]

    hover:shadow-[0px_0px_60px_rgba(139,92,246,0.18)]

    transition-all
    duration-500
  "
>

  <div
    className="
      absolute
      top-0
      left-0
      w-full
      h-[2px]
      bg-gradient-to-r
      from-violet-500
      via-fuchsia-400
      to-transparent
      opacity-70
    "
  />

  <h3
    className="
      text-2xl
      font-bold
      mb-4
      tracking-[-0.03em]
      text-white
    "
  >
    {item.title}
  </h3>

  <p
    className="
      text-white/70
      leading-relaxed
      text-lg
    "
  >
    {item.description}
  </p>

</motion.div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function About() {
const cards = [
  {
    icon: "⚡",
    title: "Focus",
    value: "Frontend Development",
    description:
      "Creating responsive, modern and user-friendly interfaces.",
  },

  {
    icon: "🚀",
    title: "Learning",
    value: "Next.js & React",
    description:
      "Exploring modern frontend architecture and motion design.",
  },

  {
    icon: "🎓",
    title: "Education",
    value: "CSE (AI & DS)",
    description:
      "5th Semester student at Marwadi University.",
  },

  {
    icon: "✦",
    title: "Goal",
    value: "Frontend Engineer",
    description:
      "Building impactful digital products with great user experiences.",
  },
];

  return (
   <section
  id="about"
  className="
    relative
    overflow-hidden
    py-32
    bg-[#050816]
    text-white
  "
>
 
      {/* TOP GLOW */}
<div
  className="
    absolute
    top-[-250px]
    left-1/2
    -translate-x-1/2
    w-[1200px]
    h-[500px]
    rounded-full
    bg-violet-600/10
    blur-[220px]
    pointer-events-none
  "
/>
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

      {/* GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[700px]
          w-[700px]
          rounded-full
          bg-violet-500/10
          blur-[160px]
          pointer-events-none
        "
      />
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-2 w-2 rounded-full bg-violet-400" />
          <span className="uppercase tracking-[0.4em] text-violet-300/80 text-sm">
            About Me
          </span>
        </motion.div>

        
{/* HEADING */}
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9 }}
  className="
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    font-black
    leading-[0.95]
    tracking-[-0.06em]
    text-white
    max-w-4xl
    mb-12
  "
>
 Building Modern



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
   Digital Products.
  </span>
</motion.h2>

        <div className="relative mb-20">

  <div
    className="
      w-36
      h-[2px]
      rounded-full
      bg-gradient-to-r
      from-violet-400
      via-fuchsia-400
      to-transparent
    "
  />

  <div
    className="
      absolute
      left-0
      top-0
      w-20
      h-[2px]
      bg-violet-400
      blur-md
    "
  />

</div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-20 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <p
  className="
    text-lg
    leading-relaxed
    text-white/75
    max-w-[600px]
  "
>
  I’m Sahil Bhatti, a 5th semester CSE (AI & DS)
  student at Marwadi University who enjoys creating
  modern, interactive, and visually engaging digital
  experiences. My primary interest lies in frontend
  development, where I can combine creativity,
  design, and technology to build interfaces that
  feel smooth and intuitive.
</p>

<p
  className="
    text-lg
    leading-relaxed
    text-white/60
    max-w-[600px]
  "
>
  Throughout my academic journey, I have worked with
  Python, Java, C Programming, Machine Learning,
  DBMS, Operating Systems, Computer Networks, and
  Data Structures. While exploring different areas
  of computer science, I discovered that designing
  and building user interfaces is what excites me
  the most. I enjoy turning ideas into experiences
  that people can see, interact with, and remember.
</p>

           {/* STATS */}
<div
  className="
    flex
    items-center
    gap-12
    pt-10
    flex-wrap
  "
>

  <div
    className="
      border-l-2
      border-violet-400
      pl-5
    "
  >
    <h3
      className="
        text-5xl
        font-black
        text-violet-400
        leading-none
      "
    >
      5+
    </h3>

    <p
      className="
        text-white/50
        mt-2
        uppercase
        tracking-wider
        text-sm
      "
    >
      ML Projects
    </p>
  </div>

  <div
    className="
      border-l-2
      border-violet-400
      pl-5
    "
  >
    <h3
      className="
        text-5xl
        font-black
        text-violet-400
        leading-none
      "
    >
      5th
    </h3>

    <p
      className="
        text-white/50
        mt-2
        uppercase
        tracking-wider
        text-sm
      "
    >
      Semester
    </p>
  </div>

  <div
    className="
      border-l-2
      border-violet-400
      pl-5
    "
  >
    <h3
      className="
        text-5xl
        font-black
        text-violet-400
        leading-none
      "
    >
      UI
    </h3>

    <p
      className="
        text-white/50
        mt-2
        uppercase
        tracking-wider
        text-sm
      "
    >
      Design Focus
    </p>
  </div>

</div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Python",
                "Machine Learning",
              ].map((tech) => (
                <div
                  key={tech}
                  className="
                    px-5 py-2.5
                    rounded-full
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    text-white/75
                  "
                >
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-5
  "
>
  {cards.map((card) => (
    <motion.div
      key={card.title}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
  rounded-[28px]
  border
  border-white/10
  bg-white/5
  backdrop-blur-2xl
  p-7

  hover:border-violet-400/40
  hover:bg-white/[0.08]
  hover:shadow-[0px_0px_60px_rgba(139,92,246,0.20)]

  transition-all
  duration-500
"
>
      <div
  className="
    text-2xl
    mb-5
  "
>
  {card.icon}
</div>
      <p
        className="
          text-violet-300/70
          text-xs
          uppercase
          tracking-[0.3em]
          mb-4
        "
      >
        {card.title}
      </p>

      <h3
        className="
          text-xl
          font-bold
          mb-3
        "
      >
        {card.value}
      </h3>

      <p
        className="
          text-sm
          text-white/60
          leading-relaxed
        "
      >
        {card.description}
      </p>
    </motion.div>
  ))}
</motion.div>
        </div>
      </div>
    </section>
  );
}


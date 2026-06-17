"use client";

import { motion } from "framer-motion";

const skillCards = [
  {
    icon: "⚡",
    title: "Frontend Development",
     description:
      "Building responsive, modern and interactive user experiences.",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },

  {
    icon: "💻",
    title: "Programming Fundamentals",
    description:
      "Strong academic foundation in computer science concepts.",
    skills: [
      "Python",
      "Java",
      "C",
      
      "DBMS",
      "Data Structures",
    ],
  },

  {
    icon: "🤖",
    title: "Machine Learning Projects",
    description:
      "Exploring intelligent systems through academic projects.",
    skills: [
      "Machine Learning",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "ML Projects",
    ],
  },

  {
    icon: "🚀",
    title: "Current Focus",
    description:
      "Continuously improving frontend development skills.",
    skills: [
      "TypeScript",
      "Advanced React",
      "UI Engineering",
      "Frontend Architecture",
    ],
  },

  {
    icon: "🛠",
    title: "Tools I Use",
    description:
      "Tools that support my daily development workflow.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];
export default function Skills() {

  return (
    <section
  id="skills"
  className="
    relative
    py-20
    px-6
    sm:px-8
    md:px-12
    lg:px-20
    overflow-hidden
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

<div
  className="
    absolute
    bottom-0
    left-0
    w-[500px]
    h-[500px]
    rounded-full
    bg-fuchsia-600/10
    blur-[180px]
  "
/>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
{/* LABEL */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    flex
    items-center
    gap-3
    text-sm
    uppercase
    tracking-[0.35em]
    text-violet-300/80
    mb-8
  "
>
  <span
    className="
      w-2
      h-2
      rounded-full
      bg-violet-400
      shadow-[0px_0px_20px_rgba(139,92,246,1)]
    "
  />

  Skills & Technologies
</motion.p>

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
    lg:text-7xl
    font-black
    leading-[0.9]
    tracking-[-0.07em]
    text-white
    max-w-5xl
    mb-8
  "
>
  Frontend Development

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
    & AI Engineering
  </span>
</motion.h2>
<div
  className="
    absolute
    top-24
    left-20
    w-[500px]
    h-[500px]
    rounded-full
    bg-violet-600/10
    blur-[140px]
    pointer-events-none
  "
/>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1.1 }}
  className="
    text-lg
    text-white/60
    max-w-2xl
    leading-relaxed
    mb-12
  "
>
  As a CSE (AI & DS) student, I enjoy building modern
  frontend experiences while exploring machine learning,
  software engineering, and creative user interfaces.
</motion.p>
{/* GRID */}
<div
  className="
    grid
    md:grid-cols-2
    gap-6
  "
>

         {skillCards.map((card, index) => (

            <motion.div
            
  key={card.title}
  initial={{
    opacity: 0,
    y: 40,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  whileHover={{
  y: -8,
  scale: 1.02,
 }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.8,
  }}
  
  className="
group
relative
overflow-hidden

rounded-[36px]

border
border-white/[0.08]

bg-gradient-to-br
from-white/[0.06]
to-white/[0.03]

backdrop-blur-3xl

p-8

min-h-[200px]

hover:-translate-y-2
hover:scale-[1.02]

hover:border-violet-400/30

hover:shadow-[0px_0px_80px_rgba(168,85,247,0.35)]

transition-all
duration-500
ease-out
"
>
  <span
  className="
    absolute
    top-5
    right-5
    text-5xl
    font-black
    text-white/[0.03]
    pointer-events-none
  "
>
  {String(index + 1).padStart(2, "0")}
</span>
  <div
  className="
    absolute
    top-0
    left-0
    h-[2px]
    w-full
    bg-gradient-to-r
    from-violet-500
    via-fuchsia-400
    to-transparent
    opacity-80
  "
/>
{/* HOVER ATMOSPHERE */}
<div
  className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-500

    bg-gradient-to-br
    from-violet-500/10
    via-transparent
    to-fuchsia-500/10
  "
/>
<div
  className="
    absolute
    -top-20
    -right-20
    w-40
    h-40
    rounded-full
    bg-violet-500/10
    blur-3xl
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-700
  "
/>
{/* GLOW ORB */}
<div
  className="
    absolute
    -top-20
    -right-20

    w-40
    h-40

    rounded-full

    bg-violet-500/10

    blur-3xl

    opacity-0
    group-hover:opacity-100

    transition-all
    duration-700
  "
/>

{/* TITLE */}
<h3
  className="
    relative
    z-10

    text-3xl
    font-bold

    tracking-[-0.04em]

    text-white

    mb-4
  "
>
                {card.title}
              </h3>
              <p
  className="
    relative
    z-10

    text-white/60

    leading-relaxed

    mb-6
  "
>
  {card.description}
</p>

<div
  className="
    relative
    z-10

    flex
    flex-wrap
    gap-3
  "
>
  {card.skills.map((skill) => (
    <span
      key={skill}
      className="
        px-3
        py-2

        rounded-full

        border
        border-white/10

        bg-white/5

        text-sm
        text-white/70
      "
    >
      {skill}
    </span>
  ))}
</div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
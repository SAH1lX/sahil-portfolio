"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "AI Temperature Dashboard",

    description:
      "Machine learning powered weather prediction dashboard featuring interactive controls, cinematic visuals, responsive analytics, and real-time AI forecasting.",

    tech: "Python • Scikit-learn • Streamlit • Pandas",

    image: "/projects/temperature-dashboard.png",

    link: "https://ai-temperature-dashboard.streamlit.app",
  },

  {
    title: "AI Chatbot Platform",

    description:
      "Currently building a futuristic AI chatbot experience focused on immersive conversations, premium UI systems, and modern AI interactions.",

    tech: "Coming Soon",

    image: "/projects/chatbot-ui.png",

    link: "#",
  },

  {
    title: "Exploring New Experiences",

    description:
      "Experimenting with cinematic frontend systems, advanced motion design, AI-powered products, and next-generation digital experiences.",

    tech: "In Exploration",

    image: "/projects/exploration.png",

    link: "#",
  },
];

export default function Projects() {
  return (
    <section
  id="projects"
  className="
    relative
    overflow-hidden
    py-32
    px-6
    sm:px-8
    md:px-12
    lg:px-20

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
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* LABEL */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    text-sm
    uppercase
    tracking-[0.35em]
    text-violet-300/80
    mb-6
  "
>
  • SELECTED PROJECTS
</motion.p>
        {/* HEADING */}
        <motion.h2
          initial={{
  opacity: 0,
  y: 50,
}}

whileInView={{
  opacity: 1,
  y: 0,
}}

transition={{
  duration: 1,
  ease: "easeOut",
}}

viewport={{
  once: true,
}}
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
  From Machine Learning

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
    To Modern Web Experiences.
  </span>
</motion.h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-7 items-start">

          {projects.map((project, index) => (
<a
  key={project.title}
  href={index === 0 ? project.link : undefined}
  target={index === 0 ? "_blank" : undefined}
  rel={index === 0 ? "noopener noreferrer" : undefined}
  className={`
  group
  relative
  overflow-hidden

  rounded-[32px]

  border
  border-white/10

  bg-white/5
  backdrop-blur-2xl

  will-change-transform
  transform-gpu

  transition-all
  duration-500

  hover:-translate-y-2
  hover:scale-[1.02]

  hover:border-violet-400/30
  hover:bg-white/[0.08]
  hover:shadow-[0px_0px_60px_rgba(139,92,246,0.18)]

  ${
    index === 0
      ? "md:scale-[1.015] cursor-pointer"
      : "cursor-default"
  }
`}
>

<div className="flex flex-wrap gap-2 mt-5">
  {[].map((tech) => (
    <span
      key={tech}
      className="
        px-3
        py-1
        rounded-full
        text-xs
        border
        border-violet-500/20
        bg-violet-500/5
        text-violet-200
      "
    >
      {tech}
    </span>
  ))}
</div>
 
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
    opacity-80
  "
/>

              {/* IMAGE */}
              <div className="relative h-[250px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    object-center
                    transform-gpu
                    transition-transform
                    duration-500
                    ease-out
                    scale-100
                    group-hover:scale-[1.06]
                  "
                />

              {/* PREMIUM GLOW */}
<div
  className="
    absolute
    -top-20
    -right-20
    w-72
    h-72
    rounded-full
    bg-violet-500/20
    blur-3xl
    opacity-0
    group-hover:opacity-100
    transition-all
    duration-700
  "
/>

               {/* PREMIUM IMAGE OVERLAY */}
{/* CINEMATIC OVERLAY */}
<div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-[#050816]
    via-[#050816]/20
    to-transparent
    opacity-60
    group-hover:opacity-80
    transition-all
    duration-500
  "
/>

               {/* HOVER GLOW */}
<div
  className="
    absolute
    inset-0
    opacity-0
    group-hover:opacity-100
    transition-opacity
    duration-500
    bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_50%)]
  "
/>

              </div>

              {/* CONTENT */}
              <div
                className="
                  p-8
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              >

                <h3
                  className="
                    text-[30px]
                    font-black
                    tracking-[-0.05em]
                    leading-tight
                    mb-4
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    leading-[1.8]
                    text-[15px]
                    mb-6
                  "
                >
                  {project.description}
                </p>
                <div className="flex items-center justify-between gap-4 mt-8">

                  <p
                    className="
                      text-sm
                      text-gray-500
                      leading-relaxed
                      max-w-[70%]
                    "
                  >
                    {project.tech}
                  </p>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      shrink-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
<span
  className={`
  text-sm
  font-semibold
  whitespace-nowrap
  ${
    index === 0
      ? "text-violet-200"
      : "text-gray-400"
  }
`}
>
  Live Demo
</span>

                    <div
  className="
    flex
    items-center
    justify-center

    w-10
    h-10

    rounded-full

    bg-gradient-to-r
    from-violet-500
    to-fuchsia-500

    text-white

    shadow-[0px_0px_20px_rgba(168,85,247,0.35)]

    transition-all
    duration-300

    group-hover:scale-110
  "
>
                      →
                    </div>

                  </div>

                </div>

              </div>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}
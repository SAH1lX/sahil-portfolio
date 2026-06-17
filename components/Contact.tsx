"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
console.log(Icons);
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


export default function Contact() {

  return (
 <section
  id="contact"
  className="
    relative
    py-40
    px-6
    sm:px-8
    md:px-12
    lg:px-20

    overflow-hidden

    bg-[#050816]
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



{/* CONTACT CARD */}
<div

 

 className="

  relative



  max-w-[1000px]

  mx-auto



  flex

  flex-col

  justify-center



  rounded-[40px]



  border

  border-violet-500/15



  bg-white/[0.03]

  backdrop-blur-xl



  p-10

  md:p-20



 shadow-[0_0_80px_rgba(168,85,247,0.08)]

hover:shadow-[0_0_120px_rgba(168,85,247,0.12)]

transition-all
duration-300



  overflow-hidden

"

>
  <div
  className="
    absolute
    inset-[1px]
    rounded-[39px]
    border
    border-white/[0.04]
    pointer-events-none
  "
/>


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
{/* INNER PREMIUM BORDER */}
<div
  className="
    absolute
    inset-[1px]

    rounded-[39px]

    border
    border-white/[0.04]

    pointer-events-none
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

        bg-violet-500/15

        blur-[140px]
      "
    />

    <div
      className="
        absolute
        inset-0

        bg-gradient-to-br
        from-violet-500/5
        via-transparent
        to-fuchsia-500/5
      "
    />
  </div>


 <div
  className="
    relative
    z-10

    max-w-3xl
    mx-auto

    flex
    flex-col
    items-center

    text-center
  "
>

  </div>
{/* SMALL LABEL */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    inline-flex
    items-center
    gap-2

    px-4
    py-2

    rounded-full

    border
    border-violet-500/20

    bg-violet-500/5

    text-violet-300
    text-xs
    uppercase
    tracking-[0.25em]

    mb-8

    mx-auto
  "
>
  <span
    className="
      w-2
      h-2
      rounded-full
      bg-violet-400
      animate-pulse
    "
  />

  Let's Contact
</motion.div>

{/* HEADING */}
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="
    text-center

    text-5xl
    sm:text-6xl
    md:text-7xl

    font-black

    leading-[0.9]
    tracking-[-0.05em]

    text-white

    mb-10
  "
>
  Available For

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
    Internships & Freelance.
  </span>
</motion.h2>
{/* DESCRIPTION */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="
    text-lg
    md:text-xl

    text-gray-300

    max-w-3xl
    mx-auto

    text-center

    leading-relaxed

    mb-14
  "
>
  Building modern interfaces, AI-powered experiences,
  and immersive digital products.

  <br />
  <br />

  Open to internships, freelance opportunities,
  and exciting collaborations.
</motion.p>

{/* STATUS BADGE */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="
    mb-12
    flex
    justify-center
  "
>
  <div
    className="
      inline-flex
      items-center
      gap-3

      px-5
      py-3

      rounded-full

      border
      border-violet-500/20

      bg-violet-500/5

      text-violet-200
      text-sm
    "
  >
    <span
      className="
        w-2
        h-2
        rounded-full
        bg-green-400
        animate-pulse
      "
    />

    Open for opportunities
  </div>
</motion.div>

{/* CONTACT ACTIONS */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="
    flex
    flex-wrap
    justify-center
    items-center
    gap-5
    mt-4
  "
>
   {/* Email */}
<motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=sahilbhatti9624@gmail.com"
target="_blank"
rel="noopener noreferrer"
whileHover={{
  scale: 1.04,
  y: -4,
}}
whileTap={{
  scale: 0.98,
}}
transition={{
  duration: 0.12,
}}
  className="
    group
    relative

    flex
    items-center
    justify-center
    gap-3

    min-w-[190px]

    px-8
    py-4

    rounded-full

    border
    border-violet-400/30

    bg-gradient-to-r
    from-violet-500
    via-purple-500
    to-fuchsia-500

    text-white
    font-semibold

    shadow-[0_12px_35px_rgba(168,85,247,0.35)]

    hover:shadow-[0_25px_70px_rgba(217,70,239,0.6)]

    transition-all
    duration-200

    overflow-hidden
  "
>
  {/* SHINE EFFECT */}
  <div
    className="
      absolute
      inset-y-0
      -left-[120%]
      w-[80%]

      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent

      skew-x-[-20deg]

      transition-all
      duration-700

      group-hover:left-[140%]
    "
  />

  {/* ICON */}
  <span className="relative z-10">
    <HiOutlineMail size={22} />
  </span>

  {/* TEXT */}
  <span className="relative z-10">
    Email Me
  </span>
</motion.a>
  {/* GitHub */}
<motion.a
  href="https://github.com/SAH1lX"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.04,
    y: -4,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    duration: 0.12,
  }}

  className="
    group
    relative

    flex
    items-center
    justify-center
    gap-5

    min-w-[190px]

    px-8
    py-4

    rounded-full

    border
    border-violet-400/30

    bg-white/[0.03]
    backdrop-blur-xl

    text-white
    font-medium

    shadow-[0_12px_35px_rgba(168,85,247,0.15)]

    hover:bg-violet-500/15
    hover:border-violet-400/60
    hover:shadow-[0_25px_70px_rgba(168,85,247,0.35)]

    transition-all
    duration-200

    overflow-hidden
  "
>
  {/* SHINE EFFECT */}
  <div
    className="
      absolute
      inset-y-0
      -left-[120%]
      w-[80%]

      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent

      skew-x-[-20deg]

      transition-all
      duration-700

      group-hover:left-[140%]
    "
  />

  {/* ICON */}
  <span className="relative z-10">
    <FaGithub size={22} />
  </span>

  {/* TEXT */}
  <span className="relative z-10">
    GitHub
  </span>
</motion.a>
{/* LinkedIn */}
<motion.a
  href="https://www.linkedin.com/in/sahil-bhatti-094069359/"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.04,
    y: -4,
  }}
  whileTap={{
    scale: 0.98,
  }}
  transition={{
    duration: 0.12,
  }}
  className="
    group
    relative

    flex
    items-center
    justify-center
    gap-3

    min-w-[190px]

    px-8
    py-4

    rounded-full

    border
    border-violet-400/30

    bg-white/[0.03]
    backdrop-blur-xl

    text-white
    font-medium

    shadow-[0_12px_35px_rgba(168,85,247,0.15)]

    hover:bg-violet-500/15
    hover:border-violet-400/60
    hover:shadow-[0_25px_70px_rgba(168,85,247,0.35)]

    transition-all
    duration-200

    overflow-hidden
  "
>
  {/* SHINE EFFECT */}
  <div
    className="
      absolute
      inset-y-0
      -left-[120%]
      w-[80%]

      bg-gradient-to-r
      from-transparent
      via-white/10
      to-transparent

      skew-x-[-20deg]

      transition-all
      duration-700

      group-hover:left-[140%]
    "
  />

  {/* ICON */}
  <span className="relative z-10">
    <FaLinkedinIn size={22} />
  </span>

  {/* TEXT */}
  <span className="relative z-10">
    LinkedIn
  </span>
</motion.a>

</motion.div> 
<div
  className="
    mt-12

    flex
    flex-col
    md:flex-row

    items-center
    justify-center

    gap-6

    text-sm
    text-gray-400
  "
>
  
</div>

</div> {/* max-w-6xl wrapper */}

</section>
  );
}
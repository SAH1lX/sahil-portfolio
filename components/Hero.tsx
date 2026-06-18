"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

import MagneticButton from "./MagneticButton";

export default function Hero() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateX = useTransform(
    smoothY,
    [-300, 300],
    [18, -18]
  );

  const rotateY = useTransform(
    smoothX,
    [-300, 300],
    [-18, 18]
  );

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const { clientX, clientY } = e;

    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);

  };

  return (
<section
  onMouseMove={handleMouseMove}
  id="home"
  className="
    relative
    overflow-hidden
    min-h-screen
    pt-20
    bg-[#050816]
    text-white
  "
>
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* MAIN GLOW */}
        <div
          className="
            absolute
            top-[-10%]
            right-[-5%]
            w-[850px]
            h-[850px]
            rounded-full
            bg-violet-600/20
            blur-[180px]
          "
        />

       {/* SECOND GLOW */}
<div
  className="
    absolute
    bottom-[-35%]
    left-1/2
    -translate-x-1/2
    w-[1200px]
    h-[700px]
    rounded-full
    bg-violet-600/15
    blur-[220px]
  "
/>

        {/* GRID */}
<div
  className="
    absolute
    inset-0
    opacity-[0.04]
    [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
    [background-size:80px_80px]
  "
/>


{/* FLOATING PARTICLES */}
<div className="absolute inset-0 overflow-hidden">

  <div
    className="
      absolute
      top-[18%]
      left-[12%]
      w-2
      h-2
      rounded-full
      bg-violet-400
      shadow-[0_0_20px_rgba(167,139,250,1)]
      animate-pulse
    "
  />

  <div
    className="
      absolute
      top-[30%]
      right-[18%]
      w-3
      h-3
      rounded-full
      bg-fuchsia-400
      shadow-[0_0_25px_rgba(217,70,239,1)]
      animate-pulse
    "
  />

  <div
    className="
      absolute
      bottom-[22%]
      left-[40%]
      w-2
      h-2
      rounded-full
      bg-violet-300
      shadow-[0_0_20px_rgba(196,181,253,1)]
      animate-ping
    "
  />

  <div
    className="
      absolute
      bottom-[18%]
      right-[28%]
      w-2.5
      h-2.5
      rounded-full
      bg-fuchsia-300
      shadow-[0_0_20px_rgba(244,114,182,1)]
      animate-pulse
    "
  />

</div>

</div>

      {/* CONTENT */}
      <div
        className="
          relative
z-10
max-w-[1320px]
mx-auto
min-h-screen
grid
md:grid-cols-2
gap-2
items-center
px-6
sm:px-8
md:px-12
lg:px-16
pb-10
        "
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
          }}
        >

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
           transition={{
            duration: 0.3,
            }}
            className="
              flex
              items-center
              gap-3
              mb-7
            "
          >

            <div
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-violet-400
                shadow-[0px_0px_20px_rgba(139,92,246,1)]
              "
            />

            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm
                text-violet-200/70
              "
            >
              AI & Creative Developer
            </p>

          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
            className="
              text-[5rem]
              sm:text-[6rem]
              md:text-[7rem]
              lg:text-[7.5rem]
              font-black
              tracking-[-0.07em]
              leading-[0.88]
            "
          >
            Sahil

            <br />

            <span
              className="
                bg-gradient-to-r
                from-violet-300
                via-violet-400
                to-fuchsia-300
                bg-clip-text
                text-transparent
              "
            >
              Bhatti
            </span>

          </motion.h1>

         {/* DESCRIPTION */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.5,
    duration: 1,
  }}
  className="
    mt-8
    max-w-[620px]
    text-[20px]
    leading-[1.8]
    text-white/72
    font-light
    tracking-[0.2px]
  "
>

  Building intelligent digital experiences with
  <span className="text-violet-300 font-normal">
    {" "}cinematic interactions
  </span>,
  futuristic interfaces, and
  <span className="text-fuchsia-300 font-normal">
    {" "}modern creative engineering
  </span>.

</motion.p>
        
        
     

         {/* BUTTONS */}
<div
  className="
    flex
    flex-wrap
    items-center
    gap-5
    mt-10
  "
>

  {/* BUTTON 1 */}
  <MagneticButton>

    <a
      href="#projects"
      className="
        group
        relative
        inline-flex
        items-center
        gap-3
        overflow-hidden
        rounded-full
        px-8
        py-4
        bg-gradient-to-r
        from-violet-600
        via-violet-500
        to-fuchsia-500
        text-white
        font-medium
        transition-all
        duration-500
        ease-out
        hover:scale-[1.05]
        hover:-translate-y-1
        shadow-[0px_20px_60px_rgba(139,92,246,0.45)]
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-white/10
        "
      />

      <span className="relative z-10">
        View Projects
      </span>

      <span
        className="
          relative
          z-10
          transition-transform
          duration-500
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      >
        ↗
      </span>

    </a>

  </MagneticButton>

  {/* BUTTON 2 */}
  <MagneticButton>

    <a
      href="#contact"
      className="
        group
        relative
        inline-flex
        items-center
        gap-3
        overflow-hidden
        rounded-full
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        px-8
        py-4
        text-white
        font-medium
        transition-all
        duration-500
        ease-out
        hover:bg-white/10
        hover:border-violet-400/20
        hover:shadow-[0px_0px_30px_rgba(139,92,246,0.18)]
        hover:scale-[1.05]
        hover:-translate-y-1
      "
    >

      <span className="relative z-10">
        Contact Me
      </span>

      <span
        className="
          relative
          z-10
          transition-transform
          duration-500
          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      >
        
      </span>

    </a>

  </MagneticButton>

</div>

</motion.div>

        {/* RIGHT SIDE */}
       {/* RIGHT SIDE */}
<div
  className="
  relative
  flex
  items-center
  justify-center
  h-[600px]
"
>

 {/* MAIN GLOW */}
<div
  className="
    absolute
    w-[520px]
    h-[520px]
    rounded-full
    bg-violet-500/20
    blur-[120px]
  "
/>

{/* SECONDARY GLOW */}
<div
  className="
    absolute
    right-[10%]
    top-[20%]
    w-[500px]
    h-[500px]
    rounded-full
    bg-fuchsia-500/10
    blur-[140px]
  "
/>
{/* MOVING SPOTLIGHT */}
<motion.div
  animate={{
    x: [0, 50, 0],
    y: [0, -40, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 12,
    ease: "easeInOut",
  }}
  className="
    absolute
    right-[18%]
    top-[22%]
    w-[380px]
    h-[380px]
    rounded-full
    bg-violet-400/10
    blur-[120px]
  "
/>
 {/* ORBIT */}
<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    repeat: Infinity,
    duration: 30,
    ease: "linear",
  }}
  className="
    absolute
    w-[630px]
    h-[630px]
    rounded-full
    border
    border-violet-400/10
  "
>

  <div
    className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-4
      h-4
      rounded-full
      bg-violet-400
      shadow-[0px_0px_30px_rgba(139,92,246,1)]
    "
  />

</motion.div>

{/* SECOND ORBIT */}
<motion.div
  animate={{
    rotate: -360,
  }}
  transition={{
    repeat: Infinity,
    duration: 22,
    ease: "linear",
  }}
  className="
    absolute
    w-[480px]
    h-[480px]
    rounded-full
    border
    border-dashed
    border-fuchsia-400/10
  "
>

  <div
    className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      w-3
      h-3
      rounded-full
      bg-fuchsia-400
      shadow-[0px_0px_25px_rgba(217,70,239,1)]
    "
  />

</motion.div>

  {/* CENTER CARD */}
  <motion.div
  style={{
    rotateX,
    rotateY,
    transformPerspective: 1200,
  }}
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
  }}
  className="
    relative
    z-20
    w-[250px]
    rounded-[32px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-2xl
    p-7
    shadow-[0px_0px_60px_rgba(139,92,246,0.22)]
  "
>
  
    {/* GRADIENT BORDER LIGHT */}
<div
  className="
    absolute
    inset-0
    rounded-[32px]
    bg-gradient-to-br
    from-violet-400/20
    via-transparent
    to-fuchsia-400/20
    opacity-60
    pointer-events-none
  "
/>

    <div
      className="
        flex
        items-center
        justify-between
        mb-7
      "
    >

      <p
        className="
          text-violet-300
          uppercase
          tracking-[0.25em]
          text-xs
        "
      >
        AI SYSTEMS
      </p>

      <div
        className="
          w-12
          h-12
          rounded-2xl
          bg-violet-500/20
          flex
          items-center
          justify-center
          text-xl
        "
      >
        ✦
      </div>

    </div>

    <h3
      className="
        text-3xl
        leading-tight
        font-bold
      "
    >
      Building
      intelligent
      solutions for
      the future.
    </h3>

    <div className="mt-10">

      <div
        className="
          h-2
          rounded-full
          bg-white/10
          overflow-hidden
        "
      >

        <motion.div
          initial={{
            width: "0%",
          }}
          animate={{
            width: "92%",
          }}
          transition={{
            duration: 2,
          }}
          className="
            h-full
            rounded-full
            bg-gradient-to-r
            from-violet-400
            to-fuchsia-400
          "
        />

      </div>

      <div
        className="
          flex
          justify-between
          mt-3
          text-sm
          text-white/60
        "
      >
        <span>System Intelligence</span>
        <span>92%</span>
      </div>

    </div>

  </motion.div>

 {/* CARD 1 */}
<motion.div
  whileHover={{
    y: -10,
    scale: 1.04,
  }}
  animate={{
    y: [0, -10, 0],
    rotate: [-8, -5, -8],
  }}
  transition={{
    repeat: Infinity,
    duration: 7,
  }}
  className="
    absolute
    top-[12%]
    left-[10%]
    w-[160px]
    rounded-[24px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-5
    transition-all
    duration-500
    hover:border-violet-400/20
    hover:bg-white/10
    hover:shadow-[0px_0px_40px_rgba(139,92,246,0.18)]
  "
>

  <div className="text-2xl mb-3">
    ⚡
  </div>

  <p
    className="
      text-violet-300
      uppercase
      tracking-[0.2em]
      text-[10px]
      mb-3
    "
  >
    Motion UI
  </p>

  <p
    className="
      text-sm
      text-white/80
      leading-relaxed
    "
  >
    Smooth interactions and premium animations.
  </p>

</motion.div>

{/* CARD 2 */}
<motion.div
  whileHover={{
    y: -10,
    scale: 1.04,
  }}
  animate={{
    y: [0, 10, 0],
    rotate: [8, 5, 8],
  }}
  transition={{
    repeat: Infinity,
    duration: 8,
  }}
  className="
    absolute
    top-[14%]
    right-[10%]
    w-[160px]
    rounded-[24px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-5
    transition-all
    duration-500
    hover:border-violet-400/20
    hover:bg-white/10
    hover:shadow-[0px_0px_40px_rgba(139,92,246,0.18)]
  "
>

  <div className="text-2xl mb-3">
    ✧
  </div>

  <p
    className="
      text-violet-300
      uppercase
      tracking-[0.2em]
      text-[10px]
      mb-3
    "
  >
    Full Stack
  </p>

  <p
    className="
      text-sm
      text-white/80
      leading-relaxed
    "
  >
    Modern scalable development architecture.
  </p>

</motion.div>

{/* CARD 3 */}
<motion.div
  whileHover={{
    y: -10,
    scale: 1.04,
  }}
  animate={{
    y: [0, -10, 0],
    rotate: [7, 4, 7],
  }}
  transition={{
    repeat: Infinity,
    duration: 9,
  }}
  className="
    absolute
    bottom-[3%]
    right-[10%]
    w-[180px]
    rounded-[24px]
    border
    border-white/10
    bg-white/5
    backdrop-blur-xl
    p-5
    transition-all
    duration-500
    hover:border-violet-400/20
    hover:bg-white/10
    hover:shadow-[0px_0px_40px_rgba(139,92,246,0.18)]
  "
>

  <div className="text-2xl mb-3">
    ✎
  </div>

  <p
    className="
      text-violet-300
      uppercase
      tracking-[0.2em]
      text-[10px]
      mb-3
    "
  >
    Creative Engineering
  </p>

  <p
    className="
      text-sm
      text-white/80
      leading-relaxed
    "
  >
    Blending design and technology into experiences.
  </p>

</motion.div>

</div>

      </div>

    </section>
  );
}
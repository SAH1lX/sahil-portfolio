"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
  setLoading(false);
}, 2400);

    return () => clearTimeout(timer);

  }, []);

  return (
   <AnimatePresence>
  {loading && (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
      }}
          className="
  fixed
  inset-0

  z-[99999]

  overflow-hidden

  bg-[#050816]

  flex
  items-center
  justify-center
"
        >

          {/* MAIN AMBIENT GLOW */}
        <motion.div
  animate={{
    opacity: [0.2, 0.4, 0.2],
  }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
  }}
  className="
  absolute

  w-[500px]
  h-[500px]

  md:w-[900px]
  md:h-[900px]

  rounded-full

  bg-gradient-to-r
  from-violet-600/20
  via-purple-500/20
  to-fuchsia-500/20

  blur-[120px]
  md:blur-[250px]
"
/>
           

          {/* SECONDARY GLOW */}
<motion.div
  animate={{
  opacity: [0.12, 0.25, 0.12],
}}
  transition={{
    repeat: Infinity,
    duration: 8,
    ease: "easeInOut",
  }}
  className="
  absolute

  w-[350px]
  h-[350px]

  md:w-[650px]
  md:h-[650px]

  rounded-full

  bg-gradient-to-r
  from-fuchsia-500/15
  via-purple-500/15
  to-violet-500/15

  blur-[100px]
  md:blur-[220px]
"
/>

          {/* NOISE TEXTURE */}
<div
  className="
    absolute
    inset-0

    opacity-[0.03]

    [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)]
    [background-size:24px_24px]

    pointer-events-none
  "
/>

          {/* CONTENT */}
          <div
  className="
    relative
    z-10

    text-center

    flex
    flex-col
    items-center
    justify-center
  "
>

            {/* TOP LABEL */}
            {/* TOP LABEL */}
<motion.p
  initial={{
    opacity: 0,
    y: 20,
    letterSpacing: "0.4em",
  }}
  animate={{
    opacity: 1,
    y: 0,
    letterSpacing: "0.28em",
  }}
  transition={{
    duration: 0.9,
  }}
  className="
    text-violet-300

    uppercase

    text-xs
    md:text-sm

    tracking-[0.28em]

    mb-8

    drop-shadow-[0_0_15px_rgba(217,70,239,0.35)]
  "
>
  Frontend Developer • UI Engineer
</motion.p>

            {/* MAIN NAME */}
<motion.h1
  initial={{
    opacity: 0,
    y: 80,
    scale: 0.9,
    filter: "blur(20px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    text-6xl
    sm:text-7xl
    md:text-8xl
    lg:text-[9rem]

    font-black

    tracking-[-0.08em]

    leading-none

    mb-4
  "
>
  <span
    className="
      text-white

      drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
    "
  >
    Sahil
  </span>

  {" "}

  <span
    className="
      bg-gradient-to-r
      from-violet-400
      via-purple-300
      to-fuchsia-400

      bg-clip-text
      text-transparent

      drop-shadow-[0_0_30px_rgba(217,70,239,0.5)]
    "
  >
    Bhatti
  </span>
</motion.h1>

            {/* LIGHT LINE */}
<motion.div
  initial={{
    opacity: 0,
    scaleX: 0,
  }}
  animate={{
    opacity: 1,
    scaleX: 1,
  }}
  transition={{
    delay: 0.6,
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    mt-10

    flex
    justify-center
  "
>
  <div className="relative">

    {/* MAIN LINE */}
    <div
      className="
        h-[2px]
        w-40

        rounded-full

        bg-gradient-to-r
        from-transparent
        via-violet-400
        to-transparent
      "
    />

    {/* GLOW */}
    <div
      className="
        absolute
        inset-0

        h-[2px]
        w-40

        rounded-full

        bg-gradient-to-r
        from-transparent
        via-fuchsia-400/80
        to-transparent

        blur-md
      "
    />

  </div>
</motion.div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}
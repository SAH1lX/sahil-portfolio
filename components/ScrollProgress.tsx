"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      {/* MAIN BAR */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed
          top-0
          left-0
          right-0

          h-[3px]

          origin-left

          z-[9999]

          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-pink-500

          shadow-[0_0_20px_rgba(217,70,239,0.7)]
        "
      />

      {/* GLOW BAR */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed
          top-0
          left-0
          right-0

          h-[8px]

          origin-left

          z-[9998]

          bg-gradient-to-r
          from-violet-500/50
          via-fuchsia-500/50
          to-pink-500/50

          blur-md
          pointer-events-none
        "
      />
    </>
  );
}
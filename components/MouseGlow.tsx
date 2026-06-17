"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { useEffect } from "react";

export default function MouseGlow() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 140,
    damping: 18,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 140,
    damping: 18,
  });

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 120);
      mouseY.set(e.clientY - 120);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
        fixed
        top-0
        left-0
        w-[240px]
        h-[240px]
        rounded-full
        pointer-events-none
        z-10
        opacity-70
        blur-[70px]
        bg-fuchsia-400/30
      "
    />
  );
}
"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 250,
    damping: 20,
    mass: 0.4,
  });

  const smoothY = useSpring(y, {
    stiffness: 250,
    damping: 20,
    mass: 0.4,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const mouseX =
      e.clientX - rect.left - rect.width / 2;

    const mouseY =
      e.clientY - rect.top - rect.height / 2;

    x.set(mouseX * 0.15);
    y.set(mouseY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      whileHover={{
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        inline-block

        will-change-transform
      "
    >
      {children}
    </motion.div>
  );
}
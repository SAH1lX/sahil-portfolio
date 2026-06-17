"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Orb() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 22,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 22,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const { clientX, clientY } = e;

    mouseX.set(
      (clientX - window.innerWidth / 2) * 0.02
    );

    mouseY.set(
      (clientY - window.innerHeight / 2) * 0.02
    );
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        relative
        h-[560px]
        flex
        items-center
        justify-center
      "
    >

      {/* AMBIENT GLOW */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-[520px]
          h-[520px]
          rounded-full
          bg-gradient-to-br
          from-violet-300/25
          via-fuchsia-300/20
          to-blue-300/20
          blur-[120px]
          opacity-60
        "
      />

      {/* MAIN ORB */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "easeInOut",
        }}
        className="
          relative
          w-[280px]
          h-[280px]
          rounded-full
          border
          border-white/30
          bg-white/10
          backdrop-blur-2xl
          shadow-[0px_20px_80px_rgba(168,85,247,0.15)]
        "
      >

        {/* INNER REFLECTION */}
        <div
          className="
            absolute
            top-8
            left-10
            w-24
            h-24
            rounded-full
            bg-white/20
            blur-2xl
          "
        />

      </motion.div>

      {/* FLOATING AI CARD */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[18%]
          right-[2%]
          w-[230px]
          rounded-[30px]
          border
          border-white/20
          bg-white/40
          backdrop-blur-2xl
          shadow-[0px_20px_60px_rgba(0,0,0,0.08)]
          p-5
        "
      >

        {/* TOP */}
        <div className="flex items-center justify-between mb-6">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-2">
              Status
            </p>

            <h3 className="text-lg font-bold leading-tight">
              Building AI Systems
            </h3>

          </div>

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-green-400
              animate-pulse
            "
          />

        </div>

        {/* METRICS */}
        <div className="space-y-4">

          {/* FRONTEND */}
          <div>

            <div className="flex justify-between text-sm mb-2">

              <span className="text-gray-500">
                Frontend
              </span>

              <span className="font-medium">
                92%
              </span>

            </div>

            <div className="h-2 rounded-full bg-black/5 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{
                  duration: 1.5,
                  delay: 0.5,
                }}
                className="
                  h-full
                  rounded-full
                  bg-black
                "
              />

            </div>

          </div>

          {/* AI */}
          <div>

            <div className="flex justify-between text-sm mb-2">

              <span className="text-gray-500">
                AI Systems
              </span>

              <span className="font-medium">
                80%
              </span>

            </div>

            <div className="h-2 rounded-full bg-black/5 overflow-hidden">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80%" }}
                transition={{
                  duration: 1.5,
                  delay: 0.8,
                }}
                className="
                  h-full
                  rounded-full
                  bg-violet-500
                "
              />

            </div>

          </div>

        </div>

      </motion.div>

      {/* FLOATING BADGE */}
      <motion.div
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[18%]
          left-[5%]
          rounded-full
          border
          border-white/20
          bg-white/40
          backdrop-blur-xl
          px-5
          py-3
          shadow-[0px_10px_30px_rgba(0,0,0,0.06)]
        "
      >

        <p className="text-sm font-medium">
          Creative Frontend Engineer
        </p>

      </motion.div>

      {/* PARTICLE 1 */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-16
          left-20
          w-5
          h-5
          rounded-full
          bg-violet-300/60
          blur-lg
        "
      />

      {/* PARTICLE 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          opacity: [0.15, 0.4, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-16
          right-16
          w-6
          h-6
          rounded-full
          bg-fuchsia-200/60
          blur-lg
        "
      />

    </div>
  );
}
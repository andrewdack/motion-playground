"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
export default function BasicsOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <motion.button
        className="
          px-6 py-2
          bg-gradient-to-r from-blue-500 to-purple-600
          text-white font-semibold
          rounded-lg
          shadow-md
          hover:from-blue-600 hover:to-purple-700
          active:scale-95 active:shadow-sm
          transition
          duration-300
          ease-in-out
        "
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Show / Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            className="w-20 h-20 bg-white"
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0]
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0
            }}
            transition={{
              duration: 1,
              // type: "spring",
              // damping: 10,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1] // break down the keyframes into a percentage of the total duration
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

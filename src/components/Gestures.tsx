"use client";
import React from "react";
import { motion, MotionConfig } from "motion/react";

// use MotionConfig to give elements the same motion props without repeating yourself
const Gestures = () => {
  return (
    <div className="grid place-content-center h-screen gap-3">
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="px-6 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Click Me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="px-6 py-2 rounded-md bg-red-600 text-white font-semibold hover:bg-red-700"
        >
          Click Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Gestures;

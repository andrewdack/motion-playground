"use client";
import { motion, useAnimationControls } from "motion/react";

const AnimationControls = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start('flip')
  };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        className="w-40 h-40 bg-white"
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
          banana: {
            rotate: "520deg",
          },
        }}
        initial="initial"
        whileHover="flip"
        transition={{
          duration: 0.4,
        }}
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default AnimationControls;

"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

const ViewBasedAnimations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    console.log('is in view ' + isInView);
  }, [isInView])
  return (
    <>
      <div style={{ height: "150vh" }} />
      <motion.div
        className="h-screen bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <div
        ref={ref}
        className="bg-red-600 h-screen transition-colors duration-1000"
        style={{
          background: isInView ? 'blue': 'red'
        }}
      ></div>
    </>
  );
};

export default ViewBasedAnimations;

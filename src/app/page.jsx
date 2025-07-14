"use client";

import AnimationControls from "@/components/AnimationControls";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";
import ScrollAnimations from "@/components/ScrollAnimation";
import ViewBasedAnimations from "@/components/ViewBaseAnimations";

import { projects } from "../data";
import Card from "@/components/Card";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { ReactLenis, useLenis } from "lenis/react";

import Image from "next/image";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      console.log("scrollYProgress:", latest);
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* <ReactLenis root /> */}
      <main className="overflow-hidden">
        <div className="h-[100vh]" />

        <div ref={container}>
          <Slider
            src={"/cactus.jpg"}
            left={"-32%"}
            progress={scrollYProgress}
            direction="left"
          />
          <Slider src={"/house.jpg"} left={"-40%"} progress={scrollYProgress} direction='right' />
          <Slider src={"/tree.jpg"} left={"-15%"} progress={scrollYProgress} direction='left' />
        </div>

        <div className="h-[100vh]" />
      </main>
    </>
  );
}

const Slider = ({ src, left, progress, direction }) => {
  
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);

  return (
    <motion.div style={{ left, x }} className="relative flex whitespace-nowrap">
      <Phrase src={src} />

      <Phrase src={src} />

      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={"px-10 flex gap-5 items-center"}>
      <p className="text-[10vw]">Front End Developer</p>

      <span className="relative h-[10vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};

"use client";

import AnimationControls from "@/components/AnimationControls";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";
import ScrollAnimations from "@/components/ScrollAnimation";
import ViewBasedAnimations from "@/components/ViewBaseAnimations";

import { projects } from "../data";
import Card from "@/components/Card";

import { useRef } from "react";
import { useScroll } from "motion/react";

import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });
  
  return (
    <>
      <ReactLenis root />
      <main ref={container}>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.05;
          return (
            <Card
              key={index}
              i={index}
              {...project}
              progress={scrollYProgress}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}

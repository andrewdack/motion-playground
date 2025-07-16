"use client";

import AnimationControls from "@/components/AnimationControls";
import BasicsOfMotion from "@/components/BasicsOfMotion";
import Gestures from "@/components/Gestures";
import ScrollAnimations from "@/components/ScrollAnimation";
import ViewBasedAnimations from "@/components/ViewBaseAnimations";

import { projects } from "../data";
import Card from "@/components/Card";

import { useRef, useEffect } from "react";
import { useScroll } from "motion/react";

import { ReactLenis, useLenis } from "lenis/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }

    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent });
    gsap.set(secondText.current, { xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <>
      <ReactLenis root />
      <main className="main">
        <Image
          fill
          objectFit="cover"
          src="/images/mandarin.jpg"
          alt="mandarin duck"
        />

        <div className="sliderContainer">
          <div ref={slider} className="slider">
            <p ref={firstText}>Freelance Photographer - </p>
            <p ref={secondText}>Freelance Photographer - </p>
          </div>
        </div>
      </main>
      <div>built.by.andrew.hu</div>
    </>
  );
}

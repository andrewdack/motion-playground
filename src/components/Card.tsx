"use client";

import { useScroll, useTransform } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useRef } from "react";

interface CardItem {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i: number;
  progress: any;
  range: number[];
  targetScale: number;
}

export default function Card({
  title,
  description,
  src,
  link,
  color,
  i,
  progress,
  range,
  targetScale
}: CardItem) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const cardScale = useTransform(progress, range, [1, targetScale])


  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{ scale: cardScale, backgroundColor: color, top: `calc(-10% + ${i*30}px)`}}
        className="card flex flex-row items-center p-4 rounded-md"
      >
        <div className="flex-1 mr-6">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="mb-4 max-w-xs">{description}</p>
          <a
            href={link}
            className="text-white underline hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>

        <div className="relative w-[60%] h-[100%] rounded-3xl overflow-hidden">
          <motion.div
            style={{scale: imageScale}}
            className="w-full h-full"
          >
            <Image src={`/${src}`} alt={title} fill />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

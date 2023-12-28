"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface SkillsContentProps {
  src: string;
  width: number;
  height: number;
  index: number;
}

export default function SkillsContent({
  src,
  width,
  height,
  index,
}: SkillsContentProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hiden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      variants={imageVariants}
      initial="hiden"
      animate={inView ? "visible" : "hiden"}
      transition={{
        duration: 0.3,
        delay: animationDelay * index,
      }}
    >
      <Image
        alt="One of Skills Image"
        src={src}
        width={width}
        height={height}
      />
    </motion.div>
  );
}

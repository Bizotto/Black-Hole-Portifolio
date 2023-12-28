"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="z-[20] mt-40 flex h-full w-full flex-row items-center justify-center px-20"
    >
      <div className="m-auto flex h-full w-full flex-col justify-center gap-5 text-start">
        <motion.div
          variants={slideInFromTop(0.2)}
          className="Welcome-box gap-1 border border-[#7042f88b] px-[8px] py-[8px] opacity-[0.9]"
        >
          <SparklesIcon className="h-5 w-5 text-[#b49bff]" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>
        <motion.div className="flex h-auto w-auto max-w-[600px] flex-col gap-6 text-6xl font-bold text-white">
          <span>
            Providing
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              {" "}
              the best
            </span>
          </span>
          Project Experience
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.3)}
          className="my-5 max-w-[600px] text-lg text-gray-400"
        >
          I&apos;m a fullstack developer with a passion for creating beautiful
          websites and applications. I&apos;m currently working as a freelancer.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(0.4)}
          className="button-primary w-full max-w-[200px] cursor-pointer rounded-lg py-2 text-center text-white hover:transition-all hover:duration-300"
        >
          Learn more!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.3)}
        className="flex h-full w-full items-center justify-center"
      >
        <Image src="/mainIconsdark.svg" alt="a" width={650} height={650} />
      </motion.div>
    </motion.div>
  );
}

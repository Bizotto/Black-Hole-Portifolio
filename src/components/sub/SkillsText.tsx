"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function SkillText() {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop(0.2)}
        className="Welcome-box gap-1 border border-[#7042f88b] px-[8px] py-[8px] opacity-[0.9]"
      >
        <SparklesIcon className="h-5 w-5 text-[#b49bff]" />
        <h1 className="Welcome-text text-[13px]">Think better with Next 13</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.2)}
        className="mt-5/2 mb-[15px] text-center text-3xl font-medium text-white"
      >
        Making Apps with modern technologies
      </motion.div>
      <motion.div
        className="cursive mt-5/2 mb-10 text-center text-4xl text-gray-200"
        variants={slideInFromRight(0.2)}
      >
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
}

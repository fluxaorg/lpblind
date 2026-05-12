"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { cn } from "@/lib/utils";

interface SimpleTextRevealProps {
  children: string;
  className?: string;
}

export const SimpleTextReveal: FC<SimpleTextRevealProps> = ({ children, className }) => {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(4px)",
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={cn("text-zinc-400", className)}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px", display: "inline-block" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

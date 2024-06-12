"use client";

import React from "react";
import { motion } from "framer-motion";
import { title } from "process";

interface Props {
  items: { title: string; icons: React.ReactNode }[];
  variant?: "normal" | "reverse";
  className?: string;
}

const MarqueeVariants = {
  normal: {
    x: ["0%", "-100%"],
    transition: {
      ease: "linear",
      duration: 60,
      repeat: Infinity,
    },
  },
  reverse: {
    x: ["-100%", "0%"],
    transition: {
      ease: "linear",
      duration: 60,
      repeat: Infinity,
    },
  },
};

const Marquee = ({ items, variant = "normal", className }: Props) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={`relative h-full overflow-hidden py-0 bg-white mx-auto`}
      style={{ width: "100%" }}
    >
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

      <motion.div
        className="flex items-center h-full"
        variants={MarqueeVariants}
        initial={variant}
        animate={MarqueeVariants[variant]}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center"
            style={{ width: `${150 / items.length}%` }}
          >
            <div className={`flex items-center justify-center h-full`}>
              <span className={`text-4xl font-medium ${className}`}>
                {item.title}
              </span>
              <span className={`text-4xl font-medium ${className}`}>
                {item.icons}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

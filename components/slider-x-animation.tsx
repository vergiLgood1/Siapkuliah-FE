'use client'

import React from "react";
import { motion } from "framer-motion";

import { IconBrandItb, IconBrandPolije, IconBrandUgm, IconBrandUnair, IconBrandUnhas, IconBrandUnm, IconBrandUntad, IconBrandUpi, IconBrandUpn } from "./univ-brand";

const icons = [

  { icon: <IconBrandItb /> },
  { icon: <IconBrandPolije /> },
  { icon: <IconBrandUgm /> },
  { icon: <IconBrandUnair /> },
  { icon: <IconBrandUnhas /> },
  { icon: <IconBrandUnm /> },
  { icon: <IconBrandUntad /> },
  { icon: <IconBrandUpi /> },
  { icon: <IconBrandUpn /> },
];

const ScrollXAnimation = () => {
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div
      className="relative h-full overflow-hidden py-0 bg-white mx-auto"
      style={{ width: "100%" }}
    >
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedIcons.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${150 / icons.length}%` }}
          >
            <div className="flex items-center justify-center h-full">
              {icon.icon}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollXAnimation;

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandAtlassian,
  IconBrandLivestorm,
  IconBrandPlanetscale,
  IconBrandRetool,
  IconBrandSupabase,
} from "@/components/tech-brand";
import { FaAccessibleIcon } from "react-icons/fa";
import { IconBrandAdonisJs, IconBrandNetflix } from "@tabler/icons-react";

const icons = [
  { icon: <IconBrandAtlassian className=" " /> },
  { icon: <IconBrandSupabase className=" " /> },
  { icon: <IconBrandPlanetscale className=" " /> },
  { icon: <IconBrandRetool className=" " /> },
  { icon: <IconBrandLivestorm className=" " /> },
];

// const icons = [
//   { icon: <IconBrandAdonisJs  className=" h-auto w-40" /> },
//   { icon: <IconBrandNetflix  className=" h-auto w-40" /> },
//   { icon: <IconBrandNetflix className=" h-auto w-40" /> },
//   { icon: <IconBrandNetflix className=" h-auto w-40" /> },
//   { icon: <IconBrandNetflix className=" h-auto w-40" /> },
// ];

const Brand = () => {
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div className="relative h-full overflow-hidden py-0 bg-white mx-auto">
      <motion.div
        className="flex"
        // animate={{
        //   x: ["0%", "-100%"],
        //   transition: {
        //     ease: "linear",
        //     duration: 60,
        //     repeat: Infinity,
        //   },
        // }}
      >
        <ul className="grid grid-cols-5 gap-8 md:gap-16 lg:gap-28 p-8">
          {icons.map((item, i) => (
            <li key={i} className="flex items-center justify-center space-x-2">
              {item.icon}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Brand;

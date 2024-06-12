'use client'

import React from "react";
import { motion } from "framer-motion";
import { IconBrandAtlassian, IconBrandLivestorm, IconBrandPlanetscale, IconBrandRetool, IconBrandSupabase } from "@/components/tech-brand";


const icons = [

  { icon: <IconBrandAtlassian /> },
  { icon: <IconBrandSupabase /> },
  { icon: <IconBrandPlanetscale /> },
  { icon: <IconBrandRetool /> },
  { icon: <IconBrandLivestorm /> },

];

const Brand = () => {
  const duplicatedIcons = [...icons, ...icons];

  return (
    <div
      className="relative h-full overflow-hidden py-0 bg-white mx-auto"
      style={{ width: "100%" }}
    >
      <div className=""></div>

      <motion.div
        className="flex"
        
      >
        {duplicatedIcons.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / icons.length}%` }}
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

export default Brand;

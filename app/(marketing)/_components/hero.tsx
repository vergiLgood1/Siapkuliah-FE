"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";

const heroes = [
  {
    title: "Find the path to your dream college",
    subtitle:
      "A study buddy who is ready to support you in achieving your college dreams, both at home and abroad. With various intensive programs such as assessment, counseling, and tes preparation that you can take at any time according to your needs.",
    bannerImage: "",
    buttonText: "Talk to us",
    buttonText2: "Get started",
  },
];

export function Hero() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center my-12">
      {heroes.map((hero) => (
        <MaxWidthWrapper>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-medium dark:text-white text-center md:max-w-3xl">
              {hero.title}
            </div>
            <div className="font-normal text-base md:text-2xl dark:text-neutral-200 py-4 text-center md:max-w-lg">
              A study buddy who is ready to support you in achieving your
              college dreams, both at home and abroad.
            </div>
            <div className="flex items-center justify-center gap-x-4 mt-4">
              <div>
                <Button 
                size="lg"
                className="h-12 w-fit text-[16px]">
                  {hero.buttonText2}
                </Button>
              </div>
              <div>
                <Button 
                variant="ghost"
                size="lg"
                className="h-12 w-fit text-[16px]">
                  {hero.buttonText}
                </Button>
              </div>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      ))}
    </div>
  );
}

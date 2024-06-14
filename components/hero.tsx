"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import React from "react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonText2?: string;
  footer?: string;
  bannerImage?: string;
  isActive?: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonText2,
  footer,
  bannerImage,
  isActive,
  href,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full min-h-screen items-center justify-center my-12",
        className
      )}
    >
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
          {children}
          {/* <div className="text-3xl md:text-7xl font-medium dark:text-white text-center md:max-w-3xl">
            {title}
          </div>
          <div className="font-normal text-base md:text-2xl dark:text-neutral-200 py-4 text-center md:max-w-lg">
            {subtitle}
          </div>
          <div className="flex items-center justify-center gap-x-4 mt-4">
            <div>
              <Button size="lg" className="h-12 w-fit text-[16px]">
                {buttonText}
              </Button>
            </div>
            <div>
              {buttonText2 && (
                <Button
                  variant="ghost"
                  size="lg"
                  className="h-12 w-fit text-[16px]"
                >
                  {buttonText2}
                </Button>
              )}
            </div>
          </div>
          <div className="text-center text-sm text-[#2d2d2d] mt-4 max-w-[22rem]">
            {footer}
          </div> */}
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export const HeroTitle: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "text-3xl md:text-7xl font-medium dark:text-white text-center md:max-w-3xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroSub: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "font-normal text-base md:text-2xl dark:text-neutral-200 py-4 text-center md:max-w-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const HeroButton: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className={cn("flex items-center justify-center gap-x-4", className)}>
      {children}
    </div>
  );
};

export const HeroFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "text-center text-sm text-[#2d2d2d] mt-4 max-w-[22rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

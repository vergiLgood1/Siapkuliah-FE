import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";

interface LogoProps {
  className?: string;
}

export const IconBrandLivestorm: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <Image
        src="/icons/Livestorm.svg"
        width="150"
        height="150"
        alt="Logo"
        className="w-14 md:w-24 lg:w-[150px]"
      />
    </div>
  );
};
export const IconBrandSupabase: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <Image
        src="/icons/Supabase.svg"
        width="150"
        height="150"
        alt="Logo"
        className="w-14 md:w-24 lg:w-[150px]"
      />
    </div>
  );
};
export const IconBrandRetool: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <Image
        src="/icons/Retool.svg"
        width="150"
        height="150"
        alt="Logo"
        className="w-14 md:w-24 lg:w-[150px]"
      />
    </div>
  );
};
export const IconBrandPlanetscale: React.FC<LogoProps> = ({ className }) => {
    return (
      <div className={cn("flex items-center gap-x-2", className)}>
        <Image
          src="/icons/Planetscale.svg"
          width="150"
          height="150"
          alt="Logo"
          className="w-14 md:w-24 lg:w-[150px]"
        />
      </div>
    );
  };
export const IconBrandAtlassian: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      <Image
        src="/icons/Atlassian.svg"
        width="150"
        height="150"
        alt="Logo"
        className="w-14 md:w-24 lg:w-[150px]"
      />
    </div>
  );
};

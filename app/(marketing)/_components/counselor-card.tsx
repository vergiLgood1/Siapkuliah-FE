"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CounselorCard() {
  return (
    <MaxWidthWrapper>
        <div className="flex flex-col col-span-4 items-center justify-center">
          <span className=" col-span-3 text-center text-3xl md:text-5xl lg:text-7xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-5xl">
            Meet with our counselor
          </span>
        </div>
    </MaxWidthWrapper>
  );
}
export const projects = [
  {
    name: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    name: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    name: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];

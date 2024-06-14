"use client";

import React from "react";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";
import Image from "next/image";
import { AboutCounselorItem, AboutCounselrGrid } from "./grid/about-counselor-grid";

export function Counselor() {
  return (
    <MaxWidthWrapper className="space-y-8">
      <AboutCounselrGrid className="max-w-7xl mx-auto md:grid-cols-4 md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 lg:gap-12 border-b-4 border-[#f5f5f5]">
        <div className="flex flex-col col-span-4 items-center justify-center">
          <span className=" col-span-3 text-center text-3xl md:text-5xl lg:text-7xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-5xl">
            Everything you need to know about our conselors
          </span>
        </div>
        {items.map((item, i) => (
          <AboutCounselorItem
            key={i}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
            className={item.className}
            subtitle={item.subtitle}
          />
        ))}
      </AboutCounselrGrid>
    </MaxWidthWrapper>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    imageUrl: (
      <Image
        src="/images/expert.png"
        width="700"
        height="500"
        alt="conselor"
        className="rounded-xl p-8"
      />
    ),
    title: "Consult with the best counselor",
    subtitle: "Expert Guidance",
    description:
      "Access top-notch counseling services with experienced and highly qualified counselors, ensuring you receive expert guidance and support.",
    className: "md:col-span-2 p-0",
  },
  {
    imageUrl: (
      <Image
        src="/images/secure.png"
        width="700"
        height="500"
        alt="conselor"
        className="p-12 rounded-xl"
      />
    ),
    title: "Safe, secure, and private",
    subtitle: "Confidential Sessions",
    description:
      "Rest assured that your counseling sessions are conducted in a safe, secure, and private environment, ensuring confidentiality and trust.",
    className: "md:col-span-2 p-0",
  },
  {
    imageUrl: 
    <Image
    src="/images/friendly.png"
    width="300"
    height="0"
    alt=""
    className="rounded-xl"
    />,
    title: "Friendly mentor",
    subtitle: "Personalized Support",
    description:
      "Receive guidance and support from friendly mentors who are dedicated to helping you navigate your academic and personal journey.",
    className: "md:col-span-1",
  },
  {
    imageUrl: (
      <Image
        src="/images/playmentor.png"
        width="600"
        height="100"
        alt="conselor"
        className="rounded-lg p-8"
      />
    ),
    title: "Easy consultation anywhere",
    subtitle: "Convenient Access",
    description:
      "Enjoy the convenience of accessing counseling services from anywhere, making it easy to seek help and support whenever you need it.",
    className: "md:col-span-3",
  },
];

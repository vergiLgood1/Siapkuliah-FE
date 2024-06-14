"use client";

import { cn } from "@/lib/cn";
import React from "react";
import {
  IconBulb,
  IconClipboardList,
  IconFileDollar,
  IconMessageCircle,
  IconSchool,
  IconUsersGroup,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";

export function Feature() {
  return (
    <MaxWidthWrapper className="space-y-8">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 lg:gap-12 border-b-4 border-[#f5f5f5]">
        <div className="flex flex-col col-span-3 items-center justify-center">
          <span className=" col-span-3 text-center text-4xl md:text-6xl lg:text-5xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-2xl">
            Our features for you
          </span>
        </div>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icon={item.icon}
          />
        ))}
        <div className="flex items-center justify-center col-span-3">
          <Link
            href=""
            className="font-medium text-xs md:text-base hover:underline hover:underline-offset-[8px]"
          >
            Learn more about siapkuliah
          </Link>
        </div>
      </BentoGrid>
    </MaxWidthWrapper>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "Counseling",
    description:
      "provides counseling services to assist prospective students with career guidance, major selection, as well as providing emotional and mental support.",
    className: "md:col-span-1",
    icon: <IconMessageCircle />,
  },
  {
    title: "Scholarship",
    description:
      "provide information on various scholarships available, including requirements and how to apply.",
    className: "md:col-span-1",
    icon: <IconFileDollar />,
  },
  {
    title: "University",
    description:
      "provides comprehensive information about various universities, including university profiles, study programs offered, and the application process.",
    className: "md:col-span-1",
    icon: <IconSchool />,
  },
  {
    title: "Tryout",
    description:
      "offers university entrance exam simulations (tryouts) to help prospective students prepare for the actual exam.",
    className: "md:col-span-1",
    icon: <IconClipboardList />,
  },
  {
    title: "Community",
    description:
      "a platform to join a community of fellow prospective students and students, share experiences, ask questions, and get support and motivation.",
    className: "md:col-span-1",
    icon: <IconUsersGroup />,
  },
  {
    title: "Tips & Trick",
    description:
      "provides various tips and tricks to help prospective students succeed in their preparation and during college, including tips on studying, time management, and campus life.",
    className: "md:col-span-1",
    icon: <IconBulb />,
  },
];

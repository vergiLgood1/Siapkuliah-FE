"use client";

import { Hero, HeroFooter, HeroSub, HeroTitle } from "@/components/hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CounselorShowcase from "./_components/counselor-showcase";

import { Cta } from "@/app/(marketing)/_components/cta";
import { CounselorCard } from "./_components/counselor-card";


const Heroes = [
  {
    title: "Find the path to your dream college",
    subtitle:
      "A study buddy who is ready to support you in achieving your college dreams, both at home and abroad. With various intensive programs such as assessment, counseling, and tes preparation that you can take at any time according to your needs.",
    bannerImage: "",
    buttonText: "Talk to us",
    buttonText2: "Get started",
    footer: "Free 5 days trial, no credit card required",
    isActive: true,
    href: "#",
    category: "Home",
  },
  {
    title: "Start your journey with with the best services ",
    subtitle:
      "Choose the best plan and get started with us to achieve your dreams.",
    bannerImage: "",
    buttonText: "Start achiveing your dreams",
    footer:
      "Try siapkuliah free up to 10 coures and 1000 active users. No credit card required",
    isActive: true,
    href: "#",
    category: "Pricing",
  },
  {
    title: "Find the path to your dream college",
    subtitle:
      "A study buddy who is ready to support you in achieving your college dreams, both at home and abroad. With various intensive programs such as assessment, counseling, and tes preparation that you can take at any time according to your needs.",
    bannerImage: "",
    buttonText: "Talk to us",
    buttonText2: "Get started",
    footer: "Free 5 days trial, no credit card required",
    isActive: true,
    href: "#",
    category: "Home",
  },
  {
    title: "Powered by Siapkuliah",
    subtitle:
      "More than 1000 students have joined and achieved their dreams with us. What are you waiting for? Join us now and achieve your dreams.",
    bannerImage: "",
    buttonText: "Join us now",
    footer: [],
    isActive: true,
    href: "#",
    category: "Customer",
  },
  {
    title: "Introducing our wonderful counselors who will help you",
    subtitle:
      "take action and start chatting, brainstorming, and complaining with us. ",
    bannerImage: "",
    buttonText: "Start now",
    buttonText2: "Talk to us",
    footer: [],
    isActive: true,
    href: "#",
    category: "Counseling",
  },
];

const CounselingPage = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        {Heroes.filter(
          (item) => item.isActive && item.category === "Counseling"
        ).map((item, i) => (
          <Hero key={i} className="m-0 min-h-fit pt-40 md:py-40 border-b-4 border-[#F5F5F5] ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl md:text-7xl font-medium mb-5">
                Amazing — counselors
              </h1>
              <span className="text-base md:text-lg mb-14 font-medium text-center">
                All an amazing counselors that you can choose
              </span>
             <CounselorShowcase/>
            </div>
            {/* <HeroTitle className="md:text-6xl md:max-w-full">
              {item.title}
            </HeroTitle>
            <HeroSub className=" md:text-lg font-medium md:max-w-full">
              {item.subtitle}
            </HeroSub>
            <HeroFooter className="max-w-full ">
              <Link href="/pricing">
                <Button size="lg">{item.buttonText}</Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="secondary">
                  {item.buttonText2}
                </Button>
              </Link>
            </HeroFooter> */}
          </Hero>
        ))}
      </div>
      <div>
        <CounselorCard/>
      </div>
      <Cta/>
    </>
  );
};

export default CounselingPage;
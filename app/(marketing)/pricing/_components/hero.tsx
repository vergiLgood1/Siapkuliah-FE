"use client";

import {
  Hero,
  HeroButton,
  HeroFooter,
  HeroSub,
  HeroTitle,
} from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PricingCard from "./pricing-card";

const PricingHeroes = [
  {
    title: "Find the path to your dream college",
    subtitle:
      "A study buddy who is ready to support you in achieving your college dreams, both at home and abroad. With various intensive programs such as assessment, counseling, and tes preparation that you can take at any time according to your needs.",
    bannerImage: "",
    buttonText: "Talk to us",
    buttonText2: "Get started",
    footer: "Free 5 days trial, no credit card required",
    isActive: false,
    href: "#",
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
  },
];

const PricingHero = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        {PricingHeroes.filter((item) => item.isActive).map((item) => (
          <Hero className="m-0 min-h-fit lg:py-40">
            <HeroTitle>{item.title}</HeroTitle>
            <HeroSub className="text-xs md:text-sm font-medium">
              {item.subtitle}
            </HeroSub>
            <HeroButton>
              <Link href={item.href}>
                <Button>{item.buttonText}</Button>
              </Link>
            </HeroButton>
            <HeroFooter className="text-sm">{item.footer}</HeroFooter>
          </Hero>
        ))}
      </div>
      <PricingCard />
    </>
  );
};

export default PricingHero;

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

const heroes = [
  {
    title: "Find the path to your dream college",
    subtitle:
      "A study buddy who is ready to support you in achieving your college dreams, both at home and abroad.",
    buttonText: "Get started",
    buttonText2: "Talk to us",

    isActive: true,
    href: "#",
  },
  {
    title: "Pro",
    subtitle: "For growing businesses",
    buttonText: "Get started",
    buttonText2: "",

    isActive: false,
    href: "#",
  },
  {
    title: "Enterprise",
    subtitle: "For large businesses",
    buttonText: "Contact sales",
    buttonText2: "",
    isActive: false,
    href: "#",
  },
];

const MarketingHero = () => {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      {heroes
        .filter((item) => item.isActive)
        .map((item) => (
          //   <Hero
          //     key={item.title}
          //     title={item.title}
          //     subtitle={item.subtitle}
          //     buttonText={item.buttonText}
          //     buttonText2={item.buttonText2}
          //     isActive={item.isActive}
          //   />
          <Hero key={item.title}>
            <HeroTitle>{item.title}</HeroTitle>
            <HeroSub>{item.subtitle}</HeroSub>
            <HeroButton className="mt-4">
              <Link href={item.href}>
                <Button
                size="lg"
                >{item.buttonText}</Button>
              </Link>
              <Link href={item.href}>
                <Button
                variant="secondary"
                size="lg"
                >{item.buttonText2}</Button>
              </Link>
            </HeroButton>
          </Hero>
        ))}
    </div>
  );
};

export default MarketingHero;

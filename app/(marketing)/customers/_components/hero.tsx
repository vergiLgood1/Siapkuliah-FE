"use client";

import {
  Hero,
  HeroButton,
  HeroFooter,
  HeroSub,
  HeroTitle,
} from "@/components/hero";
import {
  IconBrandAirbnb,
  IconBrandAirtable,
  IconBrandAmazon,
  IconBrandAmd,
  IconBrandAmongUs,
} from "@tabler/icons-react";
import Brand from "../../_components/brand";

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
    footer: [
      <IconBrandAmazon />,
      <IconBrandAirbnb />,
      <IconBrandAmongUs />,
      <IconBrandAirtable />,
      <IconBrandAmd />,
    ],
    isActive: true,
    href: "#",
    category: "Customer",
  },
];

const CustomersHero = () => {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        {Heroes.filter(
          (item) => item.isActive && item.category === "Customer"
        ).map((item) => (
          <Hero className="m-0 min-h-fit pt-40 md:py-40 ">
            <HeroTitle>{item.title}</HeroTitle>
            <HeroSub className=" md:text-sm font-medium my-8 ">
              {item.subtitle}
            </HeroSub>
            <HeroFooter className="max-w-full pb-28 border-b-4 border-[#F5F5F5] ">
              <Brand />
            </HeroFooter>
          </Hero>
        ))}
      </div>
    </>
  );
};

export default CustomersHero;

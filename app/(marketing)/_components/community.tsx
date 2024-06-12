"use client";

import Marquee from "@/components/marquee/marquee2";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";
import { IconArrowRight } from "@tabler/icons-react";
import CtaSlider from "./ctaslider";

const Community = () => {
  return (
    <>
      <MaxWidthWrapper>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 lg:gap-12 ">
          <div className="flex flex-col col-span-4 items-center justify-center">
            <span className=" text-center text-3xl md:text-5xl lg:text-7xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-2xl">
              Join with our community
            </span>
            <p className="text-lg font-normal text-center max-w-2xl mb-4 md:mb-8">
              When it comes to what you pay, we believe that software pricing
              should be transparent and based around shared value. We also
              believe in investing in your growth – as you grow you pay for what
              you use – and unit costs come down as you use more. Fair and
              simple.
            </p>
          </div>
          <div className="flex flex-col col-span-4 items-center justify-center">
            <div className="flex items-center justify-center w-full min-h-[900px] bg-[#F5F5F5] rounded-lg "></div>
          </div>
          <div className="flex justify-center col-span-4 gap-x-20">
            {items.slice(0, 3).map((item, i) => (
              <div key={i} className="flex justify-center w-full">
                <div className="space-y-4">
                  <div>
                    <span className="font-medium text-2xl"> {item.title}</span>
                  </div>
                  <p className="text-base font-normal text-pretty">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </BentoGrid>
          <div className="flex items-center justify-center col-span-4">
            <CtaSlider />
          </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Community;

const items = [
  {
    title: "Free for founders",
    description:
      "When it comes to what you pay, we believe that software pricing should be transparent and based around shared value. We also believe in investing in your growth – as you grow you pay for what you use – and unit costs come down as you use more. Fair and simple.",
  },
  {
    title: "One bill",
    description:
      "Our mission is to help bring your ideas to life on a unified platform, that’s why you only get one bill too. Nothing hidden.",
  },
  {
    title: "50% or less than Auth0",
    description:
      "Ask us anything about our pricing and the first thing we’ll say is that we aim to halve your bill. Comparing is worth it.",
  },
  {
    title: "Community",
    description:
      "When it comes to what you pay, we believe that software pricing should be transparent and based around shared value. We also believe in investing in your growth – as you grow you pay for what you use – and unit costs come down as you use more. Fair and simple.",
  },
];

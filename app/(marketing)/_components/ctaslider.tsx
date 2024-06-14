"use client";

import Marquee from "@/components/marquee/marquee2";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { IconArrowRight } from "@tabler/icons-react";

const CtaSlider = () => {
  return (
    <MaxWidthWrapper>
      <div className=" border-b-4 border-[#f5f5f5]">
        <div className="flex pb-12 md:pb-28 items-center">
          <Marquee variant="reverse" items={marqueeItems} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CtaSlider;

const marqueeItems = [
  {
    title: "Free for founders",
    icons: <IconArrowRight />,
  },
  {
    title: "Free for founders",
    icons: <IconArrowRight />,
  },
  {
    title: "Free for founders",
    icons: <IconArrowRight />,
  },
  {
    title: "Free for founders",
    icons: <IconArrowRight />,
  },
  {
    title: "Free for founders",
    icons: <IconArrowRight />,
  },
  {
    title: "Free for founders",
    icons: <IconArrowRight />,
  },
];

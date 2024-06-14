import React from "react";
import { FlipWords } from "@/components/ui/flip-word";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";
import Link from "next/link";
import CtaSlider from "./ctaslider";

export function FlipWord() {
  const words = ["Amazing", "Beautiful", "Modern"];

  return (
    <>
      <MaxWidthWrapper>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 lg:gap-12">
          <div className="flex flex-col col-span-3 items-center justify-center md:p-16 bg-[#F5F5F5] rounded-lg md:gap-y-20">
            {ItemsFlipWord.filter((item) => item.isActive)
              .slice(0, 1)
              .map((item, i) => (
                <div key={i} className="">
                  <div className="col-span-3 text-center text-xl md:text-3xl lg:text-6xl font-medium text-[#2d2d2d] my-6 md:my-24 max-w-xs md:max-w-sm lg:max-w-2xl ">
                    <FlipWords className="mr-2" words={item.word} />
                    {item.title}
                  </div>
                  <div>
                    <p className="text-base font-normal text-center max-w-2xl mb-4 md:mb-8">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center col-span-3">
                      <Link
                        href={item.url}
                        className="font-medium text-xs md:text-base hover:underline hover:underline-offset-[8px]"
                      >
                        {item.textUrl}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </BentoGrid>
      </MaxWidthWrapper>
      <div className="flex col-span-4 max-w-8xl">
        <CtaSlider />
      </div>
    </>
  );
}

const ItemsFlipWord = [
  {
    word: ["Amazing", "Beautiful", "Modern"],
    title: "app by team siapkuliah",
    description:
      "provides counseling services to assist prospective students with career guidance, major selection, as well as providing emotional and mental support.",
    url: "",
    textUrl: "Learn more about siapkuliah",
    isActive: "true",
  },
];

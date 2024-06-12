import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";
import Brand from "./brand";
import ScrollXAnimation from "@/components/slider-x-animation";
import Link from "next/link";

const Univ = () => {
  return (
    <MaxWidthWrapper>
      <BentoGrid className="grid w-full md:auto-rows-auto grid-cols-1 md:grid-cols-1 gap-2 md:gap-4 max-w-7xl mx-auto md:py-20 border-b-4 border-[#f5f5f5]">
        <div className="flex flex-col items-center justify-center">
          <span className=" col-span-3 text-center text-4xl md:text-6xl lg:text-8xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-2xl">
            Made to help you
          </span>
          <span className="col-span-3 text-center text-lg md:text-xl lg:text-2xl font-normal text-[#2d2d2d]">
            achieve your dreams
          </span>
        </div>
        <div className="p-2 md:p-8 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-1 items-center">
            <div className="px-4 lg:px-8">
              <div className="relative py-6 md:py-10 overflow-hidden">
                <div className="flex justify-between items-center gap-x-4"></div>
                <ScrollXAnimation />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href=""
            className="font-medium text-xs md:text-base hover:underline hover:underline-offset-[8px]"
          >
            Support all student in Indonesia
          </Link>
        </div>
      </BentoGrid>
    </MaxWidthWrapper>
  );
};

export default Univ;

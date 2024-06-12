import MaxWidthWrapper from "@/components/max-width-wrapper";
import ScrollXAnimation from "@/components/slider-x-animation";
import { BentoGrid } from "@/components/ui/bento-grid";
import Brand from "./brand";

const Tech = () => {
  return (
    <MaxWidthWrapper>
      <BentoGrid className="grid w-full md:auto-rows-auto grid-cols-1 md:grid-cols-1 gap-4 max-w-7xl mx-auto pt-14 md:pt-28">
        <h2 className="col-span-3 text-center text-2xl text-[#2d2d2d]">
          Trusted by over 25,000 developers, including teams at
        </h2>
        <div className="p-4 lg:p-8 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-1 items-center">
            <div className="px-4 lg:px-8">
              <div className="relative py-6 md:py-10 overflow-hidden">
                <div className="flex justify-between items-center gap-x-4">
                  <Brand />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BentoGrid>
    </MaxWidthWrapper>
  );
};

export default Tech;

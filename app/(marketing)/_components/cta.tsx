"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Cta() {
  return (
    <MaxWidthWrapper className="">
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto py-12 md:py-28 lg:gap-12">
        <div className="flex flex-col col-span-4 items-center justify-center gap-8">
          <span className="col-span-4 text-center text-xs sm:text-sm md:text-medium font-normal text-[#2d2d2d] max-w-xs md:max-w-sm lg:max-w-2xl bg-[#F5F5F5] rounded-full py-2 px-6">
            The road to your dreams starts here
          </span>
          <h1 className="col-span-4 text-center text-xl md:text-3xl lg:text-6xl font-medium text-[#2d2d2d] max-w-xs md:max-w-sm lg:max-w-xl">
            Get started with Siapkuliah
          </h1>
          <div className="col-span-4 flex items-center justify-center gap-x-2 p-6">
            <Link href="/">
              <Button size="lg">Talk to us</Button>
            </Link>
            <Link href="/auth/login">
              <Button size="lg" variant="secondary">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </BentoGrid>
    </MaxWidthWrapper>
  );
}

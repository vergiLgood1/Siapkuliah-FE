"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const CounselorShowcase = () => {
  return (
    <MaxWidthWrapper>
      <div className="bg-[#F5F5F5] ">
        <BentoGrid className="md:grid-cols-4 md:auto-rows-auto p-8">
          {item.map((item, i) => (
            <Card className="w-fit h-fit">
              <CardHeader className="p-0">
                <Image
                  className="object-contain object-center rounded-lg"
                  src={item.header}
                  alt="header"
                  width={300}
                  height={300}
                />
              </CardHeader>
            </Card>
          ))}
        </BentoGrid>
      </div>
    </MaxWidthWrapper>
  );
};

export default CounselorShowcase;

const item = [
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    header:
      "https://images.pexels.com/photos/6325975/pexels-photo-6325975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

import { cn } from "@/lib/cn";
import React from "react";

import {
  IconArrowLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconShieldLock,
  IconUserPlus,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import { ChevronLeft, LayoutTemplate, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input2";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { TableShowcase } from "./table";

export function Showcase() {
  return (
    <MaxWidthWrapper>
      <BentoGrid className="lg:min-h-[650px] ">
        <div className="flex items-center justify-center col-span-2 rounded-lg bg-[#f5f5f5] lg:min-h-[650px]">
          <div>
            <Image
              className="flex items-center justify-center p-8 lg:p-0"
              src="/images/showcase2.png"
              width={400}
              height={400}
              alt="showcase1"
            />
          </div>
        </div>
        <div className="flex items-center justify-center col-span-1 md:col-span-1 rounded-lg bg-[#f5f5f5] lg:min-h-[650px]">
          <div>
            <Image
              className="flex items-center justify-center p-8 lg:p-8"
              src="/images/showcase2.png"
              width={400}
              height={400}
              alt="showcase1"
            />
          </div>
        </div>
      </BentoGrid>
      <div className="grid grid-cols-1 max-w-7xl mx-auto py-4">
        <p className="text-xs text-[#2b2b2b] ">
          Add powerful auth to your product with just a few lines of code
        </p>
      </div>
      <TableShowcase/>
      {/* <BentoGrid className="flex items-center justify-center  bg-[#f5f5f5] rounded-xl overflow-hidden relative">
        <div className="col-span-3 py-10 px-8">
          <div className="flex flex-col w-full gap-6 bg-white py-10 px-8 rounded-xl">
            <div className="flex">
              <ChevronLeft />
              Home
            </div>
            <div className="grid gap-[3.5rem] grid-cols-[15.5rem_auto]">
              <div className="">
                <div className="py-6 px-4 mb-6 text-2xl font-medium">User</div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <div className="flex items-center justify-between w-full p-4 bg-[#f5f5f5] rounded-md ">
                    <div className="flex gap-2">
                      <User />
                      Users
                    </div>
                    <div className="flex items-end justify-end ">2.000</div>
                  </div>
                  <div className="flex items-center justify-between w-full p-4">
                    <div className="flex gap-2">
                      <LayoutTemplate />
                      Subscribers
                    </div>
                    <div className="flex items-end justify-end ">50</div>
                  </div>
                  <div className="flex items-center justify-between w-full p-4">
                    <div className="flex gap-2">
                      <IconShieldLock />
                      Access request
                    </div>
                    <div className="flex items-end justify-end">256</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex flex-1 items-center max-w-[56.25rem] ">
                  <div className="flex items-center justify-between flex-grow px-[2px] py-6">
                    <div className="text-2xl font-medium">All users</div>
                    <div className="flex items-center gap-2">
                      <div>
                        <Search />
                      </div>
                      <div>
                        <Button
                          variant="ghost"
                          className="bg-[#f5f5f5] text-[#2d2d2d] "
                        >
                          Import
                        </Button>
                      </div>
                      <div className="flex items-center ">
                        <Button
                          variant="ghost"
                          className="bg-[#f5f5f5] text-[#2d2d2d] gap-2"
                        >
                          <IconUserPlus />
                          Add user
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </BentoGrid> */}
    </MaxWidthWrapper>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
];

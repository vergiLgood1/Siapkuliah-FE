"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/cn";
import { IconCheck } from "@tabler/icons-react";
import Link from "next/link";

const PricingCard = () => {
  const PricingCard = [
    {
      title: "Starter",
      info: "Most popular",
      price: "Free",
      description:
        "Everything you need to get started.Upgrade when you want, cancel anytime.",
      description2: "  ",
      features: [
        "1-on-1 counseling",
        "Career guidance",
        "Major selection",
        "Emotional and mental support",
      ],
      isActive: "true",
      href: "#",
    },
    {
      title: "Pro",
      info: "Recommended",
      price: "100000",
      description:
        "For individuals who want to take their career to the next level",
      description2: "",
      features: [
        "1-on-1 counseling",
        "Career guidance",
        "Major selection",
        "Emotional and mental support",
        "Resume review",
        "Interview preparation",
      ],
      isActive: "true",
      href: "#",
    },
    {
      title: "Enterprise",
      info: "",
      price: "150000",
      description:
        "For organizations who want to provide counseling services to their employees",
      description2: "",
      features: [
        "1-on-1 counseling",
        "Career guidance",
        "Major selection",
        "Emotional and mental support",
        "Resume review",
        "Interview preparation",
        "Group counseling",
        "Customized training",
      ],
      isActive: "true",
      href: "#",
    },
  ];

  const formatRupiah = (price: string) => {
    if (price.toLocaleLowerCase() === "free") {
      return price;
    }
    return new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(Number(price));
  };

  return (
    <MaxWidthWrapper>
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto gap-4 md:gap-8 lg:gap-12 border-b-4 border-[#f5f5f5]">
        <div className="flex flex-col col-span-3 border-b-[1px] border-[#F5F5F5]">
          <span className="col-span-3 text-start text-lg md:text-xl lg:text-2xl font-medium text-[#2d2d2d] mb-2 md:mb-6 max-w-xs md:max-w-sm lg:max-w-2xl">
            Pricing & plans
          </span>
        </div>
      </BentoGrid>
      <div className="flex justify-around w-full py-12">
        {PricingCard.filter((item) => item.isActive).map((item, i) => (
          <Card
            className={cn(
              item.title === "Pro"
                ? "w-[355px] bg-[#F5F5F5] border-none"
                : "w-[355px] border-none"
            )}
            key={i}
          >
            <CardHeader className="text-2xl font-medium py-4 ">
              {item.title}
            </CardHeader>
            <CardDescription className="px-6 py-2 font-medium text-[#0F0F0F]">
              {item.description}
            </CardDescription>
            <CardContent className="space-y-4">
              <div className="mt-5 flex flex-col gap-y-5 mb-14">
                <span className="text-base text-[#0F0F0F] ">Starting at</span>
                <p className="text-[32px] flex items-baseline font-bold text-gray-800 dark:text-neutral-200">
                  {formatRupiah(item.price)}
                  <span className="ms-3 text-sm text-[#636363]">/ Monthly</span>
                </p>
                <p>
                  <span className="text-sm font-base text-[#636363]">
                    {item.description}
                  </span>
                </p>
                <Link href={item.href}>
                  {item.title === "Pro" && (
                    <Button size="lg">Start journey now</Button>
                  )}
                  {item.title !== "Pro" && (
                    <Button size="lg" variant="secondary">
                      Start journey now
                    </Button>
                  )}
                </Link>
              </div>
              <div className="">
                {item.title === "Starter" && (
                  <p className="font-normal text-sm">
                    What's include in{" "}
                    <span className="font-medium text-sm">{item.title}:</span>
                  </p>
                )}
                {item.title === "Pro" && (
                  <p className="font-normal text-sm">
                    All features in{" "}
                    <span className="font-medium text-sm">{item.title}:</span>
                  </p>
                )}
                {item.title === "Enterprise" && (
                  <p className="font-normal text-sm">
                    All features in{" "}
                    <span className="font-medium text-sm">{item.title}:</span>
                  </p>
                )}
                <ul className="mt-6 flex flex-col gap-4">
                  {item.features.map((feature, i) => (
                    <li key={i} className="text-sm">
                      <div className="flex items-center gap-2 text-[#2B2B2B] ">
                        <IconCheck className="h-5 w-5" />
                        {feature}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default PricingCard;

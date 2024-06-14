'use client'
import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import { useState, ChangeEvent } from "react";
const testimonial = [
  {
    name: "vin",
    school: "SMA Negeri Banyuwangi",
    title: "Your call has been confirmed.",
    description: "1 hour ago",
    content: "Painless to understand and set up… an absolute blessing.",
  },
  {
    name: "vin",
    school: "SMA Negeri Banyuwangi",
    title: "You have a new message!",
    description: "1 hour ago",
    content: "Painless to understand and set up… an absolute blessing.",
  },
  {
    name: "vin",
    school: "SMA Negeri Banyuwangi",
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
    content: "Painless to understand and set up… an absolute blessing.",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function TestimonialCard({ className, ...props }: CardProps) {

  return (
    <Card
      className={cn(
        "hidden lg:block max-w-md lg:max-w-2xl w-full mx-auto rounded-none border-none md:rounded-2xl shadow-input bg-[#f5f5f5] dark:bg-black p-8",
        className
      )}
      {...props}
    >
      <CardHeader className="bg-[##f5f5f5]">
        <CardTitle className="font-medium flex items-center justify-center text-center pb-8 text-2xl text-neutral-800 dark:text-neutral-200">
          <p className="max-w-sm">
            Join 25.000 software teams building on kinde
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2 py-0 ">
        <div>
          {testimonial.map((testimonial, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full" />
              <div className="space-y-4">
                <p className="text-lg font-medium leading-none">
                  {testimonial.title}
                </p>
                <p className="text-md font-normal text-muted-foreground">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="">
        <div className="w-full">
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex flex-col space-y-4 items-center justify-center">
            <Avatar
              className="w-20 h-20 text-large"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </div>
          <div className="text-center items-center justify-center ">
            <p className="my-4 font-medium text-xl">
              “Painless to understand and set up… an absolute blessing.”
            </p>
            <div className="text-sm font-normal">
              <p>Alex Gabites </p>
              <p>Uncommon Purpose</p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

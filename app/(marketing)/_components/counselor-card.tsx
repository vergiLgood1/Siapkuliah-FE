"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cn } from "@/lib/cn";
import { image } from "@nextui-org/theme";

import Image from "next/image";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export function CounselorCard({ className, ...props }: CardProps) {
  return (
    <MaxWidthWrapper
      className={cn("")}
    >
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 lg:gap-12 border-b-4 border-[#f5f5f5]">
        <div className="flex flex-col col-span-4 items-center justify-center">
          <span className=" col-span-3 text-center text-3xl md:text-5xl lg:text-7xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-2xl">
            Meet with our mentors
          </span>
        </div>
        {mentors.slice(0, 4).map((mentor, i) => (
          <Card
            key={i}
            className={cn("w-[300px] bg-[#F5F5F5] border-none ", className)}
            {...props}
          >
            <CardHeader>
              <Image
                alt="Card background"
                className=" object-cover object-center rounded-lg max-h-[200px] "
                src={mentor.imageUrl}
                width={270}
                height={100}
              />
            </CardHeader>
            <CardContent className={cn("space-y-4")}>
              <CardTitle className="text-sm text-[#A3A3A3] truncate">
                {mentor.education}
              </CardTitle>
              <CardDescription className="text-lg text-[#1F1F1F] font-bold">
                {mentor.user.username}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Link
                className={cn("flex items-center justify-center w-full")}
                href={mentor.link}
              >
                <Button className="w-full">Get access</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
        <div className="flex items-center justify-center col-span-4">
          <Link
            href={"/"}
            className="font-medium text-xs md:text-base hover:underline hover:underline-offset-[8px]"
          >
            View all mentors
          </Link>
        </div>
      </BentoGrid>
    </MaxWidthWrapper>
  );
}

export const mentors = [
  {
    user: {
      username: "johndoe",
      email: "johndoe@example.com",
      first_name: "John",
      last_name: "Doe",
    },
    imageUrl:
      "https://images.pexels.com/photos/9065282/pexels-photo-9065282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    education: "Bachelor of Science in Computer Science",
    bio: "John is a seasoned software engineer with over a decade of experience in web development, focusing on creating scalable and efficient applications.",
    experience_years: 10,
    subjects: "JavaScript, React, Node.js",
    total_reviews: 120,
    total_students: 250,
    link: "https://example.com",
  },
  {
    user: {
      username: "janesmith",
      email: "janesmith@example.com",
      first_name: "Jane",
      last_name: "Smith",
    },
    imageUrl:
      "https://images.pexels.com/photos/7013966/pexels-photo-7013966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    education: "PhD in Computer Science",
    bio: "Jane is an expert data scientist with extensive experience in machine learning, data analysis, and Python programming. She enjoys teaching and mentoring aspiring data scientists.",
    experience_years: 8,
    subjects: "Machine Learning, Data Analysis, Python",
    total_reviews: 95,
    total_students: 180,
    link: "https://example.com",
  },
  {
    user: {
      username: "mikejohnson",
      email: "mikejohnson@example.com",
      first_name: "Mike",
      last_name: "Johnson",
    },
    imageUrl:
      "https://images.pexels.com/photos/6325958/pexels-photo-6325958.jpeg",
    education: "Master of Business Administration",
    bio: "Mike is a project manager specializing in agile methodologies and team leadership. He has successfully led numerous software development projects from inception to completion.",
    experience_years: 12,
    subjects: "Project Management, Agile Methodologies, Team Leadership",
    total_reviews: 75,
    total_students: 300,
    link: "https://example.com",
  },
  {
    user: {
      username: "emilydavis",
      email: "emilydavis@example.com",
      first_name: "Emily",
      last_name: "Davis",
    },
    imageUrl:
      "https://images.pexels.com/photos/9065297/pexels-photo-9065297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    education: "Bachelor of Arts in Graphic Design",
    bio: "Emily is a UX/UI designer passionate about creating user-friendly and aesthetically pleasing designs. With a background in graphic design and web development, she brings a unique perspective to her work.",
    experience_years: 7,
    subjects: "UX/UI Design, Graphic Design, Web Development",
    total_reviews: 60,
    total_students: 150,
    link: "https://example.com",
  },
];

export const items = [
  {
    imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    name: "A",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    name: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries",
    link: "https://netflix.com",
  },
  {
    imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    name: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    imageUrl: "https://nextui.org/images/hero-card-complete.jpeg",
    name: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
];

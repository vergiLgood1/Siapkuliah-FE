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
import { useGetAllMentorsQuery } from "@/redux/features/mentors/mentor-api-slice";
import { image } from "@nextui-org/theme";

import Image from "next/image";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export const CounselorCard: React.FC = ({ className, ...props }: CardProps) => {

//  const {data: mentors, error, isLoading} = useGetAllMentorsQuery({ })

  return (
    <MaxWidthWrapper
      className={cn("")}
    >
      <BentoGrid className="max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 border-b-4 border-[#f5f5f5]">
        {/* <div className="flex flex-col col-span-4 items-center justify-center">
          <span className=" col-span-3 text-center text-3xl md:text-5xl lg:text-7xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-2xl">
            Meet with our mentors
          </span>
        </div> */}
        {mentors.map((mentor, i) => (
          <Card
            key={i}
            className={cn("w-full  bg-[#F5F5F5] border-none ", className)}
            {...props}
          >
            <CardHeader className="items-center justify-center w-full">
              <Image
                alt="Card background"
                className="object-cover object-center rounded-lg max-h-[200px] flex items-center justify-center"
                src={mentor.imageUrl}
                width={300}
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
                href={`/counseling/${mentor.id}`}
              >
                <Button className="w-full">Let's talk</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
        
      </BentoGrid>
    </MaxWidthWrapper>
  );
}

export const mentors = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
  {
    id: "5",
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
  {
    id: "9",
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
    id: "10",
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
    id: "11",
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
    id: "12",
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


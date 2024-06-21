"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useOrigin } from "@/hooks/use-origin";
import { useGetMentorDetailsQuery } from "@/redux/api/mentors/mentor-api-slice";
import Image from "next/image";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useParams,
} from "next/navigation";
import { useEffect, useState } from "react";
type MentorProps = {

};

interface CounselingDetailProps {
  id: string;
}

const CounselingDetail: React.FC<CounselingDetailProps> = () => {
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const id = searchParams.get('id')

  const params = useParams();
  const { id } = params;

  // useEffect(() => {
  //   const url = `${id}`
  //   console.log(url)

  // }, [id, pathname, searchParams])

  const {
    data: mentor,
    error,
    isLoading,
  } = useGetMentorDetailsQuery(id as string);

  const cloudinary = "https://res.cloudinary.com/dlk3dxah5/";

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Something went wrong
      </div>
    );

  if (!mentor)
    return (
      <div className="flex items-center justify-center min-h-screen">
        No mentor data found
      </div>
    );

  return (
    <>
      <MaxWidthWrapper>
        <div className="md:py-40">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-7xl font-medium mb-5">
              Amazing — counselors
            </h1>
            <span className="text-base md:text-lg mb-14 font-medium text-center">
              All an amazing counselors that you can choose
            </span>
          </div>
          {mentor && (
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <Image
                  className="object-contain object-center rounded-lg"
                  src={`${cloudinary}${mentor.image}`}
                  alt="header"
                  width={300}
                  height={300}
                />
              </div>
              <div className="col-span-3">
                <h2 className="text-2xl font-semibold">
                  {mentor.first_name} {mentor.last_name}
                </h2>
                <p className="text-lg text-gray-500 mb-4">{mentor.education}</p>
                <p className="text-lg mb-4">{mentor.bio}</p>
                <p className="text-lg mb-4">
                  Experience: {mentor.experience_years} years
                </p>
                <p className="text-lg mb-4">Subjects: {mentor.subjects}</p>
                <p className="text-lg mb-4">
                  Total Reviews: {mentor.total_reviews}
                </p>
                <p className="text-lg mb-4">
                  Total Students: {mentor.total_students}
                </p>
                <a
                  className="text-lg text-blue-500 underline"
                  href={mentor.linkedin}
                >
                  Learn more
                </a>
              </div>
            </div>
          )}
          <div className="flex min-h-screen items-center justify-center">
            woi blok
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default CounselingDetail;

// export const mentors = [
//   {
//     user: {
//       username: "johndoe",
//       email: "johndoe@example.com",
//       first_name: "John",
//       last_name: "Doe",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/9065282/pexels-photo-9065282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "Bachelor of Science in Computer Science",
//     bio: "John is a seasoned software engineer with over a decade of experience in web development, focusing on creating scalable and efficient applications.",
//     experience_years: 10,
//     subjects: "JavaScript, React, Node.js",
//     total_reviews: 120,
//     total_students: 250,
//     link: "https://example.com",
//   },
//   {
//     id: "2",
//     user: {
//       username: "janesmith",
//       email: "janesmith@example.com",
//       first_name: "Jane",
//       last_name: "Smith",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/7013966/pexels-photo-7013966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "PhD in Computer Science",
//     bio: "Jane is an expert data scientist with extensive experience in machine learning, data analysis, and Python programming. She enjoys teaching and mentoring aspiring data scientists.",
//     experience_years: 8,
//     subjects: "Machine Learning, Data Analysis, Python",
//     total_reviews: 95,
//     total_students: 180,
//     link: "https://example.com",
//   },
//   {
//     id: "3",
//     user: {
//       username: "mikejohnson",
//       email: "mikejohnson@example.com",
//       first_name: "Mike",
//       last_name: "Johnson",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/6325958/pexels-photo-6325958.jpeg",
//     education: "Master of Business Administration",
//     bio: "Mike is a project manager specializing in agile methodologies and team leadership. He has successfully led numerous software development projects from inception to completion.",
//     experience_years: 12,
//     subjects: "Project Management, Agile Methodologies, Team Leadership",
//     total_reviews: 75,
//     total_students: 300,
//     link: "https://example.com",
//   },
//   {
//     id: "4",
//     user: {
//       username: "emilydavis",
//       email: "emilydavis@example.com",
//       first_name: "Emily",
//       last_name: "Davis",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/9065297/pexels-photo-9065297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "Bachelor of Arts in Graphic Design",
//     bio: "Emily is a UX/UI designer passionate about creating user-friendly and aesthetically pleasing designs. With a background in graphic design and web development, she brings a unique perspective to her work.",
//     experience_years: 7,
//     subjects: "UX/UI Design, Graphic Design, Web Development",
//     total_reviews: 60,
//     total_students: 150,
//     link: "https://example.com",
//   },
//   {
//     id: "5",
//     user: {
//       username: "johndoe",
//       email: "johndoe@example.com",
//       first_name: "John",
//       last_name: "Doe",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/9065282/pexels-photo-9065282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "Bachelor of Science in Computer Science",
//     bio: "John is a seasoned software engineer with over a decade of experience in web development, focusing on creating scalable and efficient applications.",
//     experience_years: 10,
//     subjects: "JavaScript, React, Node.js",
//     total_reviews: 120,
//     total_students: 250,
//     link: "https://example.com",
//   },
//   {
//     id: "6",
//     user: {
//       username: "janesmith",
//       email: "janesmith@example.com",
//       first_name: "Jane",
//       last_name: "Smith",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/7013966/pexels-photo-7013966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "PhD in Computer Science",
//     bio: "Jane is an expert data scientist with extensive experience in machine learning, data analysis, and Python programming. She enjoys teaching and mentoring aspiring data scientists.",
//     experience_years: 8,
//     subjects: "Machine Learning, Data Analysis, Python",
//     total_reviews: 95,
//     total_students: 180,
//     link: "https://example.com",
//   },
//   {
//     id: "7",
//     user: {
//       username: "mikejohnson",
//       email: "mikejohnson@example.com",
//       first_name: "Mike",
//       last_name: "Johnson",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/6325958/pexels-photo-6325958.jpeg",
//     education: "Master of Business Administration",
//     bio: "Mike is a project manager specializing in agile methodologies and team leadership. He has successfully led numerous software development projects from inception to completion.",
//     experience_years: 12,
//     subjects: "Project Management, Agile Methodologies, Team Leadership",
//     total_reviews: 75,
//     total_students: 300,
//     link: "https://example.com",
//   },
//   {
//     id: "8",
//     user: {
//       username: "emilydavis",
//       email: "emilydavis@example.com",
//       first_name: "Emily",
//       last_name: "Davis",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/9065297/pexels-photo-9065297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "Bachelor of Arts in Graphic Design",
//     bio: "Emily is a UX/UI designer passionate about creating user-friendly and aesthetically pleasing designs. With a background in graphic design and web development, she brings a unique perspective to her work.",
//     experience_years: 7,
//     subjects: "UX/UI Design, Graphic Design, Web Development",
//     total_reviews: 60,
//     total_students: 150,
//     link: "https://example.com",
//   },
//   {
//     id: "9",
//     user: {
//       username: "johndoe",
//       email: "johndoe@example.com",
//       first_name: "John",
//       last_name: "Doe",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/9065282/pexels-photo-9065282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "Bachelor of Science in Computer Science",
//     bio: "John is a seasoned software engineer with over a decade of experience in web development, focusing on creating scalable and efficient applications.",
//     experience_years: 10,
//     subjects: "JavaScript, React, Node.js",
//     total_reviews: 120,
//     total_students: 250,
//     link: "https://example.com",
//   },
//   {
//     id: "10",
//     user: {
//       username: "janesmith",
//       email: "janesmith@example.com",
//       first_name: "Jane",
//       last_name: "Smith",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/7013966/pexels-photo-7013966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "PhD in Computer Science",
//     bio: "Jane is an expert data scientist with extensive experience in machine learning, data analysis, and Python programming. She enjoys teaching and mentoring aspiring data scientists.",
//     experience_years: 8,
//     subjects: "Machine Learning, Data Analysis, Python",
//     total_reviews: 95,
//     total_students: 180,
//     link: "https://example.com",
//   },
//   {
//     id: "11",
//     user: {
//       username: "mikejohnson",
//       email: "mikejohnson@example.com",
//       first_name: "Mike",
//       last_name: "Johnson",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/6325958/pexels-photo-6325958.jpeg",
//     education: "Master of Business Administration",
//     bio: "Mike is a project manager specializing in agile methodologies and team leadership. He has successfully led numerous software development projects from inception to completion.",
//     experience_years: 12,
//     subjects: "Project Management, Agile Methodologies, Team Leadership",
//     total_reviews: 75,
//     total_students: 300,
//     link: "https://example.com",
//   },
//   {
//     id: "",
//     user: {
//       username: "emilydavis",
//       email: "emilydavis@example.com",
//       first_name: "Emily",
//       last_name: "Davis",
//     },
//     imageUrl:
//       "https://images.pexels.com/photos/9065297/pexels-photo-9065297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     education: "Bachelor of Arts in Graphic Design",
//     bio: "Emily is a UX/UI designer passionate about creating user-friendly and aesthetically pleasing designs. With a background in graphic design and web development, she brings a unique perspective to her work.",
//     experience_years: 7,
//     subjects: "UX/UI Design, Graphic Design, Web Development",
//     total_reviews: 60,
//     total_students: 150,
//     link: "https://example.com",
//   },
// ];

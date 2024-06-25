"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hooks/use-origin";
import { useGetMentorDetailsQuery } from "@/redux/api/mentors/mentor-api-slice";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {
  IconBriefcaseFilled,
  IconLocationFilled,
  IconMapPinFilled,
  IconThumbUpFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import { HiUserGroup } from "react-icons/hi2";
import Image from "next/image";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useParams,
} from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import { Tab, Tabs } from "@nextui-org/react";
import { cn } from "@/lib/cn";
import CardInfo from "../_components/card-info";
import CardIntroduction from "../_components/card-introduction";
import CardEducation from "../_components/card-education";

import CardPaket from "../_components/card-pricing";
import CardJadwalDanLayanan from "../_components/CardJadwalDanLayanan";
type MentorProps = {};

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
      <MaxWidthWrapper className={cn("max-w-7xl")}>
        <div className="md:py-40">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <CardInfo />
            </div>
            <div className="col-span-3 space-y-8">
              <CardIntroduction />
              <div className="grid grid-cols-2 gap-4">
                <CardEducation />
              </div>
              <CardJadwalDanLayanan />
             
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default CounselingDetail;

import { Button } from "@/components/ui/button";
import { useGetMentorDetailsQuery } from "@/redux/api/mentors/mentor-api-slice";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import {
  IconBriefcaseFilled,
  IconMapPinFilled,
  IconThumbUpFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { HiUserGroup } from "react-icons/hi2";

const CardInfo = () => {
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

  const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_MEDIA_URL;

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
      {mentor && (
        <Card className=" max-w-full md:max-w-[300px]">
          <CardHeader className="justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-5">
              <Image
                width={500}
                height={500}
                alt="avatar"
                src={`${cloudinary}${mentor.user.photo_profile}` ?? ""}
                className="flex items-center object-top object-fill justify-center rounded-full max-w-[100px] max-h-[100px] border-4 border-[#c9c9cd]"
              />
              <div className="flex flex-col gap-1 items-center justify-center">
                <h4 className="text-sm font-semibold leading-none text-default-600 text-center">
                  {mentor.title}{" "}
                </h4>
                <h5 className="font-semibold  tracking-tight text-default-400">
                  {mentor.user.first_name} {mentor.user.last_name}
                </h5>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            <ul className="flex flex-col items-start justify-center text-start py-4 px-6 gap-2">
              <li className="flex items-center justify-center gap-2">
                <span>
                  <IconThumbUpFilled color="#4ac959" />
                </span>
                <span>{mentor.total_reviews} + Ulasan</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span>
                  <HiUserGroup color="#2D2D2D" size={24} />
                </span>
                <span>{mentor.total_sessions} + Session</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span>
                  <IconBriefcaseFilled color="#fbcf33" />
                </span>
                {mentor.experience_years <= 3 && <span>1 - 3 Tahun</span>}
                {mentor.experience_years > 3 &&
                  mentor.experience_years <= 5 && <span>3 - 5 Tahun</span>}
                {mentor.experience_years > 5 &&
                  mentor.experience_years <= 10 && <span>5 - 10 Tahun</span>}
              </li>
              <li className="flex gap-2">
                <span>
                  <IconMapPinFilled color="#ea0606" size={24} />
                </span>
                {mentor && (
                  <span>
                    {mentor.user.country}, {mentor.user.province}, {" "}
                    {mentor.user.city}
                  </span>
                )}
              </li>
            </ul>
          </CardBody>
          <CardFooter>
            <Link className="w-full" href={mentor.linkedin ?? ""}>
              <Button className="flex rounded-full w-full" size="sm">
                Linkedin
              </Button>
            </Link>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default CardInfo;

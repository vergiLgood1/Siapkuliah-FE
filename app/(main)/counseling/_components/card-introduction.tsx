import { useGetMentorDetailsQuery } from "@/redux/api/mentors/mentor-api-slice";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useParams } from "next/navigation";
import ReactPlayer from "react-player";

const CardIntroduction = () => {
  const params = useParams();
  const { id } = params;

  const {
    data: mentor,
    error,
    isLoading,
  } = useGetMentorDetailsQuery(id as string);

  const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY_MEDIA_URL;

  return (
    <>
      {mentor && (
        <Card>
          <CardHeader className="flex flex-col items-start md:gap-6">
            <h2 className="text-2xl text-default-900 font-semibold">
              Detail Counselor
            </h2>
            <div className="flex w-full items-center justify-center">
              <ReactPlayer
                url={`${cloudinary}${mentor.video_intro}`}
                controls={true}
                width="100%"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  alignItems: "center",
                }}
              />
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex gap-4 mb-6">
              <div className="space-y-1">
                <span className="text-base text-default-900 font-semibold">
                  SPPIK
                </span>
                <p className="text-small text-[#A1A1A1] font-medium">
                  {mentor.sippk}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-base text-default-900 font-semibold">
                  STRPK
                </span>
                <p className="text-small text-[#A1A1A1] font-medium">
                  {mentor.strpk}
                </p>
              </div>
            </div>
            <p className="text-[#A1A1A1] font-medium text-pretty">
              {mentor.bio}
            </p>
          </CardBody>
        </Card>
      )}
    </>
  );
};

export default CardIntroduction;

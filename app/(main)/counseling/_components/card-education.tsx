import { useGetMentorDetailsQuery } from "@/redux/api/mentors/mentor-api-slice";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { spec } from "node:test/reporters";

const CardEducation = () => {
  const params = useParams();
  const { id } = params;

  const {
    data: mentor,
    error,
    isLoading,
  } = useGetMentorDetailsQuery(id as string);

  return (
    <>
      {mentor && (
        <>
          <Card className="">
            <CardHeader>
              <h2 className="text-2xl text-default-900 font-semibold">
                Detail Counselor
              </h2>
            </CardHeader>
            <CardBody className="gap-4">
              <div className="space-y-2">
                {Array.isArray(mentor.educations) &&
                  mentor.educations.map((item, i) => (
                    <div key={i}>
                      <span className="font-semibold text-base">
                        {item.institution}
                      </span>
                      <p>
                        {item.graduation_year} {item.field_of_study}{" "}
                      </p>
                    </div>
                  ))}
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>
              <h2 className="text-2xl text-default-900 font-semibold">
                Topic expertise
              </h2>
            </CardHeader>
            <CardBody className="">
              <div className="flex flex-wrap gap-2">
                {Array.isArray(mentor.specializations) &&
                  mentor.specializations.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold"
                    >
                      {item.specialization}
                    </span>
                  ))}
              </div>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
};

export default CardEducation;

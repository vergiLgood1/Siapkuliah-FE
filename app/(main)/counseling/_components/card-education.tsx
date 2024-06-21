import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/react";

const CardEducation = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <h2 className="text-2xl text-default-900 font-semibold">
            Detail Counselor
          </h2>
        </CardHeader>
        <CardBody className="gap-4">
          <div className="space-y-2">
            <span className="font-semibold text-base">Universitas Indonesia</span>
            <p>2016 - Sarjana Psikologi</p>
          </div>
          <div className="space-y-2">
            <span className="font-semibold text-base">Universitas Indonesia</span>
            <p>2016 - Sarjana Psikologi</p>
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
            <span className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold">Hubungan sosial</span>
            <span className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold">Psikologi</span>
            <span className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold">Computer science</span>
            <span className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold">Manufacturing</span>
            <span className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold">Esthablished engineers</span>
            <span className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold">Goalld</span>
            <span className="text-xs py-2 px-4 bg-[#EBEBEB] rounded-full text-default-900 font-semibold">Anjay mabar</span>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CardEducation;

import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/react";
import { useParams } from "next/navigation";

import { useGetAllPricingSessionsQuery } from "@/redux/api/pricing/pricing-session-api";
import { useGetMentorDetailsQuery } from "@/redux/api/mentors/mentor-api-slice";

import { usePricingSelection } from "@/hooks/counseling-details/use-pricing-selection";
import { useTimeSelection } from "@/hooks/counseling-details/use-time-selection";
import { useDateSelection } from "@/hooks/counseling-details/use-date-selection";
import PricingCard from "./card-pricing";
import DateSelection from "./date-selection";
import TimeSelection from "./time-selection";
import { format } from "date-fns";

const CardJadwalDanLayanan: React.FC = () => {
  const params = useParams();
  const { id } = params as { id: string };
  const { data: pricing } = useGetAllPricingSessionsQuery();
  const { data: mentor } = useGetMentorDetailsQuery(id);

  const { selectedPricing, handlePricingClick } = usePricingSelection();
  const { date, setDate } = useDateSelection();
  const { selectedTime, handleTimeClick } = useTimeSelection();

  const handleSubmit = () => {
    if (!selectedPricing.name || !selectedTime) {
      return;
    }

    console.log(
      `Selected pricing: ${selectedPricing.name}, Selected time: ${selectedTime}`
    );
  };

  return (
    <>
      <Card>
        <CardHeader>
          <h2 className="text-2xl text-default-900 font-semibold">
            Jadwal dan layanan tersedia
          </h2>
        </CardHeader>
        <CardBody>
          <div className="flex w-full flex-col gap-y-2">
            <h2 className="text-base text-default-900 font-semibold">
              Pilih layanan
            </h2>
            <Tabs color="primary" variant="bordered" aria-label="Options">
              <Tab
                className="text-default-900 font-semibold"
                key="e-counseling"
                title="E-Counseling"
              >
                <Card className="bg-[#f3f4f6] shadow-none border-1 border-[#dee2e6 ]">
                  <CardBody className="p-6 text-[#52525B] font-medium">
                    Konseling online via chat/call/video call dengan psikolog
                    Ibunda.id. Bisa dilakukan kapan saja, di mana saja.
                  </CardBody>
                </Card>
              </Tab>
              <Tab isDisabled key="Counseling" title="Counseling">
                <Card>
                  <CardBody className="p-6">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </CardBody>
        <CardHeader>
          <h2 className="text-2xl text-default-900 font-semibold">
            Pilih paket
          </h2>
        </CardHeader>
        <PricingCard
          pricing={pricing || []}
          selectedPricing={selectedPricing}
          handlePricingClick={handlePricingClick}
        />
        <CardHeader>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-default-900 font-semibold">
              Pilih tanggal dan waktu
            </h2>
            <DateSelection date={date} setDate={setDate} />
            <TimeSelection
              mentor={mentor || null}
              selectedTime={selectedTime}
              handleTimeClick={handleTimeClick}
            />
          </div>
        </CardHeader>
      </Card>
      {selectedPricing?.name && selectedTime && (
        <div className="fixed col-span-2 bottom-0 w-full ">
          <div className="flex flex-col w-full bg-red-500">
            <h2>Rabu</h2>
            <div className="flex space-x-2">
              <span>{date ? format(date, "dd-MM-yyyy") : ""}</span>
              <span>|</span>
              <span>{selectedTime}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardJadwalDanLayanan;

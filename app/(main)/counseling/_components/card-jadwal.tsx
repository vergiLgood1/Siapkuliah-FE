import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/react";
import CardPaket from "./card-paket";
import { cn } from "@/lib/cn";
import { DatePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CardJadwalDanLayanan = () => {
  const [selectedTime, setIsSelectedTime] = useState();
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
        <div className="flex flex-wrap gap-4 p-3">
          <Card className={cn("shadow-none border-2 border-[#dee2e6]")}>
            <CardBody className="flex flex-col items-center justify-center text-center gap-2">
              <span className=" w-full text-xs p-1 bg-[#2D2D2D] text-white font-semibold uppercase rounded-lg">
                Sesi 1
              </span>
              <p className="text-lg text-[#2D2D2D] font-semibold">
                RP. 200.000
              </p>
              <p className="text-xs text-[#A1A1A1] font-semibold">
                Belaku hingga 1 hari
              </p>
            </CardBody>
          </Card>
          <Card className={cn("shadow-none border-2 border-[#f0f0f0]")}>
            <CardBody className="flex flex-col items-center justify-center text-center gap-2">
              <span className=" w-full text-xs p-1 bg-[#2D2D2D] text-white font-semibold uppercase rounded-lg">
                Sesi 1
              </span>
              <p className="text-lg text-[#2D2D2D] font-semibold">
                RP. 200.000
              </p>
              <p className="text-xs text-[#A1A1A1] font-semibold">
                Belaku hingga 1 hari
              </p>
            </CardBody>
          </Card>
          <Card className={cn("shadow-none border-2 border-[#f0f0f0]")}>
            <CardBody className="flex flex-col items-center justify-center text-center gap-2">
              <span className=" w-full text-xs p-1 bg-[#2D2D2D] text-white font-semibold uppercase rounded-lg">
                Sesi 1
              </span>
              <p className="text-lg text-[#2D2D2D] font-semibold">
                RP. 200.000
              </p>
              <p className="text-xs text-[#A1A1A1] font-semibold">
                Belaku hingga 1 hari
              </p>
            </CardBody>
          </Card>
          <Card className={cn("shadow-none border-2 border-[#f0f0f0]")}>
            <CardBody className="flex flex-col items-center justify-center text-center gap-2">
              <span className=" w-full text-xs p-1 bg-[#2D2D2D] text-white font-semibold uppercase rounded-lg">
                Sesi 1
              </span>
              <p className="text-lg text-[#2D2D2D] font-semibold">
                RP. 200.000
              </p>
              <p className="text-xs text-[#A1A1A1] font-semibold">
                Belaku hingga 1 hari
              </p>
            </CardBody>
          </Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-default-900 font-semibold">
                Pilih tanggal dan waktu
              </h2>
              <div className="flex gap-4">
                <DatePicker />
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl text-default-900 font-semibold">
                    Siang
                  </h2>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      10:00 - 11:00
                    </Button>
                    <Button
                    variant="outline"
                    size="sm">10:00 - 11:00</Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl text-default-900 font-semibold">
                    Malam
                  </h2>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      19:00 - 20:00
                    </Button>
                    <Button size="sm">21:00 - 22:00</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </div>
      </Card>
    </>
  );
};

export default CardJadwalDanLayanan;

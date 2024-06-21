import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

const CardPaket = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-default-900">
          Jadwal dan layanan tersedia
        </h2>
        <Card>
          <CardHeader>
            <span>1 sesi</span>
          </CardHeader>
          <CardBody>RP. 200.000</CardBody>
          <CardFooter>Belaku hingga 1 hari</CardFooter>
        </Card>
      </div>
    </>
  );
};

export default CardPaket;

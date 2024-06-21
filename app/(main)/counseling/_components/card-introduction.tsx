import { Card, CardBody, CardHeader } from "@nextui-org/card";
import ReactPlayer from "react-player";

const CardIntroduction = () => {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-col items-start gap-6">
          <h2 className="text-2xl text-default-900 font-semibold">
            Detail Counselor
          </h2>
          <div className="flex w-full items-center justify-center">
            <ReactPlayer
              url="https://videos.pexels.com/video-files/6655806/6655806-hd_1920_1080_30fps.mp4"
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
              <span className="text-base text-default-900 font-semibold">SPPIK</span>
              <p className="text-small text-[#A1A1A1] font-medium">
                13 24 8 2 1 22-4212225
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-base text-default-900 font-semibold">STRPK</span>
              <p className="text-small text-[#A1A1A1] font-medium">
                13 24 8 2 1 22-4212225
              </p>
            </div>
          </div>
          <p className="text-[#A1A1A1] font-medium text-pretty">
            Marissa Meditania, M.Psi., Psikolog merupakan psikolog klinis yang
            biasa membantu remaja dan dewasa mengatasi permasalahan psikologis
            meliputi masalah emosional (kecemasan dan depresi), hubungan relasi
            (teman, keluarga, dan pasangan), stress dan burnout (di tempat kerja
            maupun peran sebagai orang tua), gangguan kepribadian, OCD, Fobia,
            dan lain-lain. Terapi yang biasa digunakan adalah Cognitive
            Behavioural Therapy (CBT), Rational-Emotive Behavioural Therapy
            (REBT), Solution-Focused Therapy, Exposure Therapy, dan lain-lain.
            Marissa juga sering memberikan psikoedukasi melalui seminar atau
            webinar terkait workplace Issue, self-development dan parenting.
          </p>
        </CardBody>
      </Card>
    </>
  );
};

export default CardIntroduction;

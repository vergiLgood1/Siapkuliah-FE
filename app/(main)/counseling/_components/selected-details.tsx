import { Button } from "@/components/ui/button";
import { useDateSelection } from "@/hooks/counseling-details/use-date-selection";
import { usePricingSelection } from "@/hooks/counseling-details/use-pricing-selection";
import { useTimeSelection } from "@/hooks/counseling-details/use-time-selection";
import { format } from "date-fns";
import Link from "next/link";
import { useParams } from "next/navigation";

interface SelectedDetailsProps {
  selectedPricingName: string | null;
  selectedTime: string | null;
  date: Date | undefined;
}

const SelectedDetails: React.FC<SelectedDetailsProps> = ({
  selectedPricingName,
  selectedTime,
  date,
}) => {
  if (!selectedPricingName || !selectedTime) return null;

  return (
    <>
      <nav className="flex fixed bottom-0 py-4 border-solid border-t-2 bg-white z-[99999] mx-auto w-full max-w-screen-2xl px-2.5 md:px-12 2xl:px-12">
        <div className="flex flex-col w-full space-y-1">
          <h2 className="font-semibold text-default-900">Rabu</h2>
          <div className="flex space-x-2">
            <small className="text-[#67748E] font-medium">
              {date ? format(date, "dd-MM-yyyy") : ""} | {selectedTime}
            </small>
          </div>
        </div>
        <Link href="" className="flex items-center justify-center">
          <Button>Buat janji</Button>
        </Link>
      </nav>
    </>
  );
};

export default SelectedDetails;

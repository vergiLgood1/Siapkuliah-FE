import React from "react";
import { Button } from "@/components/ui/button";

interface Availability {
  id: string;
  day_of_week: string;
  start_time: string;
  end_time: string;
}

interface TimeSelectionItem {
  availabilities: Availability[];
}

interface TimeSelectionProps {
  mentor: TimeSelectionItem | null;
  selectedTime: string | null;
  handleTimeClick: (time: string) => void;
}

const TimeSelection: React.FC<TimeSelectionProps> = ({
  mentor,
  selectedTime,
  handleTimeClick,
}) => {
  if (!mentor) return null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const time = e.currentTarget.dataset.time!;
    handleTimeClick(time);
  };

  const categorizeTime = (start: string, end: string) => {
    if (start < "12:00") return "Pagi";
    if (start >= "12:00" && end <= "17:00") return "Siang";
    return "Malam";
  };

  const groupedAvailabilities = mentor.availabilities.reduce(
    (acc: { [key: string]: Availability[] }, availability) => {
      const category = categorizeTime(availability.start_time, availability.end_time);
      if (!acc[category]) acc[category] = [];
      acc[category].push(availability);
      return acc;
    },
    {}
  );

  return (
    <>
      {Object.entries(groupedAvailabilities).map(([category, availabilities], i) => (
        <div key={i} className="flex flex-col gap-4">
          <h2 className="text-2xl text-default-900 font-semibold">{category}</h2>
          <div className="flex gap-2">
            {availabilities.map((item) => (
              <Button
                key={item.id}
                size="sm"
                variant={
                  selectedTime === `${item.start_time} - ${item.end_time}`
                    ? "default"
                    : "outline"
                }
                onClick={handleClick}
                data-time={`${item.start_time} - ${item.end_time}`}
              >
                {item.start_time} - {item.end_time}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default TimeSelection;

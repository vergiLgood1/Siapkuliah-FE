import { useState } from "react";

export const useTimeSelection = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    console.log(`Selected time: ${time}`);
  };

  return { selectedTime, handleTimeClick };
};

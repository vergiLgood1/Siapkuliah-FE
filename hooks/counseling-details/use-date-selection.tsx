import React, { useState } from "react";
import { format } from "date-fns";

export const useDateSelection = () => {
  const [date, setDate] = React.useState<Date>();
  // const [date, setDate] = useState<Date | undefined>(undefined);

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      const formattedDate = format(date, "dd-MM-yyyy");
      // console.log(`Selected date: ${formattedDate}`);
      setDate(date);
    }
  };

  return { date, setDate, handleDateSelect };
};

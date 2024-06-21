"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/cn";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[200px] h-auto justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <div>
            <CalendarIcon className="mr-2 h-6 w-6" />
          </div>
          {date ? (
            format(date, "dd LLL, y")
          ) : (
            <div className="flex flex-col space-y-2">
              <span className="text-xs font-semibold text-muted-foreground">Pilih tanggal</span>
              <span className="block font-semibold">
                {format(new Date(), "dd LLL, y")}
              </span>
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}

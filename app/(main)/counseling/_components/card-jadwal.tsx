// import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
// import { Tab, Tabs } from "@nextui-org/react";
// import { cn } from "@/lib/cn";
// import { DatePicker } from "@/components/date-picker";
// import { Button } from "@/components/ui/button";
// import { useGetAllPricingSessionsQuery } from "@/redux/api/pricing/pricing-session-api";
// import { useGetMentorDetailsQuery } from "@/redux/api/mentors/mentor-api-slice";
// import { useParams } from "next/navigation";

// import { format } from "date-fns";
// import { usePricingSelection } from "@/hooks/counseling-details/use-pricing-selection";
// import { useTimeSelection } from "@/hooks/counseling-details/use-time-selection";
// import { useDateSelection } from "@/hooks/counseling-details/use-date-selection";
// import { DatePickerForm } from "@/components/date-picker2";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { CalendarIcon } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import React from "react";

// // const FormSchema = z.object({
// //   dob: z.date({
// //     required_error: "A date of birth is required.",
// //   }),
// // });

// const CardJadwalDanLayanan = () => {
//   const params = useParams();
//   const { id } = params;
//   const { data: pricing, error, isLoading } = useGetAllPricingSessionsQuery();
//   const { data: mentor } = useGetMentorDetailsQuery(id as string);
//   // const [date, setDate] = React.useState<Date>();

//   const { selectedPricing, handlePricingClick } = usePricingSelection();
//   const { date, setDate, handleDateSelect } = useDateSelection();
//   const { selectedTime, handleTimeClick } = useTimeSelection();

//   const handleSubmit = () => {
//     if (!selectedPricing || !selectedTime) {
//       return;
//     }

//     // Lakukan sesuatu dengan pilihan yang dipilih, misalnya mengirim ke server
//     console.log(
//       `Selected pricing: ${selectedPricing}, Selected time: ${selectedTime}`
//     );
//   };

//   // const form = useForm<z.infer<typeof FormSchema>>({
//   //   resolver: zodResolver(FormSchema),
//   // });

//   // function onSubmit(data: z.infer<typeof FormSchema>) {
//   //   console.log(JSON.stringify(data, null, 2));
//   //   const formattedDate = format(data.dob, "dd-MM-yyyy");
//   //   console.log(`Selected date: ${formattedDate}`);
//   // }

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <h2 className="text-2xl text-default-900 font-semibold">
//             Jadwal dan layanan tersedia
//           </h2>
//         </CardHeader>
//         <CardBody>
//           <div className="flex w-full flex-col gap-y-2">
//             <h2 className="text-base text-default-900 font-semibold">
//               Pilih layanan
//             </h2>
//             <Tabs color="primary" variant="bordered" aria-label="Options">
//               <Tab
//                 className="text-default-900 font-semibold"
//                 key="e-counseling"
//                 title="E-Counseling"
//               >
//                 <Card className="bg-[#f3f4f6] shadow-none border-1 border-[#dee2e6 ]">
//                   <CardBody className="p-6 text-[#52525B] font-medium">
//                     Konseling online via chat/call/video call dengan psikolog
//                     Ibunda.id. Bisa dilakukan kapan saja, di mana saja.
//                   </CardBody>
//                 </Card>
//               </Tab>
//               <Tab isDisabled key="Counseling" title="Counseling">
//                 <Card>
//                   <CardBody className="p-6">
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                     laboris nisi ut aliquip ex ea commodo consequat. Duis aute
//                     irure dolor in reprehenderit in voluptate velit esse cillum
//                     dolore eu fugiat nulla pariatur.
//                   </CardBody>
//                 </Card>
//               </Tab>
//             </Tabs>
//           </div>
//         </CardBody>
//         <CardHeader>
//           <h2 className="text-2xl text-default-900 font-semibold">
//             Pilih paket
//           </h2>
//         </CardHeader>
//         <div className="flex flex-wrap gap-4 p-3">
//           {pricing?.map((item, i) => (
//             <div onClick={() => handlePricingClick(item)}>
//               <Card
//                 key={i}
//                 className={cn(
//                   "shadow-none border-2 border-[#dee2e6] cursor-pointer",
//                   selectedPricing?.name === item.name
//                     ? "bg-[#171717] border-transparent"
//                     : "border-[#dee2e6]"
//                 )}
//               >
//                 <CardBody className="flex flex-col items-center justify-center text-center gap-2">
//                   <span
//                     className={cn(
//                       "w-full text-xs p-1 bg-[#2D2D2D] text-white font-semibold uppercase rounded-lg",
//                       selectedPricing?.name === item.name &&
//                         "bg-[#FFFF] text-[#2D2D2D]"
//                     )}
//                   >
//                     {item.name}
//                   </span>
//                   <p
//                     className={cn(
//                       "text-lg text-[#2D2D2D] font-semibold",
//                       selectedPricing?.name === item.name && "text-[#FFFF]"
//                     )}
//                   >
//                     {item.price}
//                   </p>
//                   <p className="text-xs text-[#A1A1A1] font-semibold">
//                     Belaku hingga {item.validity_days} hari
//                   </p>
//                 </CardBody>
//               </Card>
//             </div>
//           ))}
//           <CardHeader>
//             <div className="flex flex-col gap-4">
//               <h2 className="text-2xl text-default-900 font-semibold">
//                 Pilih tanggal dan waktu
//               </h2>
//               <div className="flex flex-col gap-4">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-[200px] h-auto justify-start text-left font-normal",
//                         !date && "text-muted-foreground"
//                       )}
//                     >
//                       <div>
//                         <CalendarIcon className="mr-2 h-6 w-6" />
//                       </div>
//                       {date ? (
//                         format(date, "dd LLL, y")
//                       ) : (
//                         <div className="flex flex-col space-y-2">
//                           <span className="text-xs font-semibold text-muted-foreground">
//                             Pilih tanggal
//                           </span>
//                           <span className="block font-semibold">
//                             {format(new Date(), "dd LLL, y")}
//                           </span>
//                         </div>
//                       )}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0">
//                     <Calendar
//                       mode="single"
//                       onSelect={setDate}
//                       selected={date}
//                       initialFocus
//                       numberOfMonths={2}
//                     />
//                   </PopoverContent>
//                 </Popover>
//                 {Array.isArray(mentor?.availabilities) &&
//                   mentor?.availabilities.map((item, i) => (
//                     <div key={i} className="flex flex-col gap-4">
//                       {item.start_time < "12.00" && (
//                         <h2 className="text-2xl text-default-900 font-semibold">
//                           Pagi
//                         </h2>
//                       )}
//                       {item.start_time > "12.00" &&
//                         item.end_time <= "17.00" && (
//                           <h2 className="text-2xl text-default-900 font-semibold">
//                             Siang
//                           </h2>
//                         )}
//                       {item.start_time > "17.00" && (
//                         <h2 className="text-2xl text-default-900 font-semibold">
//                           Malam
//                         </h2>
//                       )}
//                       <div className="flex gap-2">
//                         <Button
//                           size="sm"
//                           variant={
//                             selectedTime ===
//                             `${item.start_time} - ${item.end_time}`
//                               ? "default"
//                               : "outline"
//                           }
//                           onClick={handleTimeClick}
//                           data-time={`${item.start_time} - ${item.end_time}`}
//                         >
//                           {item.start_time} - {item.end_time}
//                         </Button>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </CardHeader>
//         </div>
//       </Card>
//       {selectedPricing?.name && selectedTime && (
//         <div className="fixed col-span-2 bottom-0 w-full ">
//           <div className="flex flex-col w-full bg-red-500">
//             <h2>Rabu</h2>
//             <div className="flex space-x-2">
//               <span>{date ? format(date, "dd-MM-yyyy") : ""}</span>
//               <span>|</span>
//               <span>{selectedTime}</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CardJadwalDanLayanan;

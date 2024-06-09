import { BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconShieldLock, IconUserPlus } from "@tabler/icons-react";
import {
  ChevronDown,
  ChevronLeft,
  LayoutTemplate,
  Search,
  User,
} from "lucide-react";

const users = [
  {
    name: "Andi Wijaya",
    email: "andi.wijaya@example.com",
    organization: "SMA Negeri 1 Jakarta",
    data_created: "2024-06-04T12:00:00Z",
  },
  {
    name: "Budi Santoso",
    email: "budi.santoso@example.com",
    organization: "SMA Negeri 2 Bandung",
    data_created: "2024-06-04T13:00:00Z",
  },
  {
    name: "Citra Dewi",
    email: "citra.dewi@example.com",
    organization: "SMA Negeri 3 Surabaya",
    data_created: "2024-06-04T14:00:00Z",
  },
  {
    name: "Dewi Sari",
    email: "dewi.sari@example.com",
    organization: "SMA Negeri 4 Yogyakarta",
    data_created: "2024-06-04T15:00:00Z",
  },
  {
    name: "Eko Prasetyo",
    email: "eko.prasetyo@example.com",
    organization: "SMA Negeri 5 Medan",
    data_created: "2024-06-04T16:00:00Z",
  },
];

export function TableShowcase() {
  return (
    <>
      <div className="py-10 md:py-28 space-y-20 border-b-4 border-[#f5f5f5]">
        <BentoGrid className="flex mx-auto items-center justify-center max-w-4xl">
          <h2 className="col-span-3 text-center text-2xl text-[#2d2d2d]">
            Created by founders and engineers to help your business generate
            more revenue, reduce costs and make lifelong loyal customers – in
            one place.
          </h2>
        </BentoGrid>
        <BentoGrid className="flex items-center justify-center bg-[#f5f5f5] rounded-xl overflow-hidden relative max-h-[676px] md:max-h-[600px] ">
          <div className="col-span-3 py-10 px-8 translate-x-[22%] translate-y-0 scale-80 sm:translate-x-[8%] sm:translate-y-[10%] sm:scale-90 lg:translate-x-[6%] lg:translate-y-[16%] lg:scale-100">
            <div className="flex flex-col w-full gap-6 bg-white py-10 px-8 rounded-xl select-none">
              <div className="flex select-none ">
                <ChevronLeft />
                Home
              </div>
              <div className="grid gap-[3.5rem] grid-cols-[15.5rem_auto]">
                <div className="">
                  <div className="py-6 px-4 mb-6 text-2xl font-medium">
                    User
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4">
                    <div className="flex items-center justify-between w-full p-4 bg-[#f5f5f5] rounded-md ">
                      <div className="flex gap-2">
                        <User />
                        Users
                      </div>
                      <div className="flex items-end justify-end ">2.000</div>
                    </div>
                    <div className="flex items-center justify-between w-full p-4">
                      <div className="flex gap-2">
                        <LayoutTemplate />
                        Subscribers
                      </div>
                      <div className="flex items-end justify-end ">50</div>
                    </div>
                    <div className="flex items-center justify-between w-full p-4">
                      <div className="flex gap-2">
                        <IconShieldLock />
                        Access request
                      </div>
                      <div className="flex items-end justify-end">256</div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-1 items-center max-w-[56.25rem] ">
                    <div className="flex items-center justify-between flex-grow px-[2px] py-6">
                      <div className="text-2xl font-medium">All users</div>
                      <div className="flex items-center gap-2">
                        <div>
                          <Search />
                        </div>
                        <div>
                          <Button variant="outline" className="pointer-events-none">
                            Import
                          </Button>
                        </div>
                        <div className="flex items-center ">
                          <Button className=" gap-2 pointer-events-none">
                            <IconUserPlus />
                            Add user
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center py-4 ">
                    <Input
                      placeholder="Filter emails..."
                      className="max-w-sm select-none bg-[#f5f5f5] pointer-events-none"
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto pointer-events-none">
                          All organization{" "}
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem>
                          Status Bar
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem disabled>
                          Activity Bar
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem>
                          Panel
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div>
                    <Table className="pointer-events-none">
                      <TableCaption>A list of your users.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[400px]">Name</TableHead>
                          <TableHead className="w-[400px]">Email</TableHead>
                          <TableHead className="w-[400px]">
                            Organization
                          </TableHead>
                          <TableHead className="w-[400px] text-center">
                            Date created
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.name}>
                            <TableCell className="font-medium">
                              {user.name}
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.organization}</TableCell>
                            <TableCell className="text-center">
                              {user.data_created}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableFooter></TableFooter>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BentoGrid>
      </div>
    </>
  );
}

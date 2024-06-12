"use client";

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";

import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/cn";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { NavigationsMenu } from "./menubar";
import { Logo } from "./logo";


const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    // <nav
    //   className={cn(
    //     "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center justify-center w-full fixed top-0 w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 py-8 md:px-6 mx-auto",
    //     scrolled && "border-b shadow-sm dark:shadow-[#3b3b3b]"
    //   )}
    // >
    //   <MaxWidthWrapper>
    //     <div className="flex h-14 items-center justify-between bg-red-600">
    //       <div>
    //
    //       </div>
    //       <div>
    //         <NavigationsMenu />
    //       </div>
    //       <div className="hidden items-center space-x-4 sm:flex">
    //         <Button variant="ghost">
    //           <Link className="text-md font-medium" href="/auth/login">
    //             Sign in
    //           </Link>
    //         </Button>
    //         <Button>
    //           <Link className="text-md font-medium" href="/auth/login">
    //             Start for free
    //           </Link>
    //         </Button>
    //         {/* <ModeToggle /> */}
    //       </div>
    //     </div>
    //   </MaxWidthWrapper>
    // </nav>
    <header className="flex flex-wrap md:justify-start md:flex-nowrap w-full">
      <nav
        className={cn(
          "fixed top-0 z-50 w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 py-8 md:px-6 lg:px-12 mx-auto bg-white",
          scrolled && "border-b shadow-sm dark:shadow-[#3b3b3b]"
        )}
      >
        <div className="md:col-span-3">
          <Link href="/" className="flex z-40 font-semibold">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
          <div className="hidden lg:block">
            <Button className="px-4 py-6" variant="ghost">
              <Link className="text-[16px] font-medium" href="/auth/login">
                Sign in
              </Link>
            </Button>
          </div>
          <div className="hidden lg:block">
            <Button className="px-4 py-6">
              <Link className="text-[16px] font-medium" href="/auth/login">
                Start for free
              </Link>
            </Button>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {/* <ModeToggle /> */}
        </div>

        <div
          id="navbar-collapse-with-animation"
          className="hhs-collapse hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
        >
          <div className=" flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0 hidden lg:flex">
            <NavigationsMenu />
          </div>
        </div>
      </nav>
    </header>
    // <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7">
    //   <nav
    //     className="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 mx-auto"
    //     aria-label="Global"
    //   >
    //     <div className="md:col-span-3">
    //       <Link href="/" className="flex z-40 font-semibold">
    //         <Logo />
    //       </Link>
    //     </div>

    //     <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
    //       <Button className="px-4 py-6" variant="ghost">
    //         <Link className="text-[16px] font-medium" href="/auth/login">
    //           Sign in
    //         </Link>
    //       </Button>
    //       <Button className="px-4 py-6">
    //         <Link className="text-[16px] font-medium" href="/auth/login">
    //           Start for free
    //         </Link>
    //       </Button>

    //       <div className="md:hidden">
    //         <button
    //           type="button"
    //           className="hs-collapse-toggle size-[38px] flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
    //           data-hs-collapse="#navbar-collapse-with-animation"
    //           aria-controls="navbar-collapse-with-animation"
    //           aria-label="Toggle navigation"
    //         >
    //           <svg
    //             className="hs-collapse-open:hidden flex-shrink-0 size-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidht="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <line x1="3" x2="21" y1="6" y2="6" />
    //             <line x1="3" x2="21" y1="12" y2="12" />
    //             <line x1="3" x2="21" y1="18" y2="18" />
    //           </svg>
    //           <svg
    //             className="hs-collapse-open:block hidden flex-shrink-0 size-4"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             stroke-width="2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M18 6 6 18" />
    //             <path d="m6 6 12 12" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     <div
    //       id="navbar-collapse-with-animation"
    //       className="hs-collapse hidden transition-all duration-300 basis-full grow md:block md:w-auto md:basis-auto md:order-2 md:col-span-6"
    //     >
    //       <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:justify-center md:items-center md:gap-y-0 md:gap-x-7 md:mt-0">
    //         <NavigationsMenu />
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  );
};

export default Navbar;

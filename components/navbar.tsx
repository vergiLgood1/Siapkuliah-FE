"use client";

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";

import MaxWidthWrapper from "./max-width-wrapper";
import { cn } from "@/lib/cn";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { NavigationsMenu } from "./menubar";
import { Logo } from "./logo";
import HumbergerMenu from "./humberger-menu";

const Navbar = () => {
  const scrolled = useScrollTop();

  return (
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
              <Link className="text-[16px] font-medium" href="/auth/register">
                Start for free
              </Link>
            </Button>
          </div>
          <HumbergerMenu/>
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
  );
};

export default Navbar;

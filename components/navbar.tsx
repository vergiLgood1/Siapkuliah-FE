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
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/api/auth-api-slice";
import { logout as setLogout } from "@/redux/api/auth-slice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const dispacth = useAppDispatch();
  const { isAuthenticated } = useAppSelector(state => state.auth);
  const [logout, { isLoading }] = useLogoutMutation();

  const router = useRouter();

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispacth(setLogout());
      })
      .finally(() => {
        router.push("/");
      });
  };

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

        {!isAuthenticated && (
          <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <div className="hidden lg:block">
              <Link className="text-[16px] font-medium" href="/auth/login">
                <Button className="px-4 py-6" variant="ghost">
                  Sign in
                </Button>
              </Link>
            </div>
            <div className="hidden lg:block">
              <Link className="text-[16px] font-medium" href="/auth/register">
                <Button className="px-4 py-6">Start for free</Button>
              </Link>
            </div>
            <HumbergerMenu />
            {/* <ModeToggle /> */}
          </div>
        )}
        {isAuthenticated && (
          <div className="flex items-center gap-x-2 ms-auto py-1 md:ps-6 md:order-3 md:col-span-3">
            <div className="hidden lg:block">
              <Link className="text-[16px] font-medium" href="/auth/register">
                <Button onClick={handleLogout} className="px-4 py-6">
                  Logout
                </Button>
              </Link>
            </div>
            <HumbergerMenu />
            {/* <ModeToggle /> */}
          </div>
        )}

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

"use client";

import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input2";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { useRegister } from "@/hooks";
import { Metadata } from "next";
import { continueWithFacebook, continueWithGoogle } from "@/lib";

type CardProps = React.ComponentProps<typeof Card>;

export const metadata: Metadata = {
  title: "Siap Kuliah | Sign up",
  description: "Siapkuliah",
};

export function CardSingUp({ className, ...props }: CardProps) {
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  } = useRegister();

  return (
    <>
      <Card
        className={cn(
          "max-w-md w-full mx-auto rounded-none border-none md:rounded-2xl shadow-input bg-white dark:bg-black ",
          className
        )}
        {...props}
      >
        <CardHeader className="">
          <CardTitle className="font-semibold text-xl text-neutral-800 dark:text-neutral-200">
            <div className="text-center font-bold text-4xl mb-8">
              Siapkuliah
            </div>
            Create your account
          </CardTitle>
          <CardDescription className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Already have an account?
            <Link
              className="text-blue-600 ml-2 decoration-2 hover:underline font-medium dark:text-blue-500"
              href="/auth/login"
            >
              Sign in here
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 py-0">
          <form className="my-0" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  name="first_name"
                  value={first_name}
                  placeholder="Tyler"
                  type="text"
                  onChange={onChange}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  name="last_name"
                  value={last_name}
                  placeholder="Durden"
                  type="text"
                  onChange={onChange}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                value={email}
                placeholder="projectmayhem@fc.com"
                type="email"
                onChange={onChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                value={password}
                placeholder="••••••••"
                type="password"
                onChange={onChange}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="repassword">Confirm password</Label>
              <Input
                id="repassword"
                name="re_password"
                value={re_password}
                placeholder="••••••••"
                type="password"
                onChange={onChange}
              />
            </LabelInputContainer>
            {isLoading && (
              <div className="flex items-center justify-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                <Spinner size="lg" />
              </div>
            )}
            {!isLoading && (
              <div className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                <Button
                  type="submit"
                  className="w-full flex justify-center items-center"
                >
                  Sign up &rarr;
                </Button>
                <BottomGradient />
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="">
          <div className="w-full">
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <div className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <Button
                  variant="ghost"
                  type="submit"
                  className="w-full flex items-center justify-center"
                  onClick={continueWithGoogle}
                >
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300 mr-2 flex items-center justify-center" />
                  Google
                </Button>
                <BottomGradient />
              </div>

              {/* <IconBrandGoogle className="" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {isLoading ? <Spinner size="sm"/> : "Google"}
              </span>
              <BottomGradient /> */}
              <div className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
                <Button
                  variant="ghost"
                  type="submit"
                  className="w-full flex items-center justify-center"
                  onClick={continueWithFacebook}
                >
                  <IconBrandFacebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300 mr-2 flex items-center justify-center" />
                  Facebook
                </Button>
                <BottomGradient />
              </div>

              {/* <IconBrandFacebook className="" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {isLoading ? <Spinner size="sm"/> : "Facebook"}
              </span>
              */}
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

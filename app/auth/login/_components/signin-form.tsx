"use client";

import { cn } from "@/lib/cn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import LoginForm from "@/components/forms/login-form";
import { FooterForm } from "@/components/forms";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Siapkuliah | Sign in",
    description: "Sign in to your Siapkuliah account",
}

type CardProps = React.ComponentProps<typeof Card>;

export function CardSignIn({ className, ...props }: CardProps) {

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
            Sign in to your account
          </CardTitle>
          <CardDescription className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Don&apos;t have an account?{' '}
            <Link
              className="text-blue-600 ml-2 decoration-2 hover:underline font-medium dark:text-blue-500"
              href="/auth/register"
            >
              Sign up here
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2 py-0">
          <LoginForm/>
        </CardContent>
        <CardFooter className="p-6">
         <FooterForm/>
        </CardFooter>
      </Card>
    </>
  );
}

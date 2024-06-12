import React, { FormEvent } from "react";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { BottomGradient } from "../bottom-gradient";
import { continueWithFacebook, continueWithGoogle } from "@/lib";

interface Props {
  isLoading?: boolean;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const FooterForm = ({ isLoading, onSubmit }: Props) => {
  return (
    
    <div className="flex flex-col w-full items-center justify-center space-y-4 ">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
      {isLoading && (
        <div className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
          <Spinner size="lg" />
        </div>
      )}
      {!isLoading && (
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
      )}
      {isLoading && (
        <div className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
          <Spinner size="lg" />
        </div>
      )}
      {!isLoading && (
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
      )}
    </div>
  );
};

export default FooterForm;

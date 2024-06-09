import { ChangeEvent, FormEvent } from "react";
import FormInput from "./form-input";
import { Spinner } from "../ui/spinner";
import { Button } from "../ui/button";
import { BottomGradient } from "../bottom-gradient";

interface Config {

  labelText: string;
  labelId: string;
  type: string;
  value: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  placeholder?: string;
  required?: boolean;
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({
  config,
  isLoading,
  btnText,
  onChange,
  onSubmit,
}: Props) {
  return (
    <form onSubmit={onSubmit}>
      {config.map((input) => (
        <FormInput
          key={input.labelId}
          labelId={input.labelId}
          type={input.type}
          onChange={onChange}
          value={input.value}
          placeholder={input.placeholder}
          link={input.link}
          required={input.required}
        >
          {input.labelText}
        </FormInput>
      ))}
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
  );
}


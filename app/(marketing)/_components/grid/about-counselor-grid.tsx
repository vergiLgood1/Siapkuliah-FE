import { cn } from "@/lib/cn";

export const AboutCounselrGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const AboutCounselorItem = ({
  className,
  title,
  description,
  imageUrl,
  subtitle,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageUrl?: React.ReactNode;
  subtitle?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 justify-between flex flex-col p-4 space-y-4 ",
        className
      )}
    >
      <div className="flex items-center justify-center rounded-xl dark:bg-black dark:border-white/[0.2] bg-[#F5F5F5]">
        {imageUrl}
      </div>
      <div className="">
        {subtitle}
        <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200 mt-4 mb-4 ">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-base dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { IconBrandAtlassian } from "@/components/tech-brand";
import { BentoGrid } from "@/components/ui/bento-grid";
import { IconBrandGithubCopilot } from "@tabler/icons-react";

const CollectionCustomers = () => {
  return (
    <MaxWidthWrapper>
      <BentoGrid className="max-w-7xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 lg:gap-12 border-b-4 border-[#f5f5f5]  lg:gap-x-clamp-x lg:gap-y-clamp-y ">
        <div className="flex flex-col col-span-4 items-center justify-center">
          <span className=" col-span-4 text-center text-xl md:text-2xl lg:text-5xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm lg:max-w-5xl">
            Knowing our customers
          </span>
        </div>
        {Customer.slice(0, 20).map((item, i) => (
          <div className="flex flex-col items-center justify-center" key={i}>
            <div>{item.logo}</div>
          </div>
        ))}
      </BentoGrid>
    </MaxWidthWrapper>
  );
};

export default CollectionCustomers;

const Customer = [
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
  {
    brandname: "Github copilot",
    logo: <IconBrandAtlassian />,
    description: "",
  },
];

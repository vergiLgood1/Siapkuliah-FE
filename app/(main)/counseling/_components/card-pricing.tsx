import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { cn } from "@/lib/cn";

interface PricingItemProps {
  name: string;
  price: number;
  sessions_included: number;
  validity_days: number;
  // selected: boolean;
  // onClick: () => void;

}

interface PricingCardProps {
  pricing: PricingItemProps[];
  selectedPricing: PricingItemProps;
  handlePricingClick: (item: PricingItemProps) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  pricing,
  selectedPricing,
  handlePricingClick,
}) => {
  return (
    <div className="flex flex-wrap gap-4 p-3">
      {pricing.map((item, i) => (
        <div onClick={() => handlePricingClick(item)} key={i}>
          <Card
            className={cn(
              "shadow-none border-2 border-[#dee2e6] cursor-pointer",
              selectedPricing.name === item.name
                ? "bg-[#171717] border-transparent"
                : "border-[#dee2e6]"
            )}
          >
            <CardBody className="flex flex-col items-center justify-center text-center gap-2">
              <span
                className={cn(
                  "w-full text-xs p-1 bg-[#2D2D2D] text-white font-semibold uppercase rounded-lg",
                  selectedPricing.name === item.name &&
                    "bg-[#FFFF] text-[#2D2D2D]"
                )}
              >
                {item.name}
              </span>
              <p
                className={cn(
                  "text-lg text-[#2D2D2D] font-semibold",
                  selectedPricing.name === item.name && "text-[#FFFF]"
                )}
              >
                {item.price}
              </p>
              <p className="text-xs text-[#A1A1A1] font-semibold">
                Berlaku hingga {item.validity_days} hari
              </p>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;

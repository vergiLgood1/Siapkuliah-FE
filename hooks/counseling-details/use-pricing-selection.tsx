import { useState } from "react";
import { nullable } from "zod";

type PricingItem = {
    name: string;
    price: number;
    sessions_included: number;
    validity_days: number;
  };
  
  // Definisikan type untuk state
  type SelectedPricingState = {
    name: string;
    price: number;
    sessions_included: number;
    validity_days: number;
  };

export const usePricingSelection = () => {
  const [selectedPricing, setSelectedPricing] = useState<SelectedPricingState>({
    name: "",
    price: 0,
    sessions_included: 0,
    validity_days: 0,
  });

  const handlePricingClick = (item: PricingItem) => {
    setSelectedPricing(item);

    console.log(`Selected pricing: ${item.name}`);
    console.log(`Price: ${item.price}`);
    console.log(`Validity Days: ${item.validity_days}`);
  };

  return { selectedPricing, handlePricingClick };
};



import React from "react";
import PricingHero from "./_components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siapkuliah | Pricings",
  description: "Choose the best plan for you",
};

const PricingPage = () => {
  return (
    <main>
      <PricingHero />
    </main>
  );
};

export default PricingPage;

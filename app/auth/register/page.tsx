"use client";

import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { CardSingUp } from "./_components/signup-form";
import { TestimonialCard } from "./_components/testimonial-card";

const RegisterPage = () => {
  return (
    <div className="mt-7">
      <div className="p-4 sm:p-7">
        <MaxWidthWrapper className="flex items-center justify-center ">
          <TestimonialCard/>
          <CardSingUp />
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default RegisterPage;

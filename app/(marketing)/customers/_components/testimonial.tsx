"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";

const TestimonialCustomers = () => {
  return (
    <MaxWidthWrapper>
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-auto py-12 md:py-28 gap-4 md:gap-8 lg:gap-12 border-b-4 border-[#f5f5f5]">
        <ul className="grid gap-8 md:grid-cols-3 md:col-span-3">
          {Testimonial.filter((item) => item.isActive)
            .slice(0, 1)
            .map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-center p-16 bg-[#F5F5F5] row-span-2 col-span-2 rounded-lg hover:border-[#2d2d2d] border-3 border-background"
              >
                <figure className="flex flex-col items-start text-start justify-between gap-16 ">
                  <blockquote className="pt-12">
                    <span className="text-[32px] leading-tight tracking-tighter font-medium">
                      “{item.quote}”
                    </span>
                  </blockquote>
                  <footer>
                    <cite>
                      <span className="block text-[#2d2d2d] font-semibold text-sm">
                        {item.name}
                      </span>
                      <span className="block text-[#2d2d2d] text-sm">
                        {item.position}
                      </span>
                    </cite>
                  </footer>
                </figure>
              </li>
            ))}
          {Testimonial.filter((item) => item.isActive)
            .slice(1, 6)
            .map((item, i) => (
              <li
                key={i + 1}
                className="flex items-center justify-center p-10 bg-[#F5F5F5] rounded-lg hover:border-[#2d2d2d] border-3 border-background "
              >
                <figure className="flex flex-col items-start text-start justify-between gap-16 ">
                  <blockquote>
                    <span className="text-lg font-medium">“{item.quote}”</span>
                  </blockquote>
                  <footer>
                    <cite>
                      <span className="block text-[#2d2d2d] font-semibold text-sm">
                        {item.name}
                      </span>
                      <span className="block text-[#2d2d2d] text-sm">
                        {item.position}
                      </span>
                    </cite>
                  </footer>
                </figure>
              </li>
            ))}
        </ul>
      </BentoGrid>
    </MaxWidthWrapper>
  );
};

export default TestimonialCustomers;

const Testimonial = [
  {
    quote:
      "I love the way the course is structured. The content is very rich and the instructors are very knowledgeable. I have learned a lot from the course and I am very happy that I took it.",
    name: "John Doe",
    position: "Student at SiapKuliah",
    isActive: true,
    date_created: "2021-10-10",
  },
  {
    quote: "Painless to understand and set up which is an absolute blessing",
    name: "John Doe",
    position: "Student at SiapKuliah",
    isActive: true,
    date_created: "2021-10-10",
  },
  {
    quote: " course and I am very happy that I took it.",
    name: "sisca Doe",
    position: "Student at SiapKuliah",
    isActive: true,
    date_created: "2021-10-10",
  },
  {
    quote: " community is very helpful and the course is very informative.",
    name: "henry Doe",
    position: "Student at SiapKuliah",
    isActive: true,
    date_created: "2021-10-10",
  },
  {
    quote: "Painless to understand and set up which is an absolute blessing",
    name: "John Doe",
    position: "Student at SiapKuliah",
    isActive: true,
    date_created: "2021-10-10",
  },
  {
    quote:
      "I love the way the course is structured. ",
    name: " Hellen ",
    position: "Student at SiapKuliah",
    isActive: true,
    date_created: "2021-10-10",
  },
  {
    quote:
      "the instructors are very knowledgeable. I have learned a lot from the course and I am very happy that I took it.",
    name: "Sara Doe",
    position: "Student at SiapKuliah",
    isActive: true,
    date_created: "2021-10-10",
  },
];

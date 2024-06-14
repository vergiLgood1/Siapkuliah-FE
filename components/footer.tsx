'use client'

import React from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCopyright,
} from "@tabler/icons-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import ReactCountryFlag from "react-country-flag";
import LanguageDropdown from "@/app/(marketing)/_components/languange-dropdown";

const IconSocial = [
  { icon: <IconBrandGithub />, href: "#" },
  { icon: <IconBrandX />, href: "#" },
  { icon: <IconBrandDiscord />, href: "#" },
  { icon: <IconBrandLinkedin />, href: "#" },
  { icon: <IconBrandInstagram />, href: "#" },
];

// LanguageDropdownIcon component
const ItemsFooter = () => {
  const sections = [
    {
      title: "Brand",
      items: [
        { name: "@ 2024 Siapkuliah", href: "#", icon: <IconCopyright /> },
      ],
    },
    {
      title: "Product",
      items: [
        { name: "Pricing", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Docs", href: "#" },
        { name: "Download", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Customers", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Community", href: "#" },
        { name: "Help & Support", href: "#" },
        { name: "What's New", href: "#" },
        { name: "Status", href: "#" },
      ],
    },
  ];

  return sections.map((section) => (
    <div className="mb-20" key={section.title}>
      <h3 className="text-sm font-semibold text-gray-800">{section.title}</h3>
      <ul className="mt-4 space-y-2">
        {section.items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              {"icon" in item ? item.icon && item.name : item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ));
};

// Footer component
const Footer = () => {
  return (
    <MaxWidthWrapper className="bg-[#F5F5F5]">
      <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Your footer content */}
          <ItemsFooter />
          {/* Social Icons */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5 flex flex-row-reverse justify-between border-t-2 border-[#E5E5E5]">
            <ul className="flex items-center space-x-4 py-8 ">
              {IconSocial.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-sm text-gray-600">
                    <div className="p-4 rounded-lg hover:bg-[#E5E5E5] transition-all">
                      {item.icon}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex items-center gap-x-3">
                <LanguageDropdown />
              </div>
            </div>
            {/* <ul className="flex items-center">
              {LanguangeIcon.map((item, i) => (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline"></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <li key={i}>
                      <DropdownMenuItem>{item.icon}</DropdownMenuItem>
                    </li>
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </ul> */}
          </div>
        </div>
        {/* End Grid */}
      </footer>
    </MaxWidthWrapper>
  );
};

export default Footer;

const LanguangeIcon = [
  { icon: <ReactCountryFlag countryCode="US" svg /> },
  { icon: <ReactCountryFlag countryCode="JP" svg /> },
  // Tambahkan lebih banyak bendera sesuai kebutuhan
];

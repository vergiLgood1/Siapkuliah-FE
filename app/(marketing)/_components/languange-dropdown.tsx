// src/components/LanguageDropdown.tsx
'use client'

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import React, { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: 'US', label: 'English (US)' },
  { code: 'FR', label: 'Français' },
  { code: 'ES', label: 'Español' },
  // Tambahkan bahasa lain sesuai kebutuhan Anda
];

const LanguageDropdown: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  const handleChangeLanguage = (language: Language) => {
    setSelectedLanguage(language);
    // Logika untuk mengganti bahasa aplikasi bisa ditambahkan di sini
  };

  return (
    <div className="relative inline-block text-left">
      <DropdownMenu>
        <DropdownMenuTrigger className='' asChild>
          <Button
            type="button"
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <ReactCountryFlag countryCode={selectedLanguage.code} svg className='h-8 w-8' />
            <span className="ml-3">{selectedLanguage.label}</span>
            <IconChevronUp className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleChangeLanguage(language)}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-40"
            ><div>
                
            </div>
              <ReactCountryFlag countryCode={language.code} svg className='h-8 w-8' />
              <span className="ml-3">{language.label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageDropdown;

"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CustomLocale } from "@/types";

const LanguageDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as CustomLocale;

  const portugueseLanguage =
    currentLocale === "pt" ? "Português" : "Portuguese";
  const englishLanguage = currentLocale === "pt" ? "Inglês" : "English";

  const handleChangeLocale = (locale: CustomLocale) => {
    const path = pathname.replace(currentLocale, locale);
    router.push(path);
  };

  return (
    <DropdownMenu>
      <div className="min-w-[130px]">
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex justify-between px-0  w-full">
            <div className="flex items-center space-x-2">
              {currentLocale === "en" ? (
                <Image
                  src={"/assets/icons/england-icon.png"}
                  alt="England"
                  width={24}
                  height={24}
                />
              ) : (
                <Image
                  src={"/assets/icons/portugal-icon.png"}
                  alt="England"
                  width={24}
                  height={24}
                />
              )}
              <span className="text-base">
                {currentLocale === "en" ? englishLanguage : portugueseLanguage}
              </span>
            </div>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-full min-w-[130px]">
          <DropdownMenuItem
            onClick={() => handleChangeLocale("en")}
            className="space-x-2 cursor-pointer min-w-[130px]"
          >
            <Image
              src={"/assets/icons/england-icon.png"}
              alt="England"
              width={24}
              height={24}
            />
            <span className="text-base">{englishLanguage}</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleChangeLocale("pt")}
            className="space-x-2 cursor-pointer min-w-[130px]"
          >
            <Image
              src={"/assets/icons/portugal-icon.png"}
              alt="England"
              width={24}
              height={24}
            />
            <span className="text-base">{portugueseLanguage}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
};

export default LanguageDropdown;

"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { CustomLocale } from "@/types";
import { usePathname, useRouter } from "next/navigation";

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
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="space-x-2 px-0">
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
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full">
        <DropdownMenuItem
          onClick={() => handleChangeLocale("en")}
          className="space-x-2 cursor-pointer"
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
          className="space-x-2 cursor-pointer"
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
    </DropdownMenu>
  );
};

export default LanguageDropdown;

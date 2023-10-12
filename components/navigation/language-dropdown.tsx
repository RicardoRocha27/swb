"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, Moon } from "lucide-react";
import Image from "next/image";

const LanguageDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="space-x-2 px-0">
          <Image
            src={"/assets/icons/england-icon.png"}
            alt="England"
            width={24}
            height={24}
          />
          <span className="text-base">English</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-full">
        {/* TODO: Toggle language change. */}
        <DropdownMenuItem onClick={() => {}} className="space-x-2">
          <Image
            src={"/assets/icons/england-icon.png"}
            alt="England"
            width={24}
            height={24}
          />
          <span className="text-base">English</span>
        </DropdownMenuItem>
        {/* TODO: Toggle language change. */}
        <DropdownMenuItem onClick={() => {}} className="space-x-2">
          <Image
            src={"/assets/icons/portugal-icon.png"}
            alt="England"
            width={24}
            height={24}
          />
          <span className="text-base">Portuguese</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;

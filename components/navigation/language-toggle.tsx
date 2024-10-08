"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CustomLocale } from "@/types";

const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] as CustomLocale;

  const handleChangeLocale = (locale: CustomLocale) => {
    const path = pathname.replace(currentLocale, locale);
    router.push(path);
  };

  return (
    <div className={cn("flex  space-x-2 w-fit")}>
      <Switch
        id="switch-language"
        checked={currentLocale === "en"}
        onCheckedChange={() =>
          currentLocale === "pt"
            ? handleChangeLocale("en")
            : handleChangeLocale("pt")
        }
        className="mx-auto"
      />
      <Label
        htmlFor="switch-language"
        className={cn("mx-auto font-medium text-base")}
      >
        {currentLocale === "pt" ? "Português" : "English"}
      </Label>
    </div>
  );
};

export default LanguageToggle;

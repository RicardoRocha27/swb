"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { CustomLocale } from "@/types";

const LanguageToggle = () => {
  const [language, setlanguage] = useState("pt");
  const changeLanguage = () => {
    language === "en" ? setlanguage("pt") : setlanguage("en");
  };
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
        onClick={() =>
          currentLocale === "pt"
            ? handleChangeLocale("en")
            : handleChangeLocale("pt")
        }
        className="mx-auto"
      />

      <p className={cn("mx-auto font-medium text-base")}>
        {currentLocale === "pt" ? "Português" : "English"}
      </p>
    </div>
  );
};

export default LanguageToggle;

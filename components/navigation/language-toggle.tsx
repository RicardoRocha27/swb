"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const LanguageToggle = () => {
  const [language, setlanguage] = useState("pt");
  const changeLanguage = () => {
    language === "en" ? setlanguage("pt") : setlanguage("en");
  };

  return (
    <div className={cn("flex  space-x-2 w-fit")}>
      <Switch onClick={changeLanguage} className="mx-auto" />

      <p className={cn("mx-auto font-medium text-base")}>
        {language === "pt" ? "Português" : "English"}
      </p>
    </div>
  );
};

export default LanguageToggle;

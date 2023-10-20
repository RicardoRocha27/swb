"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

const LanguageToggle = () => {
  const [language, setlanguage] = useState("pt");
  const changeLanguage = () => {
    language === "en" ? setlanguage("pt") : setlanguage("en");
  };
  return (
    <div className={cn("flex  space-x-2 w-fit")}>
      <Switch onClick={changeLanguage} className="mx-auto" />

      <h6 className={cn("mx-auto font-medium text-base")}>
        {language === "pt" ? "Português" : "English"}
      </h6>
    </div>
  );
};

export default LanguageToggle;

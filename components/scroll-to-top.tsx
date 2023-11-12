"use client";
import { CustomLocale } from "@/types";
import { ArrowRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollToTop = ({ locale }: { locale: CustomLocale }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div
        className=" hidden group xl:flex w-fit z-20 justify-center items-center fixed cursor-pointer bottom-16 left-2 duration-300 -rotate-90 hover:text-accent/80 hover:scale-105"
        onClick={scrollToTop}
      >
        <p className="text-accent group-hover:text-accent/70 transition-colors">
          {locale === "en" ? "Go to top" : "Ir para cima"}
        </p>
        <ArrowRight
          size={20}
          className="text-accent ml-1 group-hover:text-accent/70 transition-colors"
        />
      </div>
    )
  );
};

export default ScrollToTop;

"use client";

import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
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
        className="flex w-fit z-20 justify-center items-center rounded-full bg-primary hover:bg-primary/70 fixed cursor-pointer bottom-5 left-5 duration-300"
        onClick={scrollToTop}
      >
        <ArrowUp size={20} className="text-background m-2" />
      </div>
    )
  );
};

export default ScrollToTop;

"use client";

import Image from "next/image";

const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div onClick={scrollToTop} className="cursor-pointer">
      <Image
        src={"/assets/brand/text-logo.svg"}
        alt="SWB"
        width={70}
        height={23}
      />
    </div>
  );
};

export default Logo;

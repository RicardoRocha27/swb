"use client";

import Image from "next/image";
import { Button } from "../ui/button";

const HeroButton = ({ buttonLabel }: { buttonLabel: string }) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <Button
      variant={"accent"}
      className="space-x-2"
      onClick={() => handleScroll("contacts")}
    >
      <p>{buttonLabel}</p>
      <Image
        src={"/assets/icons/touch-icon.svg"}
        alt="touch"
        width={24}
        height={24}
      />
    </Button>
  );
};

export default HeroButton;

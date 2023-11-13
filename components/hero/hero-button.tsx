"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const HeroButton = ({ buttonLabel }: { buttonLabel: string }) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-fit mx-auto lg:mx-0"
    >
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
    </motion.div>
  );
};

export default HeroButton;

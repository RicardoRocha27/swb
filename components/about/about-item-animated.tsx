"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutItem from "./about-item";

export type TAboutItem = {
  image: string;
  title: string;
  text: string;
  link: string;
  buttonLabel: string;
  reversed?: boolean;
};

const AboutItemAnimated = ({
  image,
  title,
  text,
  link,
  buttonLabel,
  reversed,
}: TAboutItem) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reversed ? "100%" : "-100%" }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <AboutItem
        image={image}
        title={title}
        text={text}
        link={link}
        buttonLabel={buttonLabel}
        reversed={reversed}
      />
    </motion.div>
  );
};

export default AboutItemAnimated;

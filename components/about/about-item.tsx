"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type TAboutItem = {
  image: string;
  title: string;
  text: string;
  link: string;
  buttonLabel: string;
  reversed?: boolean;
};

const AboutItem = ({
  image,
  title,
  text,
  link,
  buttonLabel,
  reversed,
}: TAboutItem) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-24 md:h-[354px]",
        reversed && "mb-0"
      )}
    >
      <div className={cn("mx-auto sm:mx-0 order-1", reversed && "sm:order-2")}>
        <Image
          className={cn("rounded-sm", reversed && "sm:ml-auto")}
          src={image}
          alt={title}
          width={300}
          height={300}
        />
      </div>
      <div
        className={cn(
          "flex flex-col text-center sm:text-left space-y-6 order-2",
          reversed && "sm:order-1"
        )}
      >
        <p className="text-lg font-bold text-background">{title}</p>
        <p className="text-background/80">{text}</p>
        <Link
          className="mx-auto sm:mx-0 flex space-x-2 items-center group"
          href={link}
          target="_blank"
        >
          <p className="text-secondary group-hover:text-secondary/80">
            {buttonLabel}
          </p>
          <div className="text-secondary group-hover:text-secondary/80">
            <ArrowRight size={15} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutItem;

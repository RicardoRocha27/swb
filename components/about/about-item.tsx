import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type TAboutItem = {
  image: string;
  title: string;
  text: string;
  link: string;
  reversed?: boolean;
};

const AboutItem = ({ image, title, text, link, reversed }: TAboutItem) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-20",
        reversed && "mb-0"
      )}
    >
      <div className={cn("mx-auto sm:mx-0 order-1 ", reversed && "sm:order-2")}>
        <Image
          className={cn(reversed && "sm:ml-auto ")}
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
        <Link className="mx-auto sm:mx-0" href={link}>
          <div className="flex space-x-2 items-center ">
            <p className="text-background/80">Visit website</p>
            <ArrowRight size={15} className="text-background" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutItem;

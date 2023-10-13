import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type TAboutItem = {
  image: StaticImageData;
  title: string;
  text: string;
  link: string;
  reversed?: boolean;
};

const AboutItem = ({ image, title, text, link, reversed }: TAboutItem) => {
  return (
    <div
      className={
        reversed
          ? "grid grid-cols-1 sm:grid-cols-2 items-center gap-4"
          : "grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mb-24"
      }
    >
      <div
        className={
          reversed
            ? "mx-auto sm:mr-0 order-1 sm:order-2 "
            : "mx-auto sm:mx-0 order-1 "
        }
      >
        <Image src={image} alt={title} width={300} height={300} />
      </div>
      <div
        className={
          reversed
            ? "flex flex-col text-center sm:text-left space-y-6 order-2 sm:order-1"
            : "flex flex-col text-center sm:text-left space-y-6 order-2"
        }
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

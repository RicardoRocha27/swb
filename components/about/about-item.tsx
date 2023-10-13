import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type TAboutItem = {
  image: StaticImageData;
  title: string;
  text: string;
  link: string;
};

const AboutItem = ({ image, title, text, link }: TAboutItem) => {
  return (
    <div className="flex flex-row items-center space-x-24 mb-24">
      <Image src={image} alt={title} width={300} height={300} />
      <div className="flex flex-col space-y-6">
        <p className="text-lg font-bold text-background">{title}</p>
        <p className="text-background/80">{text}</p>
        <Link href={link}>
          <div className="flex space-x-2 items-center">
            <p className="text-background/80">Visit website</p>
            <ArrowRight size={15} className="text-background" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutItem;

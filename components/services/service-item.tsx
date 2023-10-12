import Image from "next/image";

export type TServiceItem = {
  image: string;
  title: string;
  text: string;
};

const ServiceItem = ({ image, title, text }: TServiceItem) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <Image src={image} alt={title} width={140} height={140} />
      <p className="text-lg font-bold text-background">{title}</p>
      <p className="text-background/80">{text}</p>
    </div>
  );
};

export default ServiceItem;

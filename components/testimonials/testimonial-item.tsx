import Image from "next/image";

interface CarouselItemProps {
  image: string;
  name: string;
  type: string;
  comment: string;
}

const TestimonialItem = ({ image, name, type, comment }: CarouselItemProps) => {
  return (
    <div className="space-y-8 max-w-[432px] mx-auto text-center relative px-6">
      <div className="flex items-center justify-center">
        <div className="w-24 h-24 z-10 rounded-full ring ring-offset-0 ring-background">
          <div className="relative w-24 h-24">
            {image ? (
              <Image
                src={image}
                loading="eager"
                alt="main image"
                fill
                className="object-cover object-center rounded-full shadow-md"
              />
            ) : (
              <div className="bg-primary text-background shadow-md rounded-full h-full w-full flex items-center justify-center font-bold text-3xl">
                {name.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-foreground/80">{comment}</p>
      <div className="space-y-4">
        <p className="text-lg">{name}</p>
        <p className="text-foreground/80">{type}</p>
      </div>
    </div>
  );
};

export default TestimonialItem;

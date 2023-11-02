import Image from "next/image";

interface CarouselItemProps {
  image: string;
  prevImage: string;
  nextImage: string;
  name: string;
  type: string;
  comment: string;
}

const TestimonialItem = ({
  image,
  prevImage,
  nextImage,
  name,
  type,
  comment,
}: CarouselItemProps) => {
  return (
    <div className="space-y-8 max-w-[432px] mx-auto text-center relative px-6">
      <div className="flex items-center justify-center">
        <div className="w-24 h-24 absolute">
          <div className="relative w-24 h-24 ml-[-50px]">
            <Image
              src={prevImage}
              loading="eager"
              alt="previous image"
              fill
              className="object-cover object-center rounded-full"
            />
          </div>
        </div>
        <div className="w-24 h-24 z-10 rounded-full ring ring-offset-0 ring-background">
          <div className="relative w-24 h-24">
            <Image
              src={image}
              loading="eager"
              alt="main image"
              fill
              className="object-cover object-center rounded-full"
            />
          </div>
        </div>
        <div className="w-24 h-24 absolute">
          <div className="relative w-24 h-24 mr-[-50px]">
            <Image
              src={nextImage}
              loading="eager"
              alt="following image"
              fill
              className="object-cover object-center rounded-full ml-[50px]"
            />
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

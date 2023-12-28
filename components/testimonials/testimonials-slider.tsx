"use client";

import TestimonialItem from "./testimonial-item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type TTestimonialsSlider = {
  items: any;
};

const TestimonialsSlider = ({ items }: TTestimonialsSlider) => {
  return (
    <Carousel
      className="mt-5 max-w-[282px] sm:max-w-[432px] mx-auto"
      opts={{ loop: true }}
    >
      <CarouselContent>
        {Object.values(items).map((person: any, index) => (
          <CarouselItem key={index}>
            <TestimonialItem
              image={person.image}
              name={person.name}
              type={person.type}
              comment={person.comment.substring(0, 400)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant="arrow" />
      <CarouselNext variant="arrow" />
    </Carousel>
  );
};

export default TestimonialsSlider;

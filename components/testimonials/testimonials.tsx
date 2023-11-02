import React from "react";
import Heading from "../heading";
import Container from "../container";
import TestimonialsSlider from "./testimonials-slider";
import { getDictionary } from "@/lib/get-dictionary";
import { CustomLocale } from "@/types";

const Testimonials = async ({ locale }: { locale: CustomLocale }) => {
  const people = [
    {
      image: "/assets/icons/paula.png",
      name: "Paula",
      type: "Client",
      comment:
        "Lorem ipsum dolor sit amet consectetur. Neque parturient orci sit condimentum turpis venenatis venenatis sit quisque. Erat egestas sem ultricies amet mi. Magna feugiat interdum at varius duis augue. Cursus porttitor ullamcorper dolor imperdiet non purus quis.",
    },
    {
      image: "/assets/icons/marta.png",
      name: "Marta",
      type: "Client",
      comment:
        "Lorem ipsum dolor sit amet consectetur. Neque parturient orci sit condimentum turpis venenatis venenatis sit quisque. Erat egestas sem ultricies amet mi. Magna feugiat interdum at varius duis augue. Cursus porttitor ullamcorper dolor imperdiet non purus quis.",
    },
    {
      image: "/assets/icons/martim.jpeg",
      name: "Martim",
      type: "Coursemate",
      comment:
        "Lorem ipsum dolor sit amet consectetur. Neque parturient orci sit condimentum turpis venenatis venenatis sit quisque. Erat egestas sem ultricies amet mi. Magna feugiat interdum at varius duis augue. Cursus porttitor ullamcorper dolor imperdiet non purus quis.",
    },
  ];

  const dictionary = await getDictionary(locale);
  const testimonials = dictionary.testimonials;

  return (
    <div id="testimonials" className="mb-32">
      <Container>
        <Heading
          title={testimonials.heading.title}
          subtitle={testimonials.heading.subtitle}
          isBackgroundLight
        />
        <TestimonialsSlider items={people} />
      </Container>
    </div>
  );
};

export default Testimonials;

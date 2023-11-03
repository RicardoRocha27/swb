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
        "The whole process was really simple from the conceptualization to the delivery. The final product was even better than I imagined and as a result you have a really happy customer that knows exactly where to come if it surges the need for this specialized help again.",
    },
    {
      image: "/assets/icons/marta.png",
      name: "Marta",
      type: "Client",
      comment:
        "I especially liked the design process as I was receiving and giving constant feedback and therefore I knew exactly how it was going and that surely was a big plus on the process. The website, I believe it speaks for it self.",
    },
    {
      image: "/assets/icons/martim.jpeg",
      name: "Martim",
      type: "Client",
      comment:
        "As someone who also writes code I must say I was impressed on the delivery time since it is everything but easy to code an entire web application that works flawlessly. That aligned with the incredible interface made this even better than what I was looking for.",
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

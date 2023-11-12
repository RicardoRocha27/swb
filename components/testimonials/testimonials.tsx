import React from "react";
import Heading from "../heading";
import Container from "../container";
import TestimonialsSlider from "./testimonials-slider";
import { getDictionary } from "@/lib/get-dictionary";
import { CustomLocale } from "@/types";

const Testimonials = async ({ locale }: { locale: CustomLocale }) => {
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
        <TestimonialsSlider items={testimonials.people} />
      </Container>
    </div>
  );
};

export default Testimonials;

import React from "react";

import { getDictionary } from "@/lib/get-dictionary";
import { CustomLocale } from "@/types";
import Heading from "@/components/heading";
import Container from "@/components/container";

import TestimonialsSlider from "./testimonials-slider";

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

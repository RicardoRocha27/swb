"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import TestimonialItem from "./testimonial-item";

type SliderArrowProps = {
  currentSlide?: number;
  slideCount?: number;
};

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: SliderArrowProps) => <ChevronRight color="#3A3442" {...props} />;

const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: SliderArrowProps) => <ChevronLeft color="#3A3442" {...props} />;

const settings = {
  dots: false,
  infinite: true,
  arrows: true,
  pauseOnHover: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

type TTestimonialsSlider = {
  items: any;
};

const TestimonialsSlider = ({ items }: TTestimonialsSlider) => {
  return (
    <Slider {...settings} className="mt-5 max-w-[688px] mx-auto">
      {Object.values(items).map((person: any, index) => (
        <TestimonialItem
          image={person.image}
          name={person.name}
          type={person.type}
          comment={person.comment.substring(0, 400)}
          key={index}
        />
      ))}
    </Slider>
  );
};

export default TestimonialsSlider;

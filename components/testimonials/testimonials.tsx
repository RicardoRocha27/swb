"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Heading from "../heading";
import TestimonialItem from "./testimonial-item";
import Container from "../container";

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

const Testimonials = () => {
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

  return (
    <div id="testimonials" className="mb-32">
      <Container>
        <Heading
          title="What People Say About Us"
          subtitle="Step into a realm of genuine appreciation and feedback from those we've had the privilege to serve."
          isBackgroundLight
        />
        <Slider {...settings} className="mt-5 max-w-[688px] mx-auto">
          {people.map((person, index) => (
            <TestimonialItem
              image={person.image}
              prevImage={
                people[(index - 1 + people.length) % people.length].image
              }
              nextImage={people[(index + 1) % people.length].image}
              name={person.name}
              type={person.type}
              comment={person.comment.substring(0, 400)}
              key={index}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonials;

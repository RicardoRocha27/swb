import React from "react";
import Container from "../container";
import Heading from "../heading";
import AboutItem, { TAboutItem } from "./about-item";

const About = () => {
  const aboutItems: { [key: string]: TAboutItem } = {
    tiago: {
      image: "/assets/photos/tiago.png",
      title: "Tiago Pereira",
      text: "Nostrud laboris id consectetur cillum culpa excepteur tempor laboris adipisicing consectetur pariatur fugiat sit cillum. Proident culpa sint aliquip eiusmod magna nisi et ut ad irure fugiat. Anim esse ad cillum id magna enim ullamco velit nulla enim tempor tempor excepteur.",
      link: "/",
      reversed: false,
    },
    ricardo: {
      image: "/assets/photos/ricardo.png",
      title: "Ricardo Rocha",
      text: "Nostrud laboris id consectetur cillum culpa excepteur tempor laboris adipisicing consectetur pariatur fugiat sit cillum. Proident culpa sint aliquip eiusmod magna nisi et ut ad irure fugiat. Anim esse ad cillum id magna enim ullamco velit nulla enim tempor tempor excepteur.",
      link: "/",
      reversed: true,
    },
  };

  return (
    <div className="bg-foreground pb-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading
            title="Tailored Solutions"
            subtitle="Crafting highly personalized strategies for unparalleled, far-reaching impact"
          />
          {Object.values(aboutItems).map((item, index) => (
            <AboutItem
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
              link={item.link}
              reversed={item.reversed}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;

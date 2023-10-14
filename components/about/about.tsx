import React from "react";
import Container from "../container";
import Heading from "../heading";
import AboutItem from "./about-item";
import { CustomLocale } from "@/types";
import { getDictionary } from "@/lib/get-dictionary";

const About = async ({ locale }: { locale: CustomLocale }) => {
  const dictionary = await getDictionary(locale);
  const services = dictionary.about;

  return (
    <div className="bg-foreground pb-32" id="about">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading
            title={services.heading.title}
            subtitle={services.heading.subtitle}
          />
          {Object.values(services.info).map((item: any, index) => (
            <AboutItem
              key={index}
              image={item.image}
              title={item.name}
              text={item.description}
              link={item.href}
              buttonLabel={item.buttonLabel}
              reversed={item.reversed}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;

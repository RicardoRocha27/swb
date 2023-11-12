import React from "react";
import Container from "../container";
import Heading from "../heading";
import AboutItem from "./about-item";
import { CustomLocale } from "@/types";
import { getDictionary } from "@/lib/get-dictionary";
import AboutItemAnimated from "./about-item-animated";

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
            <div key={index} className="overflow-x-hidden">
              <div className="hidden md:block">
                <AboutItemAnimated
                  image={item.image}
                  title={item.name}
                  text={item.description}
                  link={item.href}
                  buttonLabel={item.buttonLabel}
                  reversed={item.reversed}
                />
              </div>
              <div className="flex md:hidden">
                <AboutItem
                  image={item.image}
                  title={item.name}
                  text={item.description}
                  link={item.href}
                  buttonLabel={item.buttonLabel}
                  reversed={item.reversed}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default About;

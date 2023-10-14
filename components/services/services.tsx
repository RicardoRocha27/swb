import { CustomLocale } from "@/types";
import Container from "../container";
import Heading from "../heading";
import ServiceItem from "./service-item";
import { getDictionary } from "@/lib/get-dictionary";

const Services = async ({ locale }: { locale: CustomLocale }) => {
  const dictionary = await getDictionary(locale);
  const services = dictionary.services;

  return (
    <div className="bg-foreground pb-32" id="services">
      <Container>
        <Heading
          title={services.heading.title}
          subtitle={services.heading.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.values(services.info).map((item, index) => (
            <ServiceItem
              key={index}
              image={item.image}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;

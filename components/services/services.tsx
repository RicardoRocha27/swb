import { CustomLocale } from "@/types";
import Container from "../container";
import Heading from "../heading";
import ServiceItem from "./service-item";
import { getDictionary } from "@/lib/get-dictionary";
import ServicesList from "./services-list";

const Services = async ({ locale }: { locale: CustomLocale }) => {
  const dictionary = await getDictionary(locale);
  const services = dictionary.services;

  return (
    <div className="bg-foreground" id="services">
      <Container>
        <Heading
          title={services.heading.title}
          subtitle={services.heading.subtitle}
        />
        <ServicesList services={services} />
      </Container>
    </div>
  );
};

export default Services;

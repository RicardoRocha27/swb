import { CustomLocale } from "@/types";
import { getDictionary } from "@/lib/get-dictionary";
import Container from "@/components/container";
import Heading from "@/components/heading";

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

import Container from "../container";
import Heading from "../heading";
import ServiceItem, { TServiceItem } from "./service-item";

const Services = () => {
  const serviceItems: { [key: string]: TServiceItem } = {
    design: {
      image: "/assets/icons/design-icon.svg",
      title: "Web Design",
      text: "We will collaborate with you to create a website that embodies your brand's essence. Whether you envision a sleek, modern interface or a timeless, elegant design, we'll bring your vision to life.",
    },
    development: {
      image: "/assets/icons/development-icon.svg",
      title: "Web Development",
      text: "We will collaborate with you to create a website that embodies your brand's essence. Whether you envision a sleek, modern interface or a timeless, elegant design, we'll bring your vision to life.",
    },
    copywrite: {
      image: "/assets/icons/copywrite-icon.svg",
      title: "Copywriting",
      text: "We will collaborate with you to create a website that embodies your brand's essence. Whether you envision a sleek, modern interface or a timeless, elegant design, we'll bring your vision to life.",
    },
  };

  return (
    <div className="bg-foreground pb-32">
      <Container>
        <Heading
          title="Tailored Solutions"
          subtitle="Crafting highly personalized strategies for unparalleled, far-reaching impact"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.values(serviceItems).map((item, index) => (
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

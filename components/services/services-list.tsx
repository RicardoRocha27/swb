import ServiceItem from "./service-item";
import ServiceItemAnimated from "./service-item-animated";

const ServicesList = ({ services }: { services: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {Object.values(services.info).map((item: any, index) => (
        <div key={index}>
          <div className="hidden md:block">
            <ServiceItemAnimated item={item} index={index} />
          </div>
          <div className="block md:hidden">
            <ServiceItem
              image={item.image}
              title={item.title}
              text={item.text}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;

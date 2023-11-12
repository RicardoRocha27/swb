"use client";

import ServiceItem from "./service-item";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicesList = ({ services }: { services: any }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {Object.values(services.info).map((item: any, index) => (
        <div key={index}>
          <div className="hidden md:block">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <ServiceItem
                image={item.image}
                title={item.title}
                text={item.text}
              />
            </motion.div>
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

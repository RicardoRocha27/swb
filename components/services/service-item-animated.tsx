"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ServiceItem, { TServiceItem } from "./service-item";

type TServiceItemAnimated = {
  item: TServiceItem;
  index: number;
};

const ServiceItemAnimated = ({ item, index }: TServiceItemAnimated) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1, delay: index * 0.3 }}
    >
      <ServiceItem image={item.image} title={item.title} text={item.text} />
    </motion.div>
  );
};

export default ServiceItemAnimated;

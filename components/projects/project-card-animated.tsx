"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ProjectCard, { TProjectCard } from "./project-card";

const ProjectCardAnimated = ({
  href,
  image,
  color,
  title,
  subtitle,
  text,
  services,
}: TProjectCard) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "30%" }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <ProjectCard
        href={href}
        image={image}
        color={color}
        title={title}
        text={text}
        subtitle={subtitle}
        services={services}
      />
    </motion.div>
  );
};

export default ProjectCardAnimated;

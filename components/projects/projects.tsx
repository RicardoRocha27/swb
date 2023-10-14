import { CustomLocale } from "@/types";
import Container from "../container";
import Heading from "../heading";
import ProjectCard from "./project-card";
import { getDictionary } from "@/lib/get-dictionary";

const Projects = async ({ locale }: { locale: CustomLocale }) => {
  const dictionary = await getDictionary(locale);
  const projects = dictionary.projects;

  return (
    <div id="portfolio">
      <Container>
        <Heading
          title={projects.heading.title}
          subtitle={projects.heading.subtitle}
          isBackgroundLight
        />
        <div className="flex flex-col space-y-24">
          {Object.values(projects.info).map((project, index) => (
            <ProjectCard
              key={index}
              href={project.href}
              image={project.image}
              color={project.color}
              title={project.title}
              text={project.text}
              subtitle={project.subtitle}
              services={project.services}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;

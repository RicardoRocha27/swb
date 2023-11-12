import { CustomLocale } from "@/types";
import Container from "../container";
import Heading from "../heading";
import ProjectCard from "./project-card";
import { getDictionary } from "@/lib/get-dictionary";
import ProjectCardAnimated from "./project-card-animated";

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
            <div key={index}>
              <div className="hidden md:block">
                <ProjectCardAnimated
                  href={project.href}
                  image={project.image}
                  color={project.color}
                  title={project.title}
                  text={project.text}
                  subtitle={project.subtitle}
                  services={project.services}
                />
              </div>
              <div className="flex md:hidden">
                <ProjectCard
                  href={project.href}
                  image={project.image}
                  color={project.color}
                  title={project.title}
                  text={project.text}
                  subtitle={project.subtitle}
                  services={project.services}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;

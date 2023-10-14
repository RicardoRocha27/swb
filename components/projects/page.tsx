import Container from "../container";
import Heading from "../heading";
import ProjectCard, { TProjectCard } from "./components/project-card";

const Projects = () => {
  const projects: { [key: string]: TProjectCard } = {
    asdesaber: {
      href: "https://asdesaber.pt/",
      image: "/assets/photos/asdesaber-photo.png",
      color: "#1893c6",
      title: "Ás de saber",
      subtitle: "Portuguese Tutoring Center",
      text: "Lorem ipsum dolor sit amet consectetur. Consectetur neque fermentum sodales vitae enim libero dolor sit. Nisi gravida duis volutpat velit congue aliquet.",
      services: {
        web_design: true,
        web_development: true,
        copywriting: false,
      },
    },
    meme: {
      href: "https://casinhasdomeme.pt/pt/",
      image: "/assets/photos/meme-photo.png",
      color: "#c1a661",
      title: "Casinhas do mémé",
      subtitle: "Serra da Estrela House Rental Company",
      text: "Lorem ipsum dolor sit amet consectetur. Consectetur neque fermentum sodales vitae enim libero dolor sit. Nisi gravida duis volutpat velit congue aliquet.",
      services: {
        web_design: true,
        web_development: true,
        copywriting: true,
      },
    },
    jokes: {
      href: "https://jokesaside.vercel.app/home",
      image: "/assets/photos/jokes-photo.png",
      color: "#0f172a",
      title: "Jokes Aside",
      subtitle: "Social Platform for Humour Enthusiasts",
      text: "Lorem ipsum dolor sit amet consectetur. Consectetur neque fermentum sodales vitae enim libero dolor sit. Nisi gravida duis volutpat velit congue aliquet.",
      services: {
        web_design: true,
        web_development: true,
        copywriting: true,
      },
    },
  };

  return (
    <div className="pb-32">
      <Heading
        title="Our Projects"
        subtitle="Explore the culmination of our relentless pursuit of excellence"
        isBackgroundLight
      />
      <Container>
        <div className="flex flex-col space-y-24">
          {Object.values(projects).map((project, index) => (
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

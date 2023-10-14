import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/page";
import Services from "@/components/services/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
    </div>
  );
}

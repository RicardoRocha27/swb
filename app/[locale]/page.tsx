import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Services from "@/components/services/services";
import { CustomLocale } from "@/types";

export default function Home({
  params: { locale },
}: {
  params: { locale: CustomLocale };
}) {
  return (
    <div>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Projects locale={locale} />
    </div>
  );
}

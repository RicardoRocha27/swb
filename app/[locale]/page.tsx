import About from "@/components/about/about";
import Contacts from "@/components/contacts/contacts";
import Faqs from "@/components/faqs/faqs";
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
      <About />
      <Projects locale={locale} />
      <Contacts />
      <Faqs />
    </div>
  );
}

import Image from "next/image";
import Container from "../container";
import { getDictionary } from "@/lib/get-dictionary";
import { CustomLocale } from "@/types";
import HeroButton from "./hero-button";

const Hero = async ({ locale }: { locale: CustomLocale }) => {
  const dictionary = await getDictionary(locale);
  const hero = dictionary.hero;

  return (
    <Container>
      <div className="flex flex-col justify-between items-center lg:flex-row py-16 md:py-32 space-y-8 lg:space-y-0">
        <div className="space-y-8 text-center lg:text-start">
          <div className="space-y-2 max-w-[550px] mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold">{hero.title}</h1>
            <p className="text-foreground/80">{hero.subtitle}</p>
          </div>
          <HeroButton buttonLabel={hero.button} />
        </div>
        <div>
          <Image
            src={"/assets/illustrations/hero-illustration.png"}
            alt="illustration"
            width={721}
            height={481}
            loading="eager"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

import Image from "next/image";
import { Button } from "../../ui/button";
import Container from "../../container";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col justify-between items-center lg:flex-row py-32 space-y-8 lg:space-y-0">
        <div className="space-y-8 text-center lg:text-start">
          <div className="space-y-2 max-w-[500px] mx-auto">
            <h1 className="text-6xl font-bold">We Build Your Future Online</h1>
            <p className="text-foreground/80">
              Crafting dynamic, user-centric online experiences that go beyond
              the ordinary. We shape destinies, not just websites.
            </p>
          </div>
          {/* TODO: add on click to button. */}
          <Button variant={"accent"} className="space-x-2">
            <p>Get in touch</p>
            <Image
              src={"/assets/icons/touch-icon.svg"}
              alt="touch"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <div>
          <Image
            src={"/assets/illustrations/hero-illustration.png"}
            alt="illustration"
            width={721}
            height={481}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;

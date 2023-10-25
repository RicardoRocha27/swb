import Image from "next/image";
import Link from "next/link";

import Container from "@/components/container";

import MenuItem, { TNavbarRoute } from "./menu-item";
import LanguageDropdown from "./language-dropdown";

type TDesktopNavbar = {
  routes: { [key: string]: TNavbarRoute };
};

const DesktopNavbar = ({ routes }: TDesktopNavbar) => {
  return (
    <div className="hidden md:flex md:items-center md:justify-center fixed top-0 left-0 bg-background w-full z-20">
      <Container>
        <div className="flex justify-between py-8">
          <Link
            href={"/"}
            className="rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <Image
              src={"/assets/brand/logo.png"}
              alt="logo"
              height={40}
              width={130}
            />
          </Link>
          <div className="space-x-8 flex items-center ">
            {Object.values(routes).map((route, index) => (
              <MenuItem key={index} item={route} />
            ))}
          </div>
          <div className="flex items-center space-x-8">
            {/* TODO: Change linkedin link. */}
            <Link
              href={""}
              className="rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Image
                src={"/assets/icons/linkedin-icon.svg"}
                alt="linkedin"
                height={24}
                width={24}
              />
            </Link>
            <div className="h-4 border-r-2 border-r-foreground/80" />
            <LanguageDropdown />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DesktopNavbar;

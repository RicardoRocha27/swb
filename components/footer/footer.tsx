import Image from "next/image";
import Link from "next/link";

import Logo from "./logo";

const Footer = () => {
  return (
    <div className="w-full bg-foreground py-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex justify-center items-center">
          <div className="flex items-center space-x-8">
            <Logo />
            <div className="h-4 border-r-2 border-r-background/80" />
            <Link
              href={"https://linkedin.com/company/superwebbuilders"}
              target="_blank"
              className="rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              <Image
                src={"/assets/icons/linkedin-white-icon.svg"}
                alt="linkedin"
                height={24}
                width={24}
              />
            </Link>
          </div>
        </div>
        <p className="text-background/80 text-sm">
          2023 &copy; All rights reserved - Super Web Builders - Lisbon
        </p>
      </div>
    </div>
  );
};

export default Footer;

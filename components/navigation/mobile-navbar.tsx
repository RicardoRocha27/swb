"use client";

import { usePathname } from "next/navigation";
import { Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LanguageToggle from "./language-toggle";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Logo from "@/public/assets/brand/logo.png";

type TMobileNavbar = {
  navigationContent: {
    label: string;
    route: string;
  }[];
};

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex md:hidden z-20 items-center justify-between w-full fixed top-0 left-0 bg-background px-4 py-2"
      )}
    >
      <Link href={"/"}>
        <Image className="my-2" alt="logo" width={130} height={40} src={Logo} />
      </Link>
      <div className="my-2">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-foreground cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="md:hidden">
            <div className="relative h-full">
              <SheetHeader>
                <Image src={Logo} width={130} alt="logo" />
                <Separator className="bg-secondary min-w-[100px] h-[1px] rounded-full my-2" />
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href={"/"} className="group">
                  <p className="text-foreground text-sm transition-all duration-300  relative w-fit">
                    <p>Services</p>
                    <span
                      className={cn(
                        "absolute w-0 h-[1.5px] bg-foreground/70 bottom-0 left-0 transition-all duration-300 group-hover:w-full"
                      )}
                    ></span>
                  </p>
                </Link>
                <Link href={"/"} className="group">
                  <p className="text-foreground text-sm transition-all duration-300  relative w-fit">
                    <p>About</p>
                    <span
                      className={cn(
                        "absolute w-0 h-[1.5px] bg-foreground/70 bottom-0 left-0 transition-all duration-300 group-hover:w-full"
                      )}
                    ></span>
                  </p>
                </Link>
                <Link href={"/"} className="group">
                  <p className="text-foreground text-sm transition-all duration-300 relative w-fit">
                    <p>Portfolio</p>
                    <span
                      className={cn(
                        "absolute w-0 h-[1.5px] bg-foreground/70 bottom-0 left-0 transition-all duration-300 group-hover:w-full"
                      )}
                    ></span>
                  </p>
                </Link>
                <Link href={"/"} className="group">
                  <p className="text-foreground text-sm transition-all duration-300  relative w-fit">
                    <p>Contacts</p>
                    <span
                      className={cn(
                        "absolute w-0 h-[1.5px] bg-foreground/70 bottom-0 left-0 transition-all duration-300 group-hover:w-full"
                      )}
                    ></span>
                  </p>
                </Link>
                {/*  Object.values(navigationContent).map((content, index) => (
                  <Link key={index} href={content.route} className="group">
                    <p className="text-foreground text-sm transition-all duration-300 group-hover:text-foreground/70 relative w-fit">
                      <p>{content.label}</p>
                      <span
                        className={cn(
                          "absolute w-0 h-[1.5px] bg-foreground/70 bottom-0 left-0 transition-all duration-300 group-hover:w-full",
                          pathname === content.route && "w-full bg-foreground"
                        )}
                      ></span>
                    </p>
                  </Link>
                        ))*/}
              </nav>
              <SheetFooter>
                <div className="flex gap-x-4 items-center mt-8 w-full">
                  <Link href={"/"} target="_blank">
                    <Image
                      src={"/assets/icons/linkedin-icon.svg"}
                      alt="linkedin"
                      height={24}
                      width={24}
                    />
                  </Link>
                  <LanguageToggle />
                </div>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNavbar;

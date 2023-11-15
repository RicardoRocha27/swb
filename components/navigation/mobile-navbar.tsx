"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetPrimitive,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import MenuItem, { TNavbarRoute } from "./menu-item";
import LanguageToggle from "./language-toggle";

import Logo from "@/public/assets/brand/logo.png";

type TMobileNavbar = {
  routes: { [key: string]: TNavbarRoute };
};

const MobileNavbar = ({ routes }: TMobileNavbar) => {
  return (
    <div
      className={cn("flex md:hidden items-center justify-between px-4 py-2")}
    >
      <Link href={"/"}>
        <Image className="my-2" alt="logo" width={130} height={40} src={Logo} />
      </Link>
      <div className="my-2">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-foreground cursor-pointer" aria-hidden />
          </SheetTrigger>
          <SheetContent className="md:hidden">
            <div className="relative h-full">
              <SheetHeader>
                <Image src={Logo} width={130} alt="logo" />
                <Separator className="bg-secondary min-w-[100px] h-[1px] rounded-full my-2" />
              </SheetHeader>
              <nav className="mt-8 space-y-3">
                {Object.values(routes).map((route, index) => (
                  <SheetPrimitive.Close key={index} className="flex flex-col">
                    <MenuItem item={route} />
                  </SheetPrimitive.Close>
                ))}
              </nav>
              <SheetFooter>
                <div className="flex gap-x-4 items-center mt-8 w-full">
                  <Link
                    href={"https://linkedin.com/company/superwebbuilders"}
                    target="_blank"
                  >
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

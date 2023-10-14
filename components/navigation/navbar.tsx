import { CustomLocale } from "@/types";
import DesktopNavbar from "./desktop-navbar";
import { TNavbarRoute } from "./menu-item";
import { getDictionary } from "@/lib/get-dictionary";
import MobileNavbar from "./mobile-navbar";

type TNavbar = {
  locale: CustomLocale;
};

const Navbar = async ({ locale }: TNavbar) => {
  const dictionary = await getDictionary(locale);
  const routes = dictionary.routes;

  return (
    <div>
      <DesktopNavbar routes={routes} />
      <MobileNavbar />
    </div>
  );
};

export default Navbar;

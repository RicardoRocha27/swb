import { CustomLocale } from "@/types";
import DesktopNavbar from "./desktop-navbar";
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
      <MobileNavbar routes={routes} />
    </div>
  );
};

export default Navbar;

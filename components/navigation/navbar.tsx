import { CustomLocale } from "@/types";
import DesktopNavbar from "./desktop-navbar";
import { TNavbarRoute } from "./menu-item";
import { getDictionary } from "@/lib/get-dictionary";

type TNavbar = {
  locale: CustomLocale;
};

const Navbar = async ({ locale }: TNavbar) => {
  const dictionary = await getDictionary(locale);
  const routes = dictionary.routes;

  return (
    <div>
      <DesktopNavbar routes={routes} />
    </div>
  );
};

export default Navbar;

import { TNavbarRoute } from "@/types";
import DesktopNavbar from "./desktop-navbar";

const Navbar = () => {
  const routes: { [key: string]: TNavbarRoute } = {
    services: {
      label: "Services",
      path: "#services",
    },
    about: {
      label: "About",
      path: "#testimonials",
    },
    portfolio: {
      label: "Portfolio",
      path: "#portfolio",
    },
    testimonials: {
      label: "Testimonials",
      path: "#testimonials",
    },
  };

  return (
    <div>
      <DesktopNavbar routes={routes} />
    </div>
  );
};

export default Navbar;

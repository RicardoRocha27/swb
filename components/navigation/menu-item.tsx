"use client";

export type TNavbarRoute = {
  label: string;
  path: string;
};

type TMenuItem = {
  item: TNavbarRoute;
};

const MenuItem = ({ item }: TMenuItem) => {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <div className="relative group">
      <div
        onClick={() => handleScroll(item.path)}
        className="text-sm md:text-base cursor-pointer group-hover:text-primary duration-300 ring-offset-background transition-colors focus:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        {item.label}
      </div>
      <div className="absolute w-0 md:group-hover:w-full group-hover:origin-middle bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-primary transition-all duration-300" />
    </div>
  );
};

export default MenuItem;

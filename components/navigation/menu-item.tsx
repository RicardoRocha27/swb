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
    <div
      onClick={() => handleScroll(item.path)}
      className="text-sm md:text-base cursor-pointer rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {item.label}
    </div>
  );
};

export default MenuItem;

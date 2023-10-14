"use client";

import Link from "next/link";

export type TNavbarRoute = {
  label: string;
  path: string;
};

type TMenuItem = {
  item: TNavbarRoute;
};

const MenuItem = ({ item }: TMenuItem) => {
  return (
    <Link
      href={item.path}
      className="rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {item.label}
    </Link>
  );
};

export default MenuItem;

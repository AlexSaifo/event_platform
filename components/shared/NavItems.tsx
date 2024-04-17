"use client"
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();

  const NavItemMap = () => {
    return headerLinks.map((item) => {
      const isActive = pathname == item.route;
      return (
        <li
          key={item.route}
          className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap `}
        >
          <Link href={item.route}>{item.label}</Link>
        </li>
      );
    });
  };

  return (
    <ul className="flex md:flex-between w-full flex-col items-start gap-5 md:flex-row ">
      {NavItemMap()}
    </ul>
  );
};

export default NavItems;

import Link from "next/link";
import React from "react";
import { MdClose } from "react-icons/md";

// type MenuProps = {
//   MENU:{
//     title:string;
//     href:number;
//   }
// }

const MENU = [
  {
    href: "/aboutPages",
    title: "About",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/portfolio",
    title: "Portfolio",
  },
  {
    href: "/contact",
    title: "Contact",
  },
];

export const Menu = () => {
  return (
    <div className="h-screen w-full bg-pink-600 p-6 text-white">
      <div className="py-11 text-3xl font-bold">
        <Link href="/">
          <a>
            <MdClose />
          </a>
        </Link>
      </div>
      <div className="w-24 text-2xl font-bold">
        {MENU.map((menu) => {
          return (
            <div key={menu.title} className="my-3">
              <Link href={menu.href}>
                <a>{menu.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

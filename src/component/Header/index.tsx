import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";

const LINKS = [
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
    href: "/contactPages",
    title: "Contact",
  },
];

export const Header = () => {
  return (
    <div className=" w-auto pt-11 sm:ml-24 sm:justify-around sm:pt-0">
      <div className="mx-4 flex h-16 items-center justify-between text-lg font-bold sm:mx-4">
        <div className="sm:hidden sm:bg-purple-600">
          <Link href="/menuPages">
            <a>
              <FaBars />
            </a>
          </Link>
        </div>
        <div className="font-[Avenir_Next] sm:w-56 sm:flex-1 sm:pl-28 ">
          <Link href="/">
            <a>
              <p className="sm:ml:20 sm:w-64">Shimabu IT University</p>
            </a>
          </Link>
        </div>

        <div className="sm:flex2 hidden w-auto sm:flex sm:justify-end  sm:pl-20 ">
          {LINKS.map((links) => {
            return (
              <div key={links.title} className="mr-4">
                <Link href={links.href}>
                  <a>{links.title}</a>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-2xl sm:mr-28">
          <MdOutlineDarkMode />
        </div>
      </div>
    </div>
  );
};

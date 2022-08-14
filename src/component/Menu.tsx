import Link from "next/link";
import React from "react";
import { MdClose } from "react-icons/md";
const Menu = () => {
  return (
    <div className="h-screen w-full bg-pink-600 p-6 text-white">
      <div className="py-11 text-3xl font-bold">
        <Link href="/">
          <a>
            <MdClose />
          </a>
        </Link>
      </div>

      <div className="w-24   text-2xl font-bold">
        <div className="my-3">
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>

        <div className="my-3">
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>

        <div className="my-3">
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </div>

        <div className="my-3">
          <Link href="contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

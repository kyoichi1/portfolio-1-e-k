import React from "react";

type FooterProps = {
  copyright: string;
};

const Footer = (props: FooterProps) => {
  return (
    <div>
      <div className="my-auto mx-4 mt-10 w-96 border-t-2 sm:w-auto "></div>
      <div className="mx-4 flex h-20 w-96 items-center justify-center text-xs text-gray-500 sm:w-auto">
        <p>{props.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;

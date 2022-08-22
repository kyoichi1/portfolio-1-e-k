import React from "react";

type AboutProps = {
  pageTitle: string;
  title: string;
  text: string;
};

const About = (props: AboutProps) => {
  return (
    <div className="mx-4 mt-10 sm:ml-56  sm:mr-32 sm:min-w-fit  ">
      <div className="my-4 text-3xl font-bold text-gray-800 ">
        <h1>{props.pageTitle}</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="Class Preview mt-4  h-28">
        <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700">
          <h2>{props.title}</h2>
        </div>
        <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700">
          <p className="h-24 overflow-hidden text-ellipsis ">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

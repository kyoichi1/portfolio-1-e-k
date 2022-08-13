import React from "react";

const About = () => {
  return (
    <div className="mx-4 mt-10">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>About</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="Class Preview mt-4  h-[119px]">
        <div className="font-['YuGothic'] text-[22px]  font-bold text-gray-700">
          <h2> This is a header </h2>
        </div>
        <div className="text-gray-80  h-[ 50px] font-[ 'YuGothic'] mt-2 text-clip text-gray-700">
          <p className="h-24 overflow-hidden text-ellipsis ">
            ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

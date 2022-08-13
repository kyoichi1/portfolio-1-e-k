import React from "react";
import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";

const Title = () => {
  return (
    <div className=" h-60 w-auto items-center bg-pink-600 text-white sm:pl-24 ">
      <div className="h-40 items-center justify-center  px-4 sm:flex sm:h-64  sm:justify-between sm:px-32">
        <div className=" h-28 justify-center pt-16 font-bold sm:mr-4 sm:min-w-fit sm:pt-6">
          {/* タイトル */}
          <div className=" flex  font-['Avenir_Next'] text-2xl ">
            <h1>Shimabu IT University</h1>
          </div>
          <div className="font-['YuGothic'] text-base ">
            <h2>しまぶーのポートフォリオのためのページです</h2>
          </div>
        </div>
        {/* ソーシャルアイコン */}
        <div className="flex h-32 w-20 items-center sm:min-w-fit ">
          <div className="mr-3">
            <FaTwitter />
          </div>
          <div className="mr-3">
            <FaFacebook />
          </div>
          <div className="mr-3">
            <FaRss />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;

import type { NextPage } from "next";

const AboutPages: NextPage = () => {
  return (
    <div className="m-auto flex min-h-[77vh] w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <div className="mx-4 mt-10 sm:ml-56  sm:mr-32 sm:min-w-fit  ">
          <div className="my-4 text-3xl font-bold text-gray-800 ">
            <h1>About</h1>
          </div>
          <div className="border-t-2"></div>
          <div className="Class Preview mt-4  h-28">
            <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700">
              <h2>This is a header</h2>
            </div>
            <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700">
              <p className="h-24 ">
                ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPages;

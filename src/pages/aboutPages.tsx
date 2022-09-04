import type { NextPage } from "next";
import About from "src/component/About";

const AboutPages: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <About pageTitle="About" title="This is a header" text="ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。"/>
      </div>
    </div>
  );
};

export default AboutPages;

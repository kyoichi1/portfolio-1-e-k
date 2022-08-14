import type { NextPage } from "next";
import Blog from "src/component/Blog";
import Button from "src/component/Button";
import Contact from "src/component/Contact";
import Footer from "src/component/Footer";
import Header from "src/component/Header";
import Portfolio from "src/component/Portfolio";

const portfolio: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <Header />
      <div className="flex-grow ">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
};

export default portfolio;

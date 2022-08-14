import type { NextPage } from "next";
import Footer from "src/component/Footer";
import Header from "src/component/Header";
import About from "src/component/About";

const about: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <Header />
      <div className="flex-grow ">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default about;

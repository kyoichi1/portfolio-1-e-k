import type { NextPage } from "next";
import Blog from "src/component/Blog";
import Footer from "src/component/Footer";
import Header from "src/component/Header";

const blog: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <Header />
      <div className="flex-grow ">
        <Blog />
      </div>
      <Footer />
    </div>
  );
};

export default blog;

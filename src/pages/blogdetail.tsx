import type { NextPage } from "next";
import BlogDetail from "src/component/BlogDetail";
import Footer from "src/component/Footer";
import Header from "src/component/Header";

const blogdetail: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <Header />
      <div className="flex-grow ">
      <BlogDetail/>
      </div>
      <Footer />
    </div>
  );
};

export default blogdetail;

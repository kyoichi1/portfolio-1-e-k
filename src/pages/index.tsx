import type { NextPage } from "next";
import Blog from "src/component/Blog";
import Button from "src/component/Button";
import Footer from "src/component/Footer";
import GitHub from "src/component/GitHub";
import Header from "src/component/Header";
import Portfolio from "src/component/Portfolio";
import Title from "src/component/Title";
import Twitter from "src/component/Twitter";
// import Menu from "src/component/Menu";
// import About from "src/component/About";
// import BlogDetail from "src/component/BlogDetail";
// import Contact from "src/component/Contact";

const Test: NextPage = () => {
  return (
    <div className="m-auto w-96 sm:w-auto ">
      {/* <Menu/> */}
      {/* <About/> */}
      {/* <BlogDetail/> */}
      {/* <Contact/> */}
      <Header />
      <Title />
      <Blog />
      <Button title="View All" />
      <Portfolio />
      <Button title="View All" />

      <div className="justify-between sm:mx-52 sm:flex ">
        <div className="w-96 ">
          <GitHub />
          <Button title="View on GitHub" />
        </div>
        <div className="sm:w-96">
          <Twitter />
          <div className="mt-7 sm:mt-10">
            <Button title="View on Twitter" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Test;

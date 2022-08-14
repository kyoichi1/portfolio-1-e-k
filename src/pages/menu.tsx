import type { NextPage } from "next";
import Footer from "src/component/Footer";
import Header from "src/component/Header";
import Menu from "src/component/Menu";

const menu: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
  <Menu/>
    </div>
  );
};

export default menu;

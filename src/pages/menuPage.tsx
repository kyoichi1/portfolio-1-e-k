import type { NextPage } from "next";
import Menu from "src/component/Menu";

const menuPage: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <Menu/>
    </div>
  );
};

export default menuPage;

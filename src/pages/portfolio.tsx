import type { NextPage } from "next";
import Portfolio from "src/component/Portfolio";

const portfolio: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <Portfolio />
      </div>
    </div>
  );
};

export default portfolio;

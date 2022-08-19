import type { NextPage } from "next";
import About from "src/component/About";

const about: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <About />
      </div>
    </div>
  );
};

export default about;

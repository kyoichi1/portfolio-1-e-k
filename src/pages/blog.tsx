import type { NextPage } from "next";
import Blog from "src/component/Blog";

const blog: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow">
        <Blog />
      </div>
    </div>
  );
};

export default blog;

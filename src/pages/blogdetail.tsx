import type { NextPage } from "next";
import BlogDetail from "src/component/BlogDetail";


const blogdetail: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
      <BlogDetail/>
      </div>
    </div>
  );
};

export default blogdetail;

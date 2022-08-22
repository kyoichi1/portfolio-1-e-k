import type { NextPage } from "next";
import BlogDetail from "src/component/BlogDetail";

const blogdetail: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <BlogDetail
          title="This is header"
          article="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit."
          CreatedDate="22.07.11"
        />
      </div>
    </div>
  );
};

export default blogdetail;

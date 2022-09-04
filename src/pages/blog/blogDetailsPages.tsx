import type { NextPage } from "next";
import BlogDetails from "src/component/Blog/BlogDetails";

const BlogDetailsPages: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <BlogDetails
          title="This is header"
          article="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
  sint. Velit officia consequat duis enim velit mollit."
          CreatedDate="22.07.11"
        />
      </div>
    </div>
  );
};

export default BlogDetailsPages;

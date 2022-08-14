import React from "react";

const BlogDetail = () => {
  return (
    <div className="mx-4 mt-10 min-w-min sm:ml-56 sm:mr-32 sm:w-auto">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>This is header</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="Class Preview mt-4  h-28">
        <div className="my-2 font-['Avenir_Next'] text-xs font-bold text-gray-400">
          <p>22.07.11</p>
        </div>
        <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700">
          <p className="text-ellipsis ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

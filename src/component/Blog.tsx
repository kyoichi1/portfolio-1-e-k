import React from "react";

const Blog = () => {
  return (
    <div className="mx-4 mt-10 sm:mx-56">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>Blog</h1>
      </div>
      <div className="border-t-2"></div>
      {/* Blogコンテンツ */}
      <div className="Class Preview mt-4  h-32  sm:h-24 sm:mb-10">
        {/* Blogタイトル */}
        <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700">
          <h1> This is a header </h1>
        </div>
        {/* Blog記事内容 */}
        <div className="text-gray-80  font-['YuGothic'] mt-2 h-12 text-clip text-gray-700 ">
          <p className="h-12 overflow-hidden text-ellipsis ">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        {/* Blog投稿日時 */}
        <div className=" font-['Avenir_Next'] text-xs font-bold text-gray-400 ">
          <p>22.07.11</p>
        </div>
      </div>


    </div>
  );
};

export default Blog;

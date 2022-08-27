import React from "react";

type blogdetailProps = {
  title: string;
  article: string;
  CreatedDate: string;
};

const BlogDetail = (props: blogdetailProps) => {
  return (
    <div className="mx-4 mt-10 min-w-min sm:ml-56 sm:mr-32 sm:w-auto">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>{props.title}</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="Class Preview mt-4  h-28">
        <div className="my-2 font-['Avenir_Next'] text-xs font-bold text-gray-400">
          <p>{props.CreatedDate}</p>
        </div>
        <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700">
          <p className="text-ellipsis ">{props.article}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

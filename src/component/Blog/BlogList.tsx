import Link from "next/link";
import React from "react";

const BLOGS = [
  {
    title: "This is a header1",
    article:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    CreatedDate: "22.07.11",
  },
  {
    title: "This is a header2",
    article:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    CreatedDate: "22.07.11",
  },
  {
    title: "This is a header3",
    article:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    CreatedDate: "22.07.11",
  },
  {
    title: "This is a header4",
    article:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    CreatedDate: "22.07.11",
  },
  {
    title: "This is a header5",
    article:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    CreatedDate: "22.07.11",
  },
  {
    title: "This is a header6",
    article:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    CreatedDate: "22.07.11",
  },
  {
    title: "This is a header7",
    article:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    CreatedDate: "22.07.11",
  },
];

const BlogList = () => {
  return (
    <div className="mx-4 mt-10 sm:mx-56">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>Blog</h1>
      </div>
      <div className="border-t-2"></div>
      {BLOGS.map((blogs) => {
        return (
          <Link href="blog/blogDetailsPages" key={blogs.title}>
            <a>
              <div className="Class Preview mt-4  h-32  hover:cursor-pointer sm:mb-10  sm:h-24">
                {/* Blogタイトル */}
                <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700">
                  <h1>{blogs.title}</h1>
                </div>
                {/* Blog記事内容 */}
                <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700 ">
                  <p className="h-12 overflow-hidden text-ellipsis ">
                    {blogs.article}
                  </p>
                </div>
                {/* Blog投稿日時 */}
                <div className=" font-['Avenir_Next'] text-xs font-bold text-gray-400 ">
                  <p>{blogs.CreatedDate}</p>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;


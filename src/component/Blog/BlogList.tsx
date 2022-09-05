import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import React, { FC } from "react";
import { Blog } from "src/pages/blog";

type Props = MicroCMSListResponse<Blog>;

const BlogList: FC<Props> = (props) => {
  return (
    <div className="mx-4 mt-10 sm:mx-56">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>Blog</h1>
      </div>
      <div className="border-t-2"></div>
      {/* {BLOGS.map((blogs) => {
        return (
          <Link href="blog/blogDetailsPages" key={blogs.title}>
            <a>
              <div className="Class Preview mt-4  h-32  hover:cursor-pointer sm:mb-10  sm:h-24">
           
                <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700">
                  <h1>{blogs.title}</h1>
                </div>
              
                <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700 ">
                  <p className="h-12 overflow-hidden text-ellipsis ">
                    {blogs.article}
                  </p>
                </div>
               
                <div className=" font-['Avenir_Next'] text-xs font-bold text-gray-400 ">
                  <p>{blogs.CreatedDate}</p>
                </div>
              </div>
            </a>
          </Link>
        );
      })} */}
      {props.contents.map((content) => {
        return (
          <div key={content.id}>
            <Link href={`/blog/${content.id}`}>
              <a>
                <div className="mt-4 h-32  hover:cursor-pointer sm:mb-10  sm:h-24  ">
                  <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700">
                    <h1>{content.title}</h1>
                  </div>
                  <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700">
                    <div
                      className="h-12 overflow-hidden text-ellipsis"
                      dangerouslySetInnerHTML={{ __html: content.body }}
                    />
                  </div>
                  <div className="my-2 font-['Avenir_Next'] text-xs font-bold text-gray-400">
                    {dayjs(content.createdAt).format("YYYY.MM.DD")}
                  </div>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;

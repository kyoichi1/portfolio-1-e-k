import dayjs from "dayjs";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { PortfolioType } from "src/pages/portfolio";

type Props = MicroCMSListResponse<PortfolioType>;

export const Portfolio: FC<Props> = (props) => {
  return (
    <div className="mx-4 mt-10 sm:mx-56 sm:mr-32 sm:w-auto">
      <div className="text-3xl font-bold text-gray-800">
        <h1>Portfolio</h1>
      </div>
      <div className="my-4 border-t-2"></div>

      <div className="sm:flex sm:flex-wrap">
        {props.contents.map((content) => {
          return (
            <div key={content.id} className="h-96 sm:mr-4 sm:w-72 ">
              <div className="mt-6">
                <Link href={`/portfolio/${content.id}`}>
                  <a>
                    <Image
                      className="w-[390px] bg-purple-300"
                      src={content.image.url}
                      width={385}
                      height={200}
                      alt=""
                    />
                    <div className="my-3 h-4 font-['YuGothic'] text-2xl font-bold text-gray-700">
                      <h1>{content.title}</h1>
                    </div>
                    <div className="mt-6 text-clip font-['YuGothic'] text-gray-700">
                      <div
                        className="text-ellipsis"
                        dangerouslySetInnerHTML={{ __html: content.text }}
                      />
                    </div>
                    <div className="my-2 font-['Avenir_Next'] text-xs font-bold text-gray-400">
                      {dayjs(content.productionStart).format("YYYY.MM.DD")} -{" "}
                      {dayjs(content.productionEnd).format("YYYY.MM.DD")}
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

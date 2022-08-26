// import type { NextPage } from "next";
// import Portfolio from "src/component/Portfolio";

// const portfolio: NextPage = () => {
//   return (
//     <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
//       <div className="flex-grow ">
//         <Portfolio />
//       </div>
//     </div>
//   );
// };

// export default portfolio;

import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { client } from "src/libs/client";
import dayjs from "dayjs";

export type Portfolio = {
  title: string;
  text: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  link: string;
  productionStart: string;
  productionEnd: string;
};

type Props = MicroCMSListResponse<Portfolio>;

const portfolio: NextPage<Props> = (props) => {
  return (
    <div className="mx-4 mt-10 sm:mx-56  sm:mr-32 sm:w-auto">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>Portfolio</h1>
      </div>
      <div className="border-t-2"></div>

      <div className="sm:flex sm:flex-wrap">
        {props.contents.map((content) => {
          return (
            <div key={content.id} className="h-96 sm:mr-4 sm:w-72 ">
              <div className="mt-6">
                <Image
                  className="w-[390px] bg-purple-300"
                  src={content.image.url}
                  width={385}
                  height={200}
                  alt=""
                />

                <Link href={`/portfolio/${content.id}`}>
                  <a>
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Portfolio>({ endpoint: "portfolio" });
  return {
    props: data,
  };
};

export default portfolio;

import Image from "next/image";
import React, { FC } from "react";

/* データ受け取りの際にこの型が使えれば使う予定（モック用/現在はporpsで受取してないので利用していない） */
// type TwitterProps = {
//   userName: string;
//   userAccount: string;
//   userImage: string;
//   text: string;
//   image?: string;
//   date: string;
//   link?: string;
// };

/* TODO 今はデータをここに書いてMapを使っているが、APIからデータを取得に変更する */
const TWITTER = [
  {
    userName: "しまぶーのIT大学",
    userAccount: "shimabu",
    userImage: "/Twitter-shimabu.png",
    text: "",
    date: "5月25日",
    link: "https://www.noway-form.com/ja",
  },
  {
    userName: "しまぶーのIT大学",
    userAccount: "shimabu",
    userImage: "/Twitter-shimabu.png",
    text: "",
    date: "5月26日",
    link: "https://www.noway-form.com/ja",
  },
  {
    userName: "しまぶーのIT大学",
    userAccount: "shimabu",
    userImage: "/Twitter-shimabu.png",
    text: "",
    date: "5月27日",
    link: "https://www.noway-form.com/ja",
  },
];

export const Twitter = () => {
  return (
    <div className="mx-4 mt-10 w-96 ">
      <div className="my-4 text-3xl font-bold">
        <h1>Twitter</h1>
      </div>
      <div className="border-t-2"></div>

      {TWITTER.map((twitter) => {
        return (
          <div key={twitter.date} className="">
            <div className="mt-10  h-64 ">
              <div className="items-center text-clip rounded font-['YuGothic']  font-light text-gray-700 ">
                <div className="flex">
                  <div className="m-2">
                    <Image
                      className="items-center rounded-full"
                      src={twitter.userImage}
                      width={40}
                      height={40}
                      alt=""
                    />
                  </div>
                  <div className="w-80 text-ellipsis">
                    <div className="ml-2 flex items-center font-bold ">
                      <p className=" overflow-hidden  font-bold ">
                        {twitter.userName}
                      </p>
                      <p className=" ml-2 overflow-hidden  text-xs text-gray-500">
                        {`@${twitter.userAccount}`}
                      </p>
                      <p className="ml-2 overflow-hidden  text-xs text-gray-500">
                        {twitter.date}
                      </p>
                    </div>

                    <div className="mx-2 my-4 text-sm">
                      <p>
                        📣 新サービス「Noway Form」をリリースしました!
                        <br />
                        <br /> Noway
                        Formは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨
                        <br />
                        <br />
                        試しに使っていただけると幸いです😊
                        <br />
                        <br />
                        {twitter.link ? (
                          <a className="text-blue-400" href={twitter.link}>
                            {twitter.link}
                          </a>
                        ) : null}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

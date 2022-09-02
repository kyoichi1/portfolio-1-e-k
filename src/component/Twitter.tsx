import Image from "next/image";
import React from "react";

type TwitterProps = {
  user: {
    userName: string;
    userAccount: string;
    userImage: string;
  };
  body: {
    text: string;
    image?: string;
    date: string;
    link?: string;
  };
};

const Twitter = (props: TwitterProps) => {
  return (
    <div className="mx-4 mt-10 w-96 ">
      <div className="my-4 text-3xl font-bold">
        <h1>Twitter</h1>
      </div>
      <div className="border-t-2"></div>

      {/*投稿内容 */}
      <div className="">
        <div className="mt-10  h-64 ">
          <div className="items-center text-clip rounded font-['YuGothic']  font-light text-gray-700 ">
            <div className="flex">
              <div className="m-2">
                <Image
                  className="items-center rounded-full"
                  src={props.user.userImage}
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="w-80 text-ellipsis">
                <div className="ml-2 flex items-center font-bold ">
                  <p className=" overflow-hidden  font-bold ">
                    {props.user.userName}
                  </p>
                  <p className=" ml-2 overflow-hidden  text-xs text-gray-500">
                    {`@${props.user.userAccount}`}
                  </p>
                  <p className="ml-2 overflow-hidden  text-xs text-gray-500">
                    {props.body.date}
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
                    {props.body.link ? (
                      <a className="text-blue-400" href={props.body.link}>
                        {props.body.link}
                      </a>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*投稿内容 */}
      <div className="">
        <div className="mt-10   h-64 ">
          <div className="items-center text-clip rounded font-['YuGothic']  font-light text-gray-700 ">
            <div className="flex">
              <div className="m-2">
                <Image
                  className="items-center rounded-full"
                  src="/Twitter-shimabu.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="w-80 text-ellipsis">
                <div className="ml-2 flex items-center font-bold ">
                  <p className=" overflow-hidden  font-bold ">
                    しまぶーのIT大学
                  </p>
                  <p className=" ml-2 overflow-hidden  text-xs text-gray-500">
                    @shimabu
                  </p>
                  <p className="ml-2 overflow-hidden  text-xs text-gray-500">
                    5月25日
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
                    <a
                      className="text-blue-400"
                      href="https://www.noway-form.com/ja"
                    >
                      https://www.noway-form.com/ja
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*投稿内容 */}
      <div className="">
        <div className="mt-10  h-64 ">
          <div className="items-center text-clip rounded font-['YuGothic']  font-light text-gray-700 ">
            <div className="flex">
              <div className="m-2">
                <Image
                  className="items-center rounded-full"
                  src="/Twitter-shimabu.png"
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="w-80 text-ellipsis">
                <div className="ml-2 flex items-center font-bold ">
                  <p className=" overflow-hidden  font-bold ">
                    しまぶーのIT大学
                  </p>
                  <p className=" ml-2 overflow-hidden  text-xs text-gray-500">
                    @shimabu
                  </p>
                  <p className="ml-2 overflow-hidden  text-xs text-gray-500">
                    5月25日
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
                    <a
                      className="text-blue-400"
                      href="https://www.noway-form.com/ja"
                    >
                      https://www.noway-form.com/ja
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;

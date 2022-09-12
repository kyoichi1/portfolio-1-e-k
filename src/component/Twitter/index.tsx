/* eslint-disable @next/next/no-img-element */
import dayjs from "dayjs";
import React, { FC } from "react";

// TODO:SDKの中の型を見つけて型付けが必要（見つかる気配相当薄い...）
type Props = {
  twitter: any;
};
export const Twitter: FC<Props> = (props) => {
  return (
    <div className="mx-4 mt-10 w-96 sm:ml-9">
      <div className="my-4 text-3xl font-bold">
        <h1>Twitter</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="h-[878px] overflow-y-auto">
        {props.twitter.tweetlist.data.map((value: any) => {
          return (
            <div key={value.id}>
              <div className="mt-10 ">
                <div className="items-center text-clip rounded font-['YuGothic']  font-light text-gray-700 ">
                  <div className="flex">
                    <div className="m-2">
                      {/* TODO:Next/Imageは基本このまま使うとエラーとなるが、ゴリゴリすると設定できるとのことなので変更対応できればしたい*/}
                      {/* <Image
                          className="items-center rounded-full bg-blue-600"
                          src="{props.tw.user.data.profile_image_url}"
                          width={40}
                          height={40}
                          alt=""
                        /> */}
                      <img
                        className="h-[40px] w-[40px] items-center rounded-full"
                        src={props.twitter.user.data.profile_image_url}
                        alt=""
                      ></img>
                    </div>
                    <div className="mt-4 w-80 text-ellipsis">
                      <div className="ml-2 flex items-center font-bold ">
                        <p className=" overflow-hidden  font-bold ">
                          {props.twitter.user.data.name}
                        </p>
                        <p className=" ml-2 overflow-hidden  text-xs text-gray-500">
                          {`@${props.twitter.user.data.username}`}
                        </p>
                        {/* TODO：取ってこれてる日程データが違う気がします...修正予定*/}
                        <p className="ml-2 overflow-hidden  text-xs text-gray-500">
                          {dayjs(props.twitter.user.data.created_at).format(
                            "MM月DD日"
                          )}
                        </p>
                      </div>
                      <div className="mx-2 my-4 text-sm">
                        {/*TODO： dangerouslySetInnerHTMLが効いていない...<a>タグと＃を表示できるように調整が必要 */}
                        <div
                          className=""
                          dangerouslySetInnerHTML={{ __html: value.text }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

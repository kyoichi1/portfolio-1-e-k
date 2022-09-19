import dayjs from "dayjs";
import Image from "next/image";
import React, { FC } from "react";

export type Props = {
  user: {
    data?: UserData;
  };
  tweetlist?: {
    data?: {
      id?: string;
      author_id?: string;
      created_at?: string;
      text?: string;
    }[];
    includes?: {
      users?: {
        name?: string;
        id?: string;
        username?: string;
        profile_image_url?: string;
      }[];
    };
    meta?: {
      result_count?: number;
      newest_id?: string;
      oldest_id?: string;
      next_token?: string;
    };
  };
};

// 外部に出して表示してみてます
type UserData = {
  id?: string;
  username?: string;
  name?: string;
  profile_image_url?: string;
};

export const Twitter: FC<Props> = (props) => {
  // 型確認のためのログ
  // console.dir(props, { depth: null });
  const list = props.tweetlist?.data;
  const user = props.user.data;
  return (
    <div className="mx-4 mt-10 w-96 sm:ml-9">
      <div className="my-4 text-3xl font-bold">
        <h1>Twitter</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="h-[878px] overflow-y-auto">
        {list?.map((value) => {
          return (
            <div key={value.id}>
              <div className="mt-10 ">
                <div className="items-center text-clip rounded font-['YuGothic']  font-light text-gray-700 ">
                  <div className="flex">
                    <div className="m-2">
                      <Image
                        className="items-center rounded-full bg-blue-600"
                        src={user?.profile_image_url ?? ""}
                        width={40}
                        height={40}
                        alt="profile_image"
                      />
                    </div>
                    <div className="mt-4 w-80 text-ellipsis">
                      <div className="ml-2 flex items-center font-bold ">
                        <p className=" overflow-hidden  font-bold ">
                          {user?.name}
                        </p>
                        <p className=" ml-2 overflow-hidden  text-xs text-gray-500">
                          {`@${user?.username}`}
                        </p>
                        <p className="ml-2 overflow-hidden  text-xs text-gray-500">
                          {dayjs(value.created_at).format("MM月DD日")}
                        </p>
                      </div>
                      <div className="mx-2 my-4 text-sm">
                        {/*TODO： dangerouslySetInnerHTMLが効いていない...<a>タグと＃を表示できるように調整が必要 */}
                        <div
                          className=""
                          dangerouslySetInnerHTML={{ __html: value.text ?? "" }}
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

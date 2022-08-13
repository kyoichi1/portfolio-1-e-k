import React from "react";

const Contact = () => {
  return (
    <div className="mx-4 mt-10">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>Contact</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="Class Preview mt-4  h-[119px]">
        <div className="font-['YuGothic'] text-[22px]  font-bold text-gray-700"></div>
        <div className="text-gray-80  h-[ 50px] font-[ 'YuGothic'] mt-2 text-clip text-gray-700">
          <div className="w-[358px] items-center justify-center ">
            <label className="block text-xs font-semibold">Email</label>
            <input
              className=" mt-1 h-8 w-full rounded-sm border-2 border-gray-200 pl-2 text-sm text-gray-300 "
              type="email"
              name=""
              id=""
              value={"your@email.com"}
            />
          </div>

          <div className="mt-10 w-[358px] items-center justify-center">
            <label className="block text-xs font-semibold">Name</label>
            <input
              className=" mt-1 h-8 w-full rounded-sm border-2 border-gray-200 pl-2 text-sm text-gray-300 "
              type="text"
              name=""
              id=""
              value={"Taro Yamada"}
            />
          </div>

          <div className="mt-10 w-[358px] items-center justify-center">
            <label className="block text-xs font-semibold">Name</label>
            <textarea
              className=" mt-1 h-24 w-full rounded-sm border-2 border-gray-200  pl-2 text-sm text-gray-300"
              name=""
              id=""
              value={"I want to order your goods"}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-64 flex w-96 items-center justify-center  ">
        <button className="rounded-3xl bg-gray-800 py-[10px] px-[20px] text-base text-white">
          Send message
        </button>
      </div>
    </div>
  );
};

export default Contact;

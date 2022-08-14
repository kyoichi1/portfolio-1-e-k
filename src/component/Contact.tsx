import React from "react";

const Contact = () => {
  return (
    <div className="m-4 mt-10 sm:ml-56 sm:mr-32 min-w-min sm:w-auto">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>Contact</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="Class Preview mt-4  h-28 ">
        <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700"></div>
        <div className="text-gray-80  h-12 font-['YuGothic'] mt-2 text-clip text-gray-700 ">
          <div className="w-[358px] items-center justify-center sm:w-auto ">
            <label className="block text-xs font-semibold">Email</label>
            <input
              className=" mt-1 h-8 w-full rounded-sm border-2 border-gray-200 pl-2 text-sm text-gray-300 "
              type="email"
              name=""
              id=""
              value={"your@email.com"}
            />
          </div>

          <div className="mt-10 w-[358px] items-center justify-center sm:w-auto ">
            <label className="block text-xs font-semibold">Name</label>
            <input
              className="mt-1 h-8 w-full rounded-sm border-2 border-gray-200 pl-2 text-sm text-gray-300 "
              type="text"
              name=""
              id=""
              value={"Taro Yamada"}
            />
          </div>

          <div className="mt-10 w-[358px] items-center justify-center sm:w-auto ">
            <label className="block text-xs font-semibold">Name</label>
            <textarea
              className="mt-1 h-24 w-full rounded-sm border-2 border-gray-200  pl-2 text-sm text-gray-300"
              name=""
              id=""
              value={"I want to order your goods"}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-64 flex w-96 items-center justify-center  sm:items-center sm:w-auto">
        <button className="rounded-3xl bg-gray-800 py-2 px-5 text-base text-white">
          Send message
        </button>
      </div>
    </div>
  );
};

export default Contact;

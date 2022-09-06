import React, { ComponentProps, useState } from "react";

export const Contact = () => {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();
    console.log(email, name, text);

    const data = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, name, text }),
    });
  };
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="m-4 mt-10 min-w-min sm:ml-56 sm:mr-32 sm:w-auto">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>Contact</h1>
      </div>
      <div className="border-t-2"></div>

      <form onSubmit={handleSubmit}>
        <div className="Class Preview mt-4  h-28 ">
          <div className="font-['YuGothic'] text-2xl  font-bold text-gray-700"></div>
          <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700 ">
            <div className="w-[358px] items-center justify-center sm:w-auto ">
              <label className="block text-xs font-semibold">Email</label>
              <input
                className=" mt-1 h-8 w-full rounded-sm border-2 border-gray-200 pl-2 text-sm  "
                type="email"
                name=""
                id=""
                placeholder={"your@email.com"}
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
              />
            </div>

            <div className="mt-10 w-[358px] items-center justify-center sm:w-auto ">
              <label className="block text-xs font-semibold">Name</label>
              <input
                className="mt-1 h-8 w-full rounded-sm border-2 border-gray-200 pl-2 text-sm  "
                type="text"
                name=""
                id=""
                placeholder={"Taro Yamada"}
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
            </div>

            <div className="mt-10 w-[358px] items-center justify-center sm:w-auto ">
              <label className="block text-xs font-semibold">Name</label>
              <textarea
                className="mt-1 h-24 w-full rounded-sm border-2 border-gray-200  pl-2 text-sm "
                name=""
                id=""
                placeholder={"I want to order your goods"}
                value={text}
                onChange={(e) => {
                  setText(e.currentTarget.value);
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-64 flex w-96 items-center justify-center  sm:w-auto sm:items-center">
          <button className="rounded-3xl bg-gray-800 py-2 px-5 text-base text-white">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

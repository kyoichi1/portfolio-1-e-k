import React from "react";
import { FaRegStar } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";

const ITEMS = [
  {
    title: "lightsound/nexst-tailwind",
    theme: "Next.js starter template.",
    href: "1",
    languages1: "TypeScript",
    languages2: "JavaScript",
    languages3: "Other",
    usageRatio1: 65.5,
    usageRatio2: 33.7,
    usageRatio3: 33.7,
    stars: 117,
    diffusion: 18,
  },
  {
    title: "lightsound/nexst-tailwind",
    theme: "Next.js starter template.",
    href: "2",
    languages1: "TypeScript",
    languages2: "JavaScript",
    languages3: "Other",
    usageRatio1: 65.5,
    usageRatio2: 33.7,
    usageRatio3: 33.7,
    stars: 117,
    diffusion: 18,
  },
  {
    title: "lightsound/nexst-tailwind",
    theme: "Next.js starter template.",
    href: "3",
    languages1: "TypeScript",
    languages2: "JavaScript",
    languages3: "Other",
    usageRatio1: 65.5,
    usageRatio2: 33.7,
    usageRatio3: 33.7,
    stars: 117,
    diffusion: 18,
  },
  {
    title: "lightsound/nexst-tailwind",
    theme: "Next.js starter template.",
    href: "4",
    languages1: "TypeScript",
    languages2: "JavaScript",
    languages3: "Other",
    usageRatio1: 65.5,
    usageRatio2: 33.7,
    usageRatio3: 33.7,
    stars: 117,
    diffusion: 18,
  },
  {
    title: "lightsound/nexst-tailwind",
    theme: "Next.js starter template.",
    href: "5",
    languages1: "TypeScript",
    languages2: "JavaScript",
    languages3: "Other",
    usageRatio1: 65.5,
    usageRatio2: 33.7,
    usageRatio3: 33.7,
    stars: 117,
    diffusion: 18,
  },
];

const GitHub = () => {
  return (
    <div className="mx-4 mt-10 w-96 ">
      <div className="my-4 text-3xl font-bold">GitHub</div>
      <div className="border-t-2"></div>

      <div className="">
        {ITEMS.map((items) => {
          return (
            <div key={items.href} className="mt-10 h-36">
              <div className="font-['YuGothic'] text-[18px] font-bold text-gray-700">
                <h1>{items.title}</h1>
              </div>

              <div className=" h-6 items-center text-clip font-['YuGothic'] font-light  text-gray-500 ">
                <p className="mt-2 overflow-hidden text-ellipsis">
                  {items.theme}
                </p>
              </div>

              <div className="flex h-9 items-center font-bold text-gray-400 ">
                <FaRegStar />
                <div className="m-2 mr-6 text-xs">{items.stars}</div>
                <BiGitRepoForked />
                <div className="m-2 text-xs">{items.diffusion}</div>
              </div>
              <div className="flex h-2 ">
                <div className="flex-1 rounded-l-2xl  bg-blue-600"></div>
                <div className="flex-auto bg-yellow-300"></div>
                <div className="w-4 rounded-r-2xl bg-gray-300"></div>
              </div>

              <div className="mt-4 flex h-2 w-72 justify-between">
                <div className="flex h-4 items-center text-xs font-bold">
                  <div className="flex h-2 w-2 items-center rounded-full bg-blue-600 ">
                    <p className="ml-3">{items.languages1}</p>
                    <p className="ml-2 text-gray-400">{items.usageRatio1}%</p>
                  </div>
                </div>
                <div className="flex h-4 items-center text-xs font-bold">
                  <div className="flex h-2 w-2 items-center rounded-full bg-yellow-300 ">
                    <p className="ml-3">{items.languages2}</p>
                    <p className="ml-2 text-gray-400">{items.usageRatio2}%</p>
                  </div>
                </div>
                <div className="flex h-4 items-center text-xs font-bold">
                  <div className="flex h-2 w-2 items-center rounded-full bg-gray-300 ">
                    <p className="ml-3">{items.languages3}</p>
                    <p className="ml-2 text-gray-400">{items.usageRatio3}%</p>
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

export default GitHub;

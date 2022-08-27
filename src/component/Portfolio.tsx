// import Image from "next/image";
// import React from "react";

// const ITEMS = [
//   {
//     title: "IT KINGDOM1 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM2 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM3 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM4 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM5 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM6 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <div className="mx-4 mt-10 sm:mx-56 sm:mr-32 sm:w-auto">
//       <div className="text-3xl font-bold text-gray-800">
//         <h1>Portfolio</h1>
//       </div>
//       <div className="my-4 border-t-2"></div>

//       <div className="sm:flex sm:flex-wrap">
//         {ITEMS.map((items) => {
//           return (
//             <div key={items.title} className="h-96 sm:mr-4 sm:w-72 ">
//               <div className="mt-6">
//                 <Image
//                   className="w-[390px] bg-purple-300"
//                   src={items.src}
//                   width={385}
//                   height={200}
//                   alt=""
//                 />
//               </div>
//               <div className="my-3 h-4 font-['YuGothic'] text-2xl font-bold text-gray-700">
//                 <h2>{items.title}</h2>
//               </div>
//               <div className="mt-6 text-clip font-['YuGothic'] text-gray-700">
//                 <p className="text-ellipsis">{items.description}</p>
//               </div>
//               <div className="my-2  font-['Avenir_Next'] text-xs font-bold text-gray-400">
//                 <p>{items.creationTime}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;



// import Image from "next/image";
// import React from "react";

// const ITEMS = [
//   {
//     title: "IT KINGDOM1 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM2 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM3 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM4 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM5 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
//   {
//     title: "IT KINGDOM6 ",
//     src: "/portfolio.svg",
//     description:
//       "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
//     creationTime: "2021.10 - 2021.12",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <div className="mx-4 mt-10 sm:mx-56 sm:mr-32 sm:w-auto">
//       <div className="text-3xl font-bold text-gray-800">
//         <h1>Portfolio</h1>
//       </div>
//       <div className="my-4 border-t-2"></div>

//       <div className="sm:flex sm:flex-wrap">
//         {ITEMS.map((items) => {
//           return (
//             <div key={items.title} className="h-96 sm:mr-4 sm:w-72 ">
//               <div className="mt-6">
//                 <Image
//                   className="w-[390px] bg-purple-300"
//                   src={items.src}
//                   width={385}
//                   height={200}
//                   alt=""
//                 />
//               </div>
//               <div className="my-3 h-4 font-['YuGothic'] text-2xl font-bold text-gray-700">
//                 <h2>{items.title}</h2>
//               </div>

//               <div className="mt-6 text-clip font-['YuGothic'] text-gray-700">
//                 <p className="text-ellipsis">{items.description}</p>
//               </div>

//               <div className="my-2  font-['Avenir_Next'] text-xs font-bold text-gray-400">
//                 <p>{items.creationTime}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

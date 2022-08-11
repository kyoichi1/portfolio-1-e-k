import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  FaBars,
  FaFacebook,
  FaRegStar,
  FaRss,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiGitRepoForked } from "react-icons/bi";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Shimabu IT University</title>
        <meta name="description" content="Shimabu IT University" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HOME */}
      <div className="m-auto w-96 ">

        {/*Header */}
        <div className="pt-11">
          <div className="flex h-16 w-96 place-content-around items-center text-lg font-bold">
            <div className="">
              <FaBars />
            </div>
            <div className="font-[Avenir_Next]">
              <p>Shimabu IT University</p>
            </div>
            <div className="text-2xl">
              <MdOutlineDarkMode />
            </div>
          </div>
        </div>

      {/* Main */}

        {/* Title Section */}
        <div className="flex  h-60 w-full items-center justify-center bg-pink-600 text-white">
          <div className="h-36 items-center">
            <div className="h-16">
              <div className=" font-['Avenir_Next'] text-[28px] font-bold">
                <h1>Shimabu IT University</h1>
              </div>
              <div className="font-bole font-['YuGothic']text-base">
                <h2>しまぶーのポートフォリオのためのページです</h2>
              </div>
            </div>
            <div className=" flex h-24 place-items-center">
              <div className="flex h-6 w-24 items-center  justify-between text-lg text-white ">
                <div className="">
                  <FaTwitter />
                </div>
                <div className="">
                  <FaFacebook />
                </div>
                <div className="">
                  <FaRss />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog */}
        <div className="mx-4 mt-10">
          <div className="my-4 text-3xl font-bold text-gray-800">
            <h1>Blog</h1>
          </div>
          <div className="border-t-2"></div>
          <div className="Class Preview mt-4  h-[119px]">
            <div className="font-['YuGothic'] text-[22px]  font-bold text-gray-700">
              <h2> This is a header </h2>
            </div>
            <div className="text-gray-80  h-[ 50px] font-[ 'YuGothic'] mt-2 text-clip text-gray-700">
              <p className="h-[50px] overflow-hidden text-ellipsis ">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
            <div className="my-2  font-['Avenir_Next'] text-xs font-bold text-gray-400">
              <p>22.07.11</p>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="flex items-center justify-center">
          <button className="my-5 rounded-3xl bg-gray-800  py-[10px] px-[20px] text-base text-white">
            View All
          </button>
        </div>

        {/* Portfolio */}
        <div className="m-4 w-[358px]">
          <div className=" text-3xl font-bold text-gray-800">
            <h1>Portfolio</h1>
          </div>

          <div className="my-4 border-t-2"></div>

          <div className="">
            <div className="mt-6 ">
              <Image
                src="/sample.png"
                width={385}
                height={184}
              />
            </div>
            <div className="my-3 font-['YuGothic'] text-2xl  font-bold text-gray-700">
              <h2> IT KINGDOM </h2>
            </div>
            <div className="h-[ 50px] text-clip font-['YuGothic'] text-gray-700">
              <p className="text-ellipsis">
                当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
              </p>
            </div>
            <div className="my-2  font-['Avenir_Next'] text-xs font-bold text-gray-400">
              <p>2021.10 - 2021.12</p>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="flex items-center justify-center">
          <button className="font-semi my-5 rounded-3xl bg-gray-800 py-[10px] px-[20px] text-base text-white">
            ViewAll
          </button>
        </div>

        {/* GitHub */}
        <div className="mx-4 mt-10 w-96 ">
          <div className="my-4 text-[26px] font-bold">GitHub</div>
          <div className="border-t-2"></div>
          <div className="mt-10 h-[147px]">
            <div className="font-['YuGothic'] text-[18px] font-bold text-gray-700">
              <h1> lightsound/nexst-tailwind</h1>
            </div>

            <div className=" h-[25px] items-center text-clip font-['YuGothic'] font-light  text-gray-500 ">
              <p className="mt-2 overflow-hidden text-ellipsis">
                Next.js starter template.
              </p>
            </div>

            <div className="flex h-9 items-center font-bold text-gray-400 ">
              <FaRegStar />
              <div className="m-2 mr-6 text-xs">117</div>
              <BiGitRepoForked />
              <div className="m-2 text-xs">18</div>
            </div>
            <div className="flex h-2 ">
              <div className="flex-1 rounded-l-2xl  bg-blue-600"></div>
              <div className="flex-auto bg-yellow-300"></div>
              <div className="w-4 rounded-r-2xl bg-gray-300"></div>
            </div>

            <div className="mt-4 flex h-2 w-[275px] justify-between">
              <div className="flex h-4 items-center text-xs font-bold">
                <div className="flex h-2 w-2 items-center rounded-full bg-blue-600 ">
                  <p className="ml-3">TypeScript</p>
                  <p className="ml-2 text-gray-400">65.5%</p>
                </div>
              </div>
              <div className="flex h-4 items-center text-xs font-bold">
                <div className="flex h-2 w-2 items-center rounded-full bg-yellow-300 ">
                  <p className="ml-3">JavaScript</p>
                  <p className="ml-2 text-gray-400">33.7%</p>
                </div>
              </div>
              <div className="flex h-4 items-center text-xs font-bold">
                <div className="flex h-2 w-2 items-center rounded-full bg-gray-300 ">
                  <p className="ml-3">Other</p>
                  <p className="ml-2 text-gray-400">33.7%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="flex items-center justify-center">
          <button className="font-semi my-5 rounded-3xl bg-gray-800 py-[10px] px-[20px] text-base text-white">
            View on GitHub
          </button>
        </div>

        {/* Twitter */}
        <div className="mx-4 mt-10 w-96 ">
          <div className="my-4 text-3xl font-bold">
            <h1>Twitter</h1>
          </div>
          <div className="border-t-2"></div>

          <div className="mt-10  h-80 ">
            <div className="items-center text-clip rounded font-['YuGothic']  font-light text-gray-700 ">
              <div className="flex">
                <div className="m-2">
                  <Image
                    className="items-center rounded-full"
                    src="/profile-shimabu.png"
                    width={40}
                    height={40}
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
                      📣 新サービス「Noway Form」をリリースしました！
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

        {/* button*/}
        <div className="mx-4 flex w-96 items-center justify-center">
          <button className="rounded-3xl bg-gray-800 py-[10px] px-[20px] text-base text-white">
            View on GitHub
          </button>
        </div>

        {/* Footer */}
        <div className="my-auto mx-4 mt-10 w-96 border-t-2"></div>
        <div className="mx-4 flex h-20 w-96 items-center justify-center text-xs text-gray-500">
          <p>© ️2022 Shimabu IT University</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

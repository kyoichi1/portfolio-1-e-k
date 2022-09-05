import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { type } from "os";
import BlogList from "src/component/Blog/BlogList";
import Button from "src/component/Button";
import GitHub from "src/component/GitHub";
import Portfolio from "src/component/Portfolio";
import Title from "src/component/Title";
import Twitter from "src/component/Twitter";
import { client } from "src/libs/client";
import { Blog } from "./blog";
import { PortfolioType } from "./portfolio";

/* ブログ用 */
type Props = MicroCMSListResponse<Blog>;

/* ポートフォリオ用 */
// type Props = MicroCMSListResponse<PortfolioType>;

/* 共通利用模索中（調整中） */
// type Props = MicroCMSListResponse<Blog> | MicroCMSListResponse<PortfolioType>;

const HOME: NextPage<Props> = (props) => {
  return (
    <div className="m-auto w-96 min-w-min items-center sm:w-auto">
      <Title />
      {/*TODO  totalCount={0} limit={0} offset={0} BlogListの型を設定して左記は消したい*/}
      <BlogList contents={props.contents} totalCount={0} limit={0} offset={0} />
      <Button title="View All" />
      {/*TODO  contents={[]} totalCount={0} limit={0} offset={0} Portfolioの型を設定して左記は消したい*/}
      {/* <Portfolio
        contents={props.contents}
        totalCount={0}
        limit={0}
        offset={0}
      /> */}
      <Button title="View All" />
      <div className="justify-between sm:mx-52 sm:flex ">
        <div className="w-96 ">
          <GitHub />
          <Button title="View on GitHub" />
        </div>
        <div className="sm:w-96">
          <Twitter
            user={{
              userName: "しまぶーのIT大学",
              userAccount: "shimabu",
              userImage: "/Twitter-shimabu.png",
            }}
            body={{
              text: "",
              date: "5月25日",
              link: "https://www.noway-form.com/ja",
            }}
          />
          <div className="mt-7 sm:mt-10">
            <Button title="View on Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOME;

//TOTO BlogとProtfolioのデータを共通利用できるように変更したい（現在は切り替えて表示は確認済み）

//[Blogページのデータ受け渡し用]
export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

//[Portfolioページのデータ受け渡し用]
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const data = await client.getList<PortfolioType>({ endpoint: "portfolio" });
//   return {
//     props: data,
//   };
// };

//[共通利用模索中（調整中）]
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const data = await client.getList<Blog>({ endpoint: "blog" });
//   const Portfoliodata = await client.getList<Portfolio>({
//     endpoint: "portfolio",
//   });
//   return {
//     props: {
//       blog: blog.contents,
//       portfolio: portfolio.contents,
//     },
//   };
// };

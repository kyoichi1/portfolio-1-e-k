import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import BlogList from "src/component/Blog/BlogList";
import Button from "src/component/Button";
import GitHub from "src/component/GitHub";
import Portfolio from "src/component/Portfolio";
import Title from "src/component/Title";
import Twitter from "src/component/Twitter";
import { client } from "src/libs/client";
import { Blog } from "./blog";

type Props = MicroCMSListResponse<Blog>;

const HOME: NextPage<Props> = (props) => {
  return (
    <div className="m-auto w-96 min-w-min items-center sm:w-auto">
      <Title />
      {/*TODO  totalCount={0} limit={0} offset={0} BlogListの型を設定して左記は消したい*/}
      <BlogList contents={props.contents} totalCount={0} limit={0} offset={0} />
      <Button title="View All" />
      <Portfolio />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

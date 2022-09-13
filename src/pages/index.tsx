import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { BlogList } from "src/component/Blog/BlogList";
import { Button } from "src/component/Button";
import { GitHub } from "src/component/GitHub";
import { Portfolio } from "src/component/Portfolio";
import { Title } from "src/component/Title";
import { PortfolioType } from "./portfolio";
import { Blog } from "./blog";
import { microcmsClient } from "src/libs/microcms/microcmsClient";
import { getTweetList } from "src/libs/twitter/twiiterClient";
import { Twitter } from "src/component/Twitter";

type Props = {
  blog: MicroCMSListResponse<Blog>;
  portfolio: MicroCMSListResponse<PortfolioType>;
  twitter: any;
};

const HOME: NextPage<Props> = (props) => {
  return (
    <div className="m-auto w-96 min-w-min items-center dark:bg-slate-800 sm:w-auto">
      <Title />

      {/* TODO  totalCount={0} limit={0} offset={0} BlogListの型を設定して左記は消したい */}
      <BlogList
        contents={props.blog.contents}
        totalCount={0}
        limit={0}
        offset={0}
      />
      <Button title="View All" />

      {/*TODO  contents={[]} totalCount={0} limit={0} offset={0} Portfolioの型を設定して左記は消したい*/}
      <Portfolio
        contents={props.portfolio.contents}
        totalCount={0}
        limit={0}
        offset={0}
      />
      <Button title="View All" />

      <div className="max-w-[960px] justify-between sm:mx-52 sm:flex">
        <div className="w-96">
          <GitHub />
          <Button title="View on GitHub" />
        </div>

        <div className="sm:w-96">
          <Twitter twitter={props.twitter} />
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
  const blogData = await microcmsClient.getList<Blog>({ endpoint: "blog" });
  const portfolioData = await microcmsClient.getList<PortfolioType>({
    endpoint: "portfolio",
  });
  const twitterData = await getTweetList();

  return {
    props: {
      blog: blogData,
      portfolio: portfolioData,
      twitter: twitterData,
    },
  };
};

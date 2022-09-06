import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { BlogList } from "src/component/Blog/BlogList";
import { client } from "src/libs/client";

export type Blog = {
  title: string;
  body: string;
};

type Props = MicroCMSListResponse<Blog>;

const BlogPages: NextPage<Props> = (props) => {
  return (
    <div>
      <BlogList contents={props.contents} totalCount={0} limit={0} offset={0} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default BlogPages;

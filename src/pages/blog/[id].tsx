import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { microcmsClient } from "src/libs/microcms/microcmsClient";
import { Blog } from "src/pages/blog";

type Props = Blog & MicroCMSContentId & MicroCMSDate;

const BlogId: NextPage<Props> = (props) => {
  return (
    <div className="mx-4 mt-10 box-border min-h-[73vh] min-w-min pb-10 sm:ml-56 sm:mr-32 sm:w-auto">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>{props.title}</h1>
      </div>
      <div className="border-t-2"></div>
      <div className="Class Preview mt-4 h-full">
        <div className="my-2 font-['Avenir_Next'] text-xs font-bold text-gray-400">
          <time dateTime={props.publishedAt}>
            {dayjs(props.publishedAt).format("YYYY.MM.DD")}
          </time>
        </div>
        <div className="text-gray-80  mt-2 box-border h-12  text-clip font-['YuGothic'] text-gray-700 ">
          <div dangerouslySetInnerHTML={{ __html: props.body }} />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await microcmsClient.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
  ctx
) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await microcmsClient.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.id,
  });
  console.log(data);

  return {
    props: data,
  };
};

export default BlogId;

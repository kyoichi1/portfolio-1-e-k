import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { client } from "src/libs/client";
import { PortfolioType } from "src/pages/portfolio";

type Props = PortfolioType & MicroCMSContentId & MicroCMSDate;

const PortfolioId: NextPage<Props> = (props) => {
  return (
    <div className="mx-4 mt-10 min-h-screen min-w-min sm:ml-56 sm:mr-32 sm:w-auto">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>{props.title}</h1>
      </div>
      <div className="border-t-2"></div>

      <Image
        className=" bg-purple-300"
        src={props.image.url}
        width={1000}
        height={400}
        alt=""
      />
      <div className="Class Preview mt-4 h-full">
        <div className="my-2 font-['Avenir_Next'] text-xs font-bold text-gray-400">
          {dayjs(props.productionStart).format("YYYY.MM.DD")} -{" "}
          {dayjs(props.productionEnd).format("YYYY.MM.DD")}
        </div>
        <div className="text-gray-80  mt-2 h-12 text-clip font-['YuGothic'] text-gray-700">
          <div
            className="text-ellipsis"
            dangerouslySetInnerHTML={{ __html: props.text }}
          />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const data = await client.getList({ endpoint: "portfolio" });
  const ids = data.contents.map((content) => `/portfolio/${content.id}`);
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
  const data = await client.getListDetail<PortfolioType>({
    endpoint: "portfolio",
    contentId: ctx.params.id,
  });
  console.log(data);

  return {
    props: data,
  };
};

export default PortfolioId;

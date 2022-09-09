import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { microcmsClient } from "src/libs/microcms/microcmsClient";
import { PortfolioType } from "src/pages/portfolio";

type Props = PortfolioType & MicroCMSContentId & MicroCMSDate;

const PortfolioId: NextPage<Props> = (props) => {
  return (
    <div className="box mx-4 mt-10 box-border min-h-[73vh] min-w-min pb-10 sm:ml-56 sm:mr-32 sm:w-auto ">
      <div className="my-4 text-3xl font-bold text-gray-800">
        <h1>{props.title}</h1>
      </div>
      <div className="border-t-2"></div>

      <Image
        className="bg-purple-300"
        src={props.image.url}
        width={1000}
        height={400}
        alt="portfolioの画像です"
      />

      <div className="mt-4 h-full">
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
  const data = await microcmsClient.getList({ endpoint: "portfolio" });
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
  const data = await microcmsClient.getListDetail<PortfolioType>({
    endpoint: "portfolio",
    contentId: ctx.params.id,
  });
  console.log(data);

  return {
    props: data,
  };
};

export default PortfolioId;

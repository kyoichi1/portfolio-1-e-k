import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { Portfolio } from "src/component/Portfolio";
import { microcmsClient } from "src/libs/microcms/microcmsClient";

export type PortfolioType = {
  title: string;
  text: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  link: string;
  productionStart: string;
  productionEnd: string;
};

type Props = MicroCMSListResponse<PortfolioType>;

const PortfolioPages: NextPage<Props> = (props) => {
  return (
    <>
      <Portfolio
        contents={props.contents}
        totalCount={0}
        limit={0}
        offset={0}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await microcmsClient.getList<PortfolioType>({
    endpoint: "portfolio",
  });
  return {
    props: data,
  };
};

export default PortfolioPages;

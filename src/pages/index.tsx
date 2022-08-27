import type {NextPage } from "next";
import Blog from "src/component/Blog";
import Button from "src/component/Button";
import GitHub from "src/component/GitHub";
import Portfolio from "src/component/Portfolio";
import Title from "src/component/Title";
import Twitter from "src/component/Twitter";

const HOME: NextPage = () => {

  return (
    <div className="m-auto w-96 min-w-min items-center sm:w-auto">
      <Title />
      <Blog />
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

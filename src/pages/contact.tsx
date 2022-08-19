import type { NextPage } from "next";
import Contact from "src/component/Contact";

const contact: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <Contact />
      </div>
    </div>
  );
};

export default contact;

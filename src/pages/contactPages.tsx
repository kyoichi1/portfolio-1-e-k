import type { NextPage } from "next";
import { Contact } from "src/component/Contact";

const ContactPages: NextPage = () => {
  return (
    <div className="m-auto flex min-h-[78vh]  w-96 flex-col sm:w-auto ">
      <div className="flex-grow ">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPages;

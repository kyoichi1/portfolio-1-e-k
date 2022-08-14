import type { NextPage } from "next";
import Contact from "src/component/Contact";
import Footer from "src/component/Footer";
import Header from "src/component/Header";


const contact: NextPage = () => {
  return (
    <div className="m-auto flex min-h-screen  w-96 flex-col sm:w-auto ">
      <Header />
      <div className="flex-grow ">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default contact;

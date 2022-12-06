import Image from "next/image";
import React from "react";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter";
import NavBar from "./../components/Utilities/NavBar";

const NotFound = () => {
  return (
    <>
      <NavBar />
      <div className="d-flex mt-5 justify-content-center align-items-center">
        <Image src="/media/img/not_found.svg" width={500} height={500} />
      </div>
      <Footer />
    </>
  );
};

export default NotFound;

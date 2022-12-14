import Head from "next/head";
import Image from "next/image";
import React from "react";
import NavBar from "../components/Frontend/Header/NavBar";
import Footer from "../components/Frontend/Footer/Footer";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Not Found - 404 || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Not Found - 404 || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      <div className="d-flex mt-5 justify-content-center align-items-center">
        <Image src="/media/img/not_found.svg" width={500} height={500} />
      </div>

      <Footer />
    </>
  );
};

export default NotFound;

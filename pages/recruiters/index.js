import Head from "next/head";
import React from "react";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import Footer from "../../components/Frontend/Footer/Footer";

const Recruiters = () => {
  return (
    <>
      <Head>
        <title>Recruiters || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Recruiters || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      <div className="container">Recruiters</div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Recruiters;

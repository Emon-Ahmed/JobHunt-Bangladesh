import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Newsletter";
import NavBar from "../../components/Utilities/NavBar";

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

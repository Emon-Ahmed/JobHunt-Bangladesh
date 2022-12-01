import Head from "next/head";
import React from "react";
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
      <div>Recruiters</div>
    </>
  );
};

export default Recruiters;

import Head from "next/head";
import React from "react";
import NavBar from "../../components/Utilities/NavBar";

const Candidates = () => {
  return (
    <>
      <Head>
        <title>Candidates || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Candidates || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div>Candidates</div>
    </>
  );
};

export default Candidates;

import Head from "next/head";
import React from "react";
import NavBar from "../../components/Utilities/NavBar";

const FindAJob = () => {
  return (
    <>
      <Head>
        <title>Find A Job || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Find A Job || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div>Find A Job</div>
    </>
  );
};

export default FindAJob;

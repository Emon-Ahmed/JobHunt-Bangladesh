import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";

const SingIn = () => {
  return (
    <>
      <Head>
        <title>Sing In || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Sing In || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div>Sing In</div>
    </>
  );
};

export default SingIn;

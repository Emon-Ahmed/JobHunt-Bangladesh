import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div>AboutUs</div>
    </>
  );
};

export default AboutUs;

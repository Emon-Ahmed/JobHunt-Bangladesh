import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter";

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
      
      <div className="container">AboutUs</div>
      
      <Newsletter />
      <Footer />
    </>
  );
};

export default AboutUs;

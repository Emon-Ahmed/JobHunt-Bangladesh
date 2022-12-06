import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/Newsletter";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Contact Us || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <NavBar />
      
      <div className="container">ContactUs</div>
      
      <Newsletter />
      <Footer />
    </>
  );
};

export default ContactUs;

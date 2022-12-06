import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";
import Footer from "../components/Footer/Footer";

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

      <div className="container">Sing In</div>
      
      <Footer />
    </>
  );
};

export default SingIn;

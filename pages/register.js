import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";

const Register = () => {
  return (
    <>
      <Head>
        <title>Register || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Register || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <div>Register</div>
    </>
  );
};

export default Register;

import Head from "next/head";
import React from "react";
import Link from "next/link";
import NavBar from "../components/Frontend/Header/NavBar";
import Footer from "../components/Frontend/Footer/Footer";

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

      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
            <div className="text-center">
              <div className="font-sm primary-color">Register</div>
              <h2 className="my-2 fw-bolder">Start for free Today</h2>
              <p className="font-sm text-muted mb-4">
                Access to all features. No credit card required.
              </p>
            </div>
            <form className="login-register text-start my-5">
              <div className="form-group">
                <label className="form-label fontSize14" for="input-1">
                  Full Name *
                </label>
                <input
                  className="no-outline"
                  id="input-1"
                  type="text"
                  required=""
                  name="fullname"
                  placeholder="Emon Ahmed"
                />
              </div>
              <div className="form-group">
                <label className="form-label fontSize14" for="input-email">
                  Email *
                </label>
                <input
                  className="no-outline"
                  id="input-email"
                  type="text"
                  required=""
                  name="fullemail"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form-group">
                <label className="form-label fontSize14" for="input-1">
                  Username *
                </label>
                <input
                  className="no-outline"
                  id="input-1"
                  type="text"
                  required=""
                  name="username"
                  placeholder="emonahmed"
                />
              </div>
              <div className="form-group">
                <label className="form-label fontSize14" for="input-4">
                  Password *
                </label>
                <input
                  className=" no-outline"
                  id="input-4"
                  type="password"
                  required=""
                  name="password"
                  placeholder="************"
                />
              </div>
              <div className="form-group">
                <label className="form-label fontSize14" for="input-4">
                  Re-Password *
                </label>
                <input
                  className=" no-outline"
                  id="input-4"
                  type="password"
                  required=""
                  name="password"
                  placeholder="************"
                />
              </div>

              <div className="d-flex justify-content-center align-items-center my-3 text-center">
                <div className="login-btn w-100" type="submit" name="login">
                  Submit & Register
                </div>
              </div>
              <div className="text-muted text-center">
                Already have an account?{" "}
                <Link className="text-decoration-none" href="/sign-in">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;

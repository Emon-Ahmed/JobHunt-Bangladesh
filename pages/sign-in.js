import Head from "next/head";
import React from "react";
import NavBar from "../components/Utilities/NavBar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

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

      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
            <div className="text-center">
              <div className="font-sm primary-color">Welcome back!</div>
              <h2 className="my-2 fw-bolder">Member Login</h2>
              <p className="font-sm text-muted mb-4">
                Access to all features. No credit card required.
              </p>
            </div>
            <form className="login-register text-start my-5">
              <div className="form-group">
                <label className="form-label fontSize14" for="input-1">
                  Username or Email address *
                </label>
                <input
                  className="no-outline"
                  id="input-1"
                  type="text"
                  required=""
                  name="fullname"
                  placeholder="Mahady Hasan Miraz"
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

              <div className="text-end">
                <Link
                  className="text-muted text-decoration-none pb-3"
                  href="/forget-password"
                >
                  Forgot Password
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center my-3 text-center">
                <div className="login-btn w-100" type="submit" name="login">
                  Login
                </div>
              </div>
              <div className="text-muted text-center">
                Don't have an Account?{" "}
                <Link className="text-decoration-none" href="/register">
                  Register
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

export default SingIn;

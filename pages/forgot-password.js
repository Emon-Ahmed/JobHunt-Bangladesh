import React from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/Frontend/Header/NavBar";
import Footer from "../components/Frontend/Footer/Footer";

const ForgotPassword = () => {
  return (
    <>
    <Head>
      <title>Forgot Password || Job Hunt - Bangladesh</title>
      <meta
        name="description"
        content="Forgot Password || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <NavBar />

    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
          <div className="text-center">
            <div className="font-sm primary-color">Forgot Password</div>
            <h2 className="my-2 fw-bolder">Reset Your Password</h2>
            <p className="font-sm text-muted mb-4">
            Enter email address associated with your account and we'll send you a link to reset your password
            </p>
          </div>
          <form className="login-register text-start my-5">
            <div className="form-group">
              <label className="form-label fontSize14" for="input-1">
               Email address *
              </label>
              <input
                className="no-outline"
                id="input-1"
                type="email"
                required=""
                name="email"
                placeholder="Your email address"
              />
            </div>
            <div className="d-flex justify-content-center align-items-center my-3 text-center">
              <div className="login-btn w-100" type="submit" name="login">
                Continue
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
  )
}

export default ForgotPassword
import Head from "next/head";
import React from "react";
import NavBar from "../components/Frontend/Header/NavBar";
import Newsletter from "../components/Frontend/Home/Newsletter";
import Footer from "../components/Frontend/Footer/Footer";
import Breadcrumb from "../components/Utilities/Breadcrumb";
import Members from "../components/Utilities/Members";
import { BsEnvelope } from "react-icons/bs";
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
      <Breadcrumb
        title="Contact Us"
        description="Get the latest news, updates and tips"
      />

      <div className="container py-5">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-8">
            <h5 className="primary-color">Contact Us</h5>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="text-black-50">
              The right move at the right time saves your investment. live
              <br />
              the dream of expanding your business.
            </p>

            <form className="m-0 p-0">
              <div className="form-group d-flex">
                <input
                  className="no-outline contact-form"
                  id="input-1"
                  type="text"
                  required=""
                  name="fullname"
                  placeholder="Enter your name"
                />
                <input
                  className="no-outline contact-form"
                  id="input-1"
                  type="text"
                  required=""
                  name="company"
                  placeholder="Company (optional)"
                />
              </div>
              <div className="form-group d-flex">
                <input
                  className="no-outline contact-form"
                  id="input-1"
                  type="text"
                  required=""
                  name="fullname"
                  placeholder="Your email"
                />
                <input
                  className="no-outline contact-form"
                  id="input-1"
                  type="text"
                  required=""
                  name="company"
                  placeholder="Phone number"
                />
              </div>
              <div className="form-group d-flex">
                <textarea
                  rows="5"
                  className="no-outline w-100 my-2 me-3 p-3 border border-1 rounded-1"
                  id="input-1"
                  type="text"
                  required=""
                  name="company"
                  placeholder="Tell us about yourself"
                />
              </div>

              <div className="d-flex justify-content-start align-items-center my-3 text-center">
                <div className="login-btn w-25" type="submit" name="login">
                  <BsEnvelope className="fs-5 me-2" /> Send message
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <img src="/media/img/img.png" alt="Contact Us Image" />
          </div>
        </div>
      </div>
      <Members />
      <Newsletter />
      <Footer />
    </>
  );
};

export default ContactUs;

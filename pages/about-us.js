import Head from "next/head";
import React from "react";
import NavBar from "../components/Frontend/Header/NavBar";
import Newsletter from "../components/Frontend/Home/Newsletter";
import Footer from "../components/Frontend/Footer/Footer";
import Breadcrumb from "../components/Utilities/Breadcrumb";
import Link from "next/link";
import Members from "../components/Utilities/Members";

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
    <Breadcrumb
      title="About Us"
      description="Get the latest news, updates and tips"
    />

    <div className="container">
      <div className="about-us mx-auto text-center py-5">
        <h5 className="text-black-50 fontSize17 fw-bolder">OUR COMPANY</h5>
        <h1 className="text-black fw-bold">About Our Company</h1>
        <p className="text-black-50 fontSize15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante
          viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a
          blandit tempor, velit magna pellentesque risus, at congue tellus dui
          quis nisl.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <img
            className="w-100"
            src="/media/img/img-about2.png"
            alt="ABOUT IMAGE"
          />
        </div>
        <div className="col-lg-6 text-lg-start text-center">
          <h2 className="fw-bolder">What we can do?</h2>
          <p>
            Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat
            ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam
            nec tellus a odio tincidunt auctora ornare odio.
          </p>
          <p>
            Aenean sollicituin, lorem quis bibendum auctor nisi elit consequat
            ipsum sagittis sem nibh id elit. Duis sed odio sit amet nibh
            vulputate cursus a sit amet maurisorbi accumsan ipsum velit. Nam
            nec tellus a odio tincidunt auctora ornare odio.
          </p>
          <p>
            Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Duis non nisi purus. Integer sit
            nostra, per inceptos himenaeos.
          </p>
          <button className="btn bg-primary-color secondary-button text-white px-5 py-3">
            <Link className="nav-link text-white " href="/contact-us">
              Contact Us
            </Link>
          </button>
        </div>
      </div>
    </div>
    <Members />
    <Newsletter />
    <Footer />
  </>
  );
};

export default AboutUs;

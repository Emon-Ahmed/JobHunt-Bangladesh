import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import Footer from "../../components/Frontend/Footer/Footer";
const CandidateDetails = () => {
  return (
    <>
      <Head>
        <title>Recruiters Details || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Recruiters Details || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />
      <div className="container">
        <img
          className="w-100 rounded-4"
          src="https://jobbox-nextjs.vercel.app/assets/imgs/page/candidates/img.png"
          alt="Candidate Cover"
        />
        <div className="px-5">
          <img
            className="company_logo rounded-3"
            src="https://jobbox-nextjs.vercel.app/assets/imgs/page/candidates/candidate-profile.png"
            alt="Candidate Profile"
          />
          <div className="d-flex justify-content-between align-items-start mt-2 mb-4 pb-1">
            <div className="pt-2 pb-1">
              <div className="">
                <div className="d-flex align-items-center">
                  <h3 className="fw-bolder">Emon Ahmed</h3>
                  <div className="d-flex align-items-center px-2">
                    <img
                      className="img18"
                      src="/media/img/location.svg"
                      alt="Jobs Location"
                    />
                    <div className="ms-1">
                      <div className="fontSize17 secondary-text fw-semibold">
                        Dhaka, Bangladesh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="fontSize16">
                UI/UX Designer. Front end Developer
              </span>
            </div>

            <button className="btn bg-primary-color text-white px-4 py-3">
              <Link className="nav-link text-white" href="/sign-in">
                <span className="pe-2 fontSize17">
                  <BsTelephone />
                </span>
                Contact Us
              </Link>
            </button>
          </div>
        </div>
        <hr />
        <div className="py-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="job_details">
                <div className="secondary-text">
                  <h3 className="fw-bolder">Welcome To My Profile</h3>
                  <p>
                    The AliStudio Design team has a vision to establish a
                    trusted platform that enables productive and healthy
                    enterprises in a world of digital and remote everything,
                    constantly changing work patterns and norms, and the need
                    for organizational resiliency.
                  </p>
                  <p>
                    The ideal candidate will have strong creative skills and a
                    portfolio of work which demonstrates their passion for
                    illustrative design and typography. This candidate will have
                    experiences in working with numerous different design
                    platforms such as digital and print forms.
                  </p>
                  <h3 className="fw-bolder">
                    Essential Knowledge, Skills, and Experience
                  </h3>
                  <ul>
                    <li className="py-1">
                      A portfolio demonstrating well thought through and
                      polished end to end customer journeys
                    </li>
                    <li className="py-1">
                      5+ years of industry experience in interactive design and
                      / or visual design
                    </li>
                    <li className="py-1">Excellent interpersonal skills</li>
                  </ul>
                  <h3 className="fw-bolder">Product Designer</h3>
                  <p>
                    Product knowledge: Deeply understand the technology and
                    features of the product area to which you are assigned.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="company_info border border-1 p-4 rounded-2">
                <div className="d-flex pt-2 pb-1">
                  <div className="px-2">
                    <h5 className="fw-bolder">Info</h5>
                  </div>
                </div>
                <hr />
                <div>
                  <ul className="secondary-text">
                    <li className="py-1">Dhaka, Bangladesh</li>
                    <li className="py-1">Phone: +880 1401017473</li>
                    <li className="py-1">Email: emonahmed.cse@gmail.com</li>
                  </ul>
                </div>
                <div className="d-flex pt-2 pb-1">
                  <div className="px-2">
                    <h5 className="fw-bolder">Skills</h5>
                  </div>
                </div>
                <hr />
                <div>
                  <ul className="secondary-text">
                    <li className="py-1">HTML, CSS, JS</li>
                    <li className="py-1">ReactJS, NextJS</li>
                    <li className="py-1">MongoDB, NodeJS, ExpressJS</li>
                  </ul>
                </div>

                <div className="d-flex pt-2 pb-1">
                  <div className="px-2">
                    <h5 className="fw-bolder">Experience</h5>
                  </div>
                </div>
                <hr />
                <div>
                  <ul className="secondary-text">
                    <li className="py-1">Dhaka, Bangladesh</li>
                    <li className="py-1">Phone: +880 1401017473</li>
                    <li className="py-1">Email: emonahmed.cse@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default CandidateDetails;

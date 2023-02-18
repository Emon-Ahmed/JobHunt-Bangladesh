import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";

import JobsDB from "../../db/jobs.json";

import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import Footer from "../../components/Frontend/Footer/Footer";
const CompanyDetails = () => {
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
          src="https://jobbox-nextjs.vercel.app/assets/imgs/page/company/img.png"
        />
        <div className="px-5">
          <img
            className="company_logo"
            src="https://jobbox-nextjs.vercel.app/assets/imgs/page/job-single/avatar.png"
            alt=""
          />
          <div className="d-flex justify-content-between align-items-start mt-2 mb-4 pb-1">
            <div className="pt-2 pb-1">
              <div className="">
                <div className="d-flex align-items-center">
                  <h3 className="fw-bolder">AliThemes</h3>
                  <div className="d-flex align-items-center px-2">
                    <img
                      className="img18"
                      src="/media/img/location.svg"
                      alt="Jobs Location"
                    />
                    <div className="ms-1">
                      <div className="fontSize17 secondary-text fw-semibold">
                        Dhaka
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="fontSize16">
                Our Mission to make working life simple
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
                  <h3 className="fw-bolder">Welcome to AliStudio Team</h3>
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
                <div className="py-2">
                  <hr />
                </div>
                <div>
                  <h4 className="fw-bolder text-black">Latest Jobs</h4>
                  <div className="py-3">
                    <div className="row">
                      {JobsDB.slice(0, 2).map((jobList) => (
                        <div
                          key={jobList.id}
                          className="col-lg-6 g-2"
                        >
                          <div className="p-4 m-2 recruiters-box rounded-4 hover-white  border border-1 borderSecondary">
                            <div className="d-flex pt-2 pb-4 align-items-center">
                              <img
                                className="img48 rounded-2"
                                src="/media/img/JobHunt-Company.png"
                                alt="Company"
                              />
                              <div className="ms-2">
                                <h6 className="fw-bolder cursorPointer">
                                  {jobList.company_name}
                                </h6>
                                <div className="d-flex align-items-center">
                                  <img
                                    src="/media/img/location.svg"
                                    alt="Jobs Location"
                                  />
                                  <span className="fontSize11 ps-1">
                                    {jobList.company_address}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <h6 className="fw-bolder cursorPointer">
                              {jobList.name}
                            </h6>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex align-items-center">
                                <img
                                  src="/media/img/briefcase.svg"
                                  alt="Jobs Type"
                                />
                                <span className="fontSize12 secondary-text ps-1">
                                  Remote
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <img
                                  src="/media/img/time.svg"
                                  alt="Jobs Deadline"
                                />
                                <span className="fontSize12 secondary-text ps-1">
                                  3 mins ago
                                </span>
                              </div>
                            </div>
                            <p className="fontSize14 text-dark py-1">
                              {jobList.description}
                            </p>
                            <div className="my-2">
                              {jobList.employment_info[7].skills.map((s) => (
                                <span className="me-2 mb-2 btn btn-secondary-color rounded fontSize12">
                                  {s?.skill}
                                </span>
                              ))}
                            </div>
                            <hr />
                            <div className="row g-0 align-items-center">
                              <div className="col-md-7 col-lg-7 col-7">
                                <span className="fw-bold fs-4 primary-color">
                                  $800
                                </span>
                                <span className="fontSize15 text-black-50">
                                  /month
                                </span>
                              </div>
                              <div className="col-md-5 col-lg-5 col-5 text-end ">
                                <span className="rounded-1 px-2 py-2 fontSize13 primary-color recruiters-btn cursorPointer">
                                  Apply Now
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="company_info border border-1 p-4 rounded-2">
                <div className="d-flex pt-2 pb-1">
                  <div className="px-2">
                    <h5 className="fw-bolder">AliThemes</h5>
                    <div className="d-flex align-items-center pb-2">
                      <img
                        className="img18"
                        src="/media/img/location.svg"
                        alt="Jobs Location"
                      />
                      <div className="ms-1">
                        <div className="fontSize12 secondary-text fw-semibold">
                          Dhaka, Bangladesh
                        </div>
                      </div>
                    </div>
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

export default CompanyDetails;

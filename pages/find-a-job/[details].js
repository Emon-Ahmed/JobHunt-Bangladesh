import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Frontend/Footer/Footer";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import {
  BsBuilding,
  BsCurrencyDollar,
  BsCup,
  BsClock,
  BsFillPersonFill,
  BsFillBrightnessLowFill,
  BsStopwatch,
  BsFillPinMapFill,
} from "react-icons/bs";

import { GoVerified } from "react-icons/go";

const JobDetails = () => {
  return (
    <>
      <Head>
        <title> Job Details || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Find A Job || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />
      <div className="container">
        <img
          className="w-100 rounded-4"
          src="https://jobbox-nextjs.vercel.app/assets/imgs/page/job-single/thumb.png"
        />
        <div className="row justify-content-between align-items-start my-4 py-3">
          <div className="col-lg-9">
            <h2 className="fw-bolder">
              Senior Full Stack Engineer, Creator Success
            </h2>
            <div className="d-flex justify-content-start">
              <div className="d-flex align-items-center">
                <img src="/media/img/briefcase.svg" alt="Jobs Type" />
                <span className="fontSize13 secondary-text ps-1">
                  Full Time
                </span>
              </div>
              <div className="d-flex align-items-center mx-2">
                <img src="/media/img/time.svg" alt="Jobs Deadline" />
                <span className="fontSize13 secondary-text ps-1">
                  3 mins ago
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-md-right text-center py-3 py-lg-0">
            <button className="btn bg-primary-color text-white w-100 px-4 py-3">
              <Link className="nav-link text-white" href="/sign-in">
                <span className="pe-2">
                  <GoVerified />{" "}
                </span>{" "}
                Apply now
              </Link>
            </button>
          </div>
        </div>
        <hr />
        <div className="py-4">
          <div className="row">
            <div className="col-lg-8 my-1">
              <div className="employment_info border border-1 p-4 rounded-2">
                <h5 className="fw-bolder">Employment Information</h5>
                <hr />
                <div className="row">
                  <div className="col-lg-6">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsBuilding />
                            </span>
                            Industry
                          </th>
                          <td>Mechanical </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsCurrencyDollar />
                            </span>
                            Salary
                          </th>

                          <td>$800 - $1000</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsCup />
                            </span>
                            Job type
                          </th>

                          <td>Permanent</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsClock />
                            </span>
                            Updated
                          </th>

                          <td>10/07/2022</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-6">
                    <table className="table table-borderless">
                      <tbody>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsFillPersonFill />
                            </span>
                            Job level
                          </th>
                          <td>Experienced </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsFillBrightnessLowFill />
                            </span>
                            Experience
                          </th>

                          <td>1 - 2 years</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsStopwatch />
                            </span>
                            Deadline
                          </th>

                          <td>10/08/2022</td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="text-black-50 d-flex align-items-center"
                          >
                            <span className="mb-1 me-1 fontSize15">
                              <BsFillPinMapFill />
                            </span>
                            Location
                          </th>

                          <td>Dhaka, Bangladesh</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-1">
              <div className="company_info border border-1 p-4 rounded-2">
                <div className="d-flex pt-2 pb-1">
                  <img
                    src="https://jobbox-nextjs.vercel.app/assets/imgs/page/job-single/avatar.png"
                    alt=""
                  />
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
                          Dhaka
                        </div>
                      </div>
                    </div>
                    <span className="fontSize13">
                      <u>25</u> jobs open
                    </span>
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
          <div className="job_details py-4 secondary-text">
            <h3 className="fw-bolder">Welcome to AliStudio Team</h3>
            <p>
              The AliStudio Design team has a vision to establish a trusted
              platform that enables productive and healthy enterprises in a
              world of digital and remote everything, constantly changing work
              patterns and norms, and the need for organizational resiliency.
            </p>
            <p>
              The ideal candidate will have strong creative skills and a
              portfolio of work which demonstrates their passion for
              illustrative design and typography. This candidate will have
              experiences in working with numerous different design platforms
              such as digital and print forms.
            </p>
            <h3 className="fw-bolder">
              Essential Knowledge, Skills, and Experience
            </h3>
            <ul>
              <li className="py-1">
                A portfolio demonstrating well thought through and polished end
                to end customer journeys
              </li>
              <li className="py-1">
                5+ years of industry experience in interactive design and / or
                visual design
              </li>
              <li className="py-1">Excellent interpersonal skills</li>
            </ul>
            <h3 className="fw-bolder">Product Designer</h3>
            <p>
              Product knowledge: Deeply understand the technology and features
              of the product area to which you are assigned.
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default JobDetails;

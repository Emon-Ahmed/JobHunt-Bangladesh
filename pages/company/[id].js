// pages/company/[id].js
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";

import JobsDB from "../../db/jobs.json";

import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import Footer from "../../components/Frontend/Footer/Footer";

const CompanyDetails = ({ post, error }) => {
  if (error) {
    return (
      <div className="container py-5 text-center">
        <h3>Error loading company details</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Extract skills from HTML safely
  const skills = [];
  if (typeof window !== "undefined") {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = post.description || "";
    const liElements = tempDiv.querySelectorAll("li");
    liElements.forEach((li) => skills.push(li.textContent));
  }

  return (
    <>
      <Head>
        <title>
          {post.company || "Company"} Details || Job Hunt - Bangladesh
        </title>
        <meta
          name="description"
          content={`${
            post.company || "Company"
          } Details || Job Hunt - Bangladesh`}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />
      <div className="container">
        <img
          className="w-100 rounded-4"
          src={
            post.company_cover ||
            "https://jobbox-nextjs.vercel.app/assets/imgs/page/company/img.png"
          }
          alt="Company banner"
        />
        <div className="px-5">
          <img
            className="company_logo shadow-lg rounded-5"
            src={post.company_icon}
            alt="Company logo"
          />
          <div className="d-flex justify-content-between align-items-start mt-2 mb-4 pb-1">
            <div className="pt-2 pb-1">
              <div className="">
                <div className="d-flex align-items-center">
                  <h3 className="fw-bolder">
                    {post.company_name || "Company Name"}
                  </h3>
                  <div className="d-flex align-items-center px-2">
                    <img
                      className="img18"
                      src="/media/img/location.svg"
                      alt="Jobs Location"
                    />
                    <div className="ms-1">
                      <div className="fontSize17 secondary-text fw-semibold">
                        {post.company_location || "Location"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="fontSize16">
                {post.company_tagline || "Job Title"}
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
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        post.company_description || "No description provided",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="company_info border border-1 p-4 rounded-2">
                <div className="d-flex pt-2 pb-1">
                  <div className="px-2">
                    <h5 className="fw-bolder">
                      {post.company_name || "Company Name"}
                    </h5>
                    <div className="d-flex align-items-center pb-2">
                      <img
                        className="img18"
                        src="/media/img/location.svg"
                        alt="Jobs Location"
                      />
                      <div className="ms-1">
                        <div className="fontSize12 secondary-text fw-semibold">
                          {post.company_location || "Location"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <ul className="secondary-text">
                    <li className="py-1">
                      {post.company_location || "Not specified"}
                    </li>
                    <li className="py-1">
                      Phone: {post.company_phone || "Not specified"}
                    </li>
                    <li className="py-1">
                      Email: {post.company_email || "Not specified"}
                    </li>
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

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const res = await fetch(`http://localhost:3000/api/company/${id}`); // Use full URL if needed
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const post = await res.json();

    return { props: { post } };
  } catch (error) {
    return { props: { error: error.message, post: {} } };
  }
}

export default CompanyDetails;

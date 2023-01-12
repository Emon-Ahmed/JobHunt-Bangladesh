import Head from "next/head";
import React from "react";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import Footer from "../../components/Frontend/Footer/Footer";
import RecruitersDB from "./../../db/Recruiters.json";
import { Rating } from "react-simple-star-rating";
import PageBreadcrumb from "../../components/Utilities/PageBreadcrumb";

const Recruiters = () => {
  return (
    <>
      <Head>
        <title>Recruiters || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Recruiters || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      <div className="container">
        <PageBreadcrumb
          title="Top Recruiters"
          description="Discover your next career move, freelance gig, or internship"
        />
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <span className="fontSize14">
            Showing <b>4-6</b> of <b>{RecruitersDB?.length}</b> jobs
          </span>
          <div className="px-2 border border-1 rounded rounded-1 d-flex justify-content-between align-items-center w-auto">
            <span className="px-1 fontSize14">Sort: </span>
            <select className="fontSize14 form-style">
              <option value="0">Latest</option>
              <option value="1">Oldest</option>
              <option value="2">Lowest Cost</option>
              <option value="3">Highest Cost</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="py-3">
          <div className="row">
            {RecruitersDB.map((recruiter) => (
              <div
                key={recruiter.id}
                className="col-xl-3 col-md-6 col-lg-4 g-2"
              >
                <div className="px-3 py-4 m-2 rounded-4 border border-1 borderSecondary hover-white recruiters-box">
                  <div className="d-flex align-items-center flex-column justify-content-center">
                    <img
                      className="img48 rounded"
                      src={recruiter.img}
                      alt="Company"
                    />
                    <div className="d-flex flex-column align-items-center">
                      <h4 className="pt-2 fw-bolder cursorPointer">
                        {recruiter.name}
                      </h4>
                      <div className="d-flex align-items-center">
                        <span className="fontSize12">
                          <Rating
                            readonly="false"
                            size="17"
                            initialValue={recruiter?.rate}
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column justify-content-between align-items-center">
                    <div className="d-flex align-items-center py-2">
                      <img src="/media/img/location.svg" alt="Jobs Type" />
                      <span className="fontSize13 secondary-text ps-1 fw-bold">
                        {recruiter.location}
                      </span>
                    </div>
                    <div className="d-flex my-4 px-5 py-3 recruiters-btn rounded-1 align-items-center justify-content-center cursorPointer">
                      <span className="fontSize13 primary-color">
                        {recruiter.jobs} Open Jobs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <nav className="py-5" aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Recruiters;

import Head from "next/head";
import React from "react";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import Footer from "../../components/Frontend/Footer/Footer";
import CandidateDB from "./../../db/candidates.json";
import PageBreadcrumb from "../../components/Utilities/PageBreadcrumb";
import Link from "next/link";

const Candidate = () => {
  return (
    <>
    <Head>
      <title>Candidates || Job Hunt - Bangladesh</title>
      <meta
        name="description"
        content="Candidates || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
      />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <NavBar />

    <div className="container">
      <PageBreadcrumb
        title="Browse Candidates"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, atque delectus molestias quis?"
      />

      <div className="mt-4 d-flex justify-content-between align-items-center">
        <span className="fontSize14">
          Showing <b>4-6</b> of <b>{CandidateDB?.length}</b> jobs
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
      <div>
        <div className="row">
          {CandidateDB.map((candidate) => (
            <div
              key={candidate.id}
              className="col-xl-3 col-md-6 col-lg-4 g-2"
            >
              <div className="px-2 py-4 m-2 rounded-4 border border-1 borderSecondary">
                <div className="row g-3 mb-3 align-items-center justify-content-center">
                  <div className="col-md-6 col-lg-6 p-5 p-lg-0 d-flex align-items-center justify-content-center">
                    <img
                      className="w-100 p-1 rounded-circle"
                      src={candidate?.img}
                      alt="Candidate"
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 text-center text-md-start">
                  <Link
                        className="text-black text-decoration-none"
                        href={`/candidates/${candidate.name}`}
                      >
                    <h4 className="fw-bolder noSpace cursorPointer">
                      {candidate.name}
                    </h4>
                    </Link>
                    <span className="fontSize14 secondary-text">
                      {candidate.designation}
                    </span>
                  </div>
                </div>
                <div className="fontSize12 text-center text-md-start">
                  <p>{candidate.description}</p>
                </div>
                <div className="my-2 text-center text-md-start">
                  {candidate?.skills.map((s) => (
                    <span className="me-2 mb-2 btn btn-secondary-color rounded fontSize12">
                      {s?.skill}
                    </span>
                  ))}
                </div>
                <hr />
                <div className="row g-0 align-items-center">
                  <div className="col-md-7 col-lg-7 col-7">
                    <div className="d-flex align-items-center">
                      <img
                        className="img18"
                        src="/media/img/location.svg"
                        alt="Jobs Location"
                      />
                      <div className="ms-1">
                        <div className="fontSize15 secondary-text fw-semibold">
                          {candidate.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-5 col-5 text-end">
                    <div className="d-flex align-items-center justify-content-end">
                      <img
                        className="img18"
                        src="/media/img/time.svg"
                        alt="Jobs Type"
                      />
                      <span className="ms-1 fontSize15 secondary-text fw-semibold">
                        ${candidate.hourly}/Hour
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    </div>

    <Newsletter />
    <Footer />
  </>
  );
};

export default Candidate;

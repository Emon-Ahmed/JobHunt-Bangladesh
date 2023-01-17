import Link from "next/link";
import React from "react";
import Candidates from "./../../../db/candidates.json";
const CandidatesList = () => {
  return (
    <>
      <div className="my-5 container">
        <div className="text-center pt-4">
          <h1 className="fw-bolder">Top Candidates</h1>
          <p className="secondary-text fs-5">
            Jobs is a curated job board of the best jobs for developers,
            designers and marketers in the tech industry.
          </p>
        </div>

        <div className="py-3">
          <div className="row">
            {Candidates.slice(0, 11).map((candidate) => (
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
                      <h4 className="fw-bolder noSpace">{candidate.name}</h4>
                      </Link>
                      <span className="fontSize14 secondary-text">
                        {candidate.designation}
                      </span>
                    </div>
                  </div>
                  <div className="fontSize12 text-center text-md-start">
                    <p>
                      {candidate.description}
                    </p>
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
        </div>
      </div>
    </>
  );
};

export default CandidatesList;

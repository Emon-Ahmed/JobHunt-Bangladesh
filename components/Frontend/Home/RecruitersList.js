import React from "react";
import Recruiters from "./../../../db/Recruiters.json";
import { Rating } from "react-simple-star-rating";
import PageBreadcrumb from "../../Utilities/PageBreadcrumb";
import Link from "next/link";

const RecruitersList = () => {
  return (
    <div className="my-5 container">
      <div className="text-center pt-4">
        <h1 className="fw-bolder">Top Recruiters</h1>
        <p className="secondary-text fs-5">
          Discover your next career move, freelance gig, or internship
        </p>
      </div>
      <div className="py-3">
        <div className="row">
          {Recruiters.map((recruiter) => (
            <div key={recruiter.id} className="col-xl-3 col-md-6 col-lg-4 g-2">
              <div className="px-3 py-4 m-2 rounded-4 border border-1 borderSecondary">
                {/* <h5>{recruiter.name}</h5> */}
                <div className="col-md-7 col-lg-7 col-7">
                  <div className="d-flex pb-1">
                    <img
                      className="img48 rounded"
                      src={recruiter.img}
                      alt="Company"
                    />
                    <div className="ms-2">
                      <Link
                        className="text-black text-decoration-none"
                        href={`/recruiters/${recruiter.name}`}
                      >
                        <div className="fontSize17 fw-bolder">
                          {recruiter.name}
                        </div>
                      </Link>
                      <div className="d-flex align-items-center">
                        <span className="fontSize12">
                          <Rating
                            readonly="false"
                            size="14"
                            initialValue={recruiter?.rate}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex pt-2 justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src="/media/img/location.svg" alt="Jobs Type" />
                    <span className="fontSize13 secondary-text ps-1">
                      {recruiter.location}
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="fontSize13 secondary-text ps-1">
                      {recruiter.jobs} Open Jobs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitersList;

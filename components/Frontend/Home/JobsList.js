import Link from "next/link";
import React from "react";
import JobsDB from "./../../../db/jobs.json";

const JobsList = () => {
  const limitJobsList = JobsDB.slice(0, 5);
  return (
    <div className="my-5 container">
      <div className="text-center pt-4">
        <h1 className="fw-bolder">Jobs of the day</h1>
        <p className="secondary-text fs-5">
          Search and connect with the right candidates faster
        </p>
      </div>
      <div className="text-center">
        <div className="jobsTab jobsTabActive m-2 px-2 py-1 d-inline-flex align-items-center">
          <img
            className="img28 m-1"
            src="/media/img/skillSet/human.svg"
            alt="Skill Icon"
          />
          <span className="fontSize13 fw-bold">All</span>
        </div>
        {limitJobsList.map((job,index) => (
          <div
            key={index++}
            className="jobsTab border border-1 borderSecondary m-2 px-2 py-1 d-inline-flex align-items-center"
          >
            <img
              className="img28 m-1"
              src={job.company_icon}
              alt="Skill Icon"
            />
            <span className="fontSize13 fw-bold">
              {job?.employment_info[0].industry}
            </span>
          </div>
        ))}
      </div>
      <div className="py-3">
        <div className="row">
          {JobsDB.map((jobList) => (
            <div key={jobList.id} className="col-xl-3 col-md-6 col-lg-4 g-2">
              <div className="px-2 py-4 m-2 rounded-4 border border-1 borderSecondary">
                <Link className="text-black text-decoration-none" href={`/find-a-job/${jobList.name}`}>
                  <h5>{jobList.name}</h5>
                </Link>
                <div className="d-flex py-2 justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src="/media/img/briefcase.svg" alt="Jobs Type" />
                    <span className="fontSize12 secondary-text ps-1">
                      Remote
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src="/media/img/time.svg" alt="Jobs Deadline" />
                    <span className="fontSize12 secondary-text ps-1">
                      3 mins ago
                    </span>
                  </div>
                </div>
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
                    <div className="d-flex align-items-center">
                      <img
                        className="img34 rounded-circle"
                        src="/media/img/JobHunt-Company.png"
                        alt="Company"
                      />
                      <div className="ms-2">
                        <div className="fontSize15 fw-bold">Linkedin</div>
                        <div className="d-flex align-items-center">
                          <img
                            src="/media/img/location.svg"
                            alt="Jobs Location"
                          />
                          <span className="fontSize11 ps-1">Dhaka</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-5 col-5 text-end">
                    <span className="fw-bold primary-color">$800</span>/
                    <span className="fontSize15">month</span>
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

export default JobsList;

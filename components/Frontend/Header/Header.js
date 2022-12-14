import React from "react";
import FindForm from "./FindForm";
import JobBox from "./JobBox";

const Header = () => {
  return (
    <>
      <div className="p-5 bg-primary-color text-center">
        <div className="hero-section">
          <h1 className="display-5 mt-3 mb-2 text-white fw-bolder py-4">
            The #1 <span className="secondary-color">Job Board in for</span>{" "}
            Hiring or Find Your Next Job
          </h1>
          <p className="text-white fs-5">
            Each month, more than 3 million job seekers turn to website in their
            search for <br /> work, making over 140,000 applications every
            single day
          </p>
          <FindForm />
          <p className="text-white fs-6 my-3">
            <span className="fw-bold">Popular Searches: </span>
            <span className="text-decoration-underline">
              Graphic Designer,
            </span>{" "}
            <span className="text-decoration-underline">Web Designer,</span>{" "}
            <span className="text-decoration-underline">Web Developer,</span>{" "}
            <span className="text-decoration-underline">
              Software Engineer,
            </span>{" "}
          </p>
        </div>
        <div className="jobs-list">
          <JobBox />
        </div>
      </div>
    </>
  );
};

export default Header;

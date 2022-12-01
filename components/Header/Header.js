import React from "react";

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
          <div className="form-find">
            <form className="d-flex flex-md-row flex-column align-items-center justify-content-evenly">
              <div className="form-industry">
                <select className="form-input w-100 form-style input-industry pl-35">
                  <option value="0">Industry</option>
                  <option value="1">Software</option>
                </select>
              </div>
              <div className="form-industry">
                <select className="form-input form-style input-location pl-35">
                  <option value="true">Location</option>
                  <option value="DHA">Dhaka</option>
                </select>
              </div>
              <div className="form-industry">
                <input
                  className="form-input form-style pl-35 input-search"
                  type="text"
                  placeholder="Your Keyword..."
                />
              </div>
              <div className="">
                <button className="btn-find btn bg-primary-color text-white py-2 px-5">
                  <a className="nav-link text-white" href="/">
                    Search
                  </a>
                </button>
              </div>
              <div></div>
            </form>
          </div>
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
      </div>
    </>
  );
};

export default Header;

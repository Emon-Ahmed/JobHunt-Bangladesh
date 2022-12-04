import React from "react";

const FindForm = () => {
  return (
    <>
      <div className="form-find my-2">
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
    </>
  );
};

export default FindForm;

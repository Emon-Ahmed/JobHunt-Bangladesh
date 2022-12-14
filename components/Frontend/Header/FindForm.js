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
              <option value="2">Developer</option>
              <option value="3">Design</option>
              <option value="4">Graphics</option>
            </select>
          </div>
          <div className="form-industry">
            <select className="form-input form-style input-location pl-35">
              <option value="true">Location</option>
              <option value="DHA">Dhaka</option>
              <option value="KHU">Khulna</option>
              <option value="MYM">Mymensingh</option>
              <option value="RAJ">Rajshahi</option>
              <option value="RAN">Rangpur</option>
              <option value="SYL">Sylhet</option>
              <option value="BAR">Barisal</option>
              <option value="CHIT">Chittagong</option>
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

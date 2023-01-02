import React from "react";

const TrustedCompanyList = () => {
  return (
    <div className="my-5 container">
      <div className="m-2 p-4 rounded-1 border border-1 borderSecondary row justify-content-between align-items-center g-0">
        <div className="col-md-2 py-3 px-md-2">
          <h3 className="fw-bolder text-secondary">Trusted by</h3>
        </div>
        <div className="col-md-10 px-md-3 py-3">
          <img
            className="px-3 py-1"
            src="/media/img/company/acer.svg"
            alt="Company"
          />
          <img
            className="px-3 py-1"
            src="/media/img/company/casio.svg"
            alt="Company"
          />
          <img
            className="px-3 py-1"
            src="/media/img/company/dell.svg"
            alt="Company"
          />
          <img
            className="px-3 py-1"
            src="/media/img/company/microsoft.svg"
            alt="Company"
          />
          <img
            className="px-3 py-1"
            src="/media/img/company/nokia.svg"
            alt="Company"
          />
          <img
            className="px-3 py-1"
            src="/media/img/company/sony.svg"
            alt="Company"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanyList;

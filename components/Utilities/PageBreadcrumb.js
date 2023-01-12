import React from "react";

const PageBreadcrumb = ({ title, description }) => {
  return (
    <div className="text-center pt-4">
      <div className="candidates-bg text-center rounded rounded-3 p-5">
        <h3 className="fw-bolder">{title}</h3>
        <p className="text-black-50 fontSize14">{description}</p>
      </div>
    </div>
  );
};

export default PageBreadcrumb;

import React from "react";

const Breadcrumb = ({ title, description }) => {
  return (
    <div className="breadcrumb text-white p-4">
      <div className="container p-4">
        <h1 className="fw-bolder">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;

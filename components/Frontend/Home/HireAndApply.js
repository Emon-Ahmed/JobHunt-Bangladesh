import Image from "next/image";
import React from "react";

const HireAndApply = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="hire m-2 p-4 rounded-4 border border-1 borderSecondary hire-box">
            <div className="row">
              <div className="col-md-4">
                <Image
                  src="/media/img/job-tools.png"
                  width="151"
                  height="129"
                />
              </div>
              <div className="col-md-8">
                <h3 className="fw-bold">Job Tools Services</h3>
                <p className="fontSize14 secondary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam laoreet rutrum quam, id faucibus erat interdum a.
                  Curabitur eget tortor a nulla interdum semper.
                </p>
                <p className="cursorPointer primary-color fontSize14 fw-bold">
                  Find Out More &rarr;{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hire m-2 p-4 rounded-4 border border-1 borderSecondary apply-box">
            <div className="row">
              <div className="col-md-4">
                <Image
                  src="/media/img/planning-job.png"
                  width="151"
                  height="129"
                />
              </div>
              <div className="col-md-8">
                <h3 className="fw-bold">Planning a Job?</h3>
                <p className="fontSize14 secondary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam laoreet rutrum quam, id faucibus erat interdum a.
                  Curabitur eget tortor a nulla interdum semper.
                </p>
                <p className="cursorPointer primary-color fontSize14 fw-bold">
                  Find Out More &rarr;{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireAndApply;

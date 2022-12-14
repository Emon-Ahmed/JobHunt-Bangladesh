import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row box-newsletter">
          <div className="col-xl-3 col-12 text-center d-none d-xl-block">
            <img src="/media/img/newsletter/newsletter-left.png" alt="Newsletter" />
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <h1 className="text-center fw-bolder text-white">
              New Things Will Always
              <br />
              Update Regularly
            </h1>
            <div className="mt-5 box-form-newsletter">
              <div className="d-flex">
                <input className="input-newsletter" type="text" placeholder="Enter your email here" />
                <div className="btn-newsletter">Subscribe</div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12 text-center d-none d-xl-block">
            <img src="/media/img/newsletter/newsletter-right.png" alt="Newsletter" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;

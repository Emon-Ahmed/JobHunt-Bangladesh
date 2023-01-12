import React from "react";
import MembersList from "./../../db/members.json";
import { Rating } from "react-simple-star-rating";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Members = () => {
  return (
    <div className="py-5 container">
      <div className="about-us mx-auto text-center pt-5">
        <h5 className="text-black-50 fontSize17 fw-bolder">OUR COMPANY</h5>
        <h1 className="text-black fw-bold">Meet Our Team</h1>
        <p className="text-black-50 fontSize15">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ligula ante, dictum non aliquet eu, dapibus ac quam. Morbi vel ante
          viverra orci tincidunt tempor eu id ipsum. Sed consectetur, risus a
          blandit tempor, velit magna pellentesque risus, at congue tellus dui
          quis nisl.
        </p>
      </div>
      <div className="row pb-5">
        {MembersList.map((member) => (
          <div key={member.id} className="col-xl-3 col-md-6 col-lg-4 g-2">
            <div className="d-flex justify-content-center px-2 py-4 m-2 rounded-4 border border-1 borderSecondary">
              <div className="text-center g-3 mb-3 align-items-center">
                <div className="p-5 p-lg-0">
                  <img
                    className="w-50 p-1 rounded-circle"
                    src={member?.img}
                    alt=""
                  />
                </div>
                <div className="py-3 d-flex flex-column align-items-center justify-content-center text-md-start">
                  <h4 className="fw-bolder noSpace">{member.name}</h4>
                  <span className="fontSize14 secondary-text py-1">
                    {member?.designation}
                  </span>
                  <div className="d-flex justify-content-center pb-1">
                    <span className="fontSize13">
                      <Rating
                        readonly="false"
                        size="14"
                        initialValue={member?.rate}
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      className="img16"
                      src="/media/img/location.svg"
                      alt="Jobs Location"
                    />
                    <div className="ms-1 py-1">
                      <div className="fontSize13 secondary-text fw-semibold">
                        {member.location}
                      </div>
                    </div>
                  </div>
                  <div className="icon-style py-2 text-black-50">
                    <span>
                      <FaFacebookF className="icons" />
                    </span>
                    <span>
                      <FaTwitter className="icons" />
                    </span>
                    <span>
                      <FaInstagram className="icons" />
                    </span>
                    <span>
                      <FaLinkedinIn className="icons" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;

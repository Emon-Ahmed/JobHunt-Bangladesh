import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row pb-4">
          <div className="col-md-3 col-sm-12">
            <Link className="navbar-brand" href="/">
              <Image
                src="/media/img/JobHunt-Logo.png"
                alt="JobHunt Website Logo"
                width={148}
                height={36}
              />
            </Link>
            <p className="fontSize13 my-3 secondary-text">
              JobBox is the heart of the design community and the best resource
              to discover and connect with designers and jobs worldwide.
            </p>
            <div className="my-2">
              <img
                className="me-2"
                src="/media/img/footer/facebook.svg"
                alt="Social"
              />
              <img
                className="me-2"
                src="/media/img/footer/twitter.svg"
                alt="Social"
              />
              <img
                className="me-2"
                src="/media/img/footer/linkedin.svg"
                alt="Social"
              />
            </div>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6 className="mb-4 fw-bolder">Resources</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/find-a-job"
                >
                  All Jobs
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/candidates"
                >
                  Candidates
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/recruiters"
                >
                  Recruiters
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/companies"
                >
                  Companies
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6 className="mb-4 fw-bolder">Quick links</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="https://www.facebook.com/"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="https://twitter.com/"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="https://www.linkedin.com/"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="https://www.youtube.com/"
                >
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2 col-xs-6">
            <h6 className="mb-4 fw-bolder">More</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none secondary-text fontSize15"
                  href="/terms"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-12">
            <h6 className="mb-4 fw-bolder">Download App</h6>
            <p className="fontSize13 secondary-text">
              Download our Apps and get extra 15% Discount on your first Order…!
            </p>
            <img
              className="mb-1"
              src="/media/img/footer/android.png"
              alt="Android"
            />{" "}
            <br />
            <img
              className="mb-1"
              src="/media/img/footer/app-store.png"
              alt="IOS"
            />
          </div>
        </div>
        <hr />
        <div className="row py-3">
          <div className="col-md-6">
            <p className="secondary-text fontSize14">
              Copyright © 2022. JobHunt all right reserved
            </p>
          </div>
          <div className="col-md-6 text-md-end text-start">
            <Link
              className="mx-3 secondary-text text-decoration-none fontSize14"
              href="/policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="secondary-text text-decoration-none fontSize14"
              href="/terms"
            >
             Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

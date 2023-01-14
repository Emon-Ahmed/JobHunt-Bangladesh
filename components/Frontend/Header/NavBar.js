import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

function NavBar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-4">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/media/img/JobHunt-Logo.png"
              alt="JobHunt Website Logo"
              width={148}
              height={36}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/find-a-job">
                  Find a Job
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/recruiters">
                  Recruiters
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/candidates">
                  Candidates
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact-us">
                  Contact Us
                </Link>
              </li>
            </ul>
            {!session?.user ? (
              <div className="d-flex register-btn">
                <div className="btn mx-2 text-decoration-underline">
                  <Link className="nav-link pt-1" href="/register">
                    Register
                  </Link>
                </div>
                <button className="btn bg-primary-color text-white px-4 py-2">
                  <Link className="nav-link text-white" href="/sign-in">
                    Sign in
                  </Link>
                </button>
              </div>
            ) : (
              <div className="d-flex register-btn">
                <button onClick={() => signOut()} className="btn bg-danger text-white px-4 py-2">
                  <Link className="nav-link text-white" href="/sign-in">
                    Logout
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

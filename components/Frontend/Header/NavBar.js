import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import {
  BsBoxArrowRight,
  BsPerson,
} from "react-icons/bs";

function NavBar() {
  const { data: session } = useSession();
  const userName = session?.user?.name || "Profile";
  const userInitial = userName.charAt(0).toUpperCase();

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
                <Link className="nav-link" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/find-a-job">
                  Find a Job
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/company">
                  Company
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
                <Link href="/sign-in">
                  <button className="btn bg-primary-color text-white px-4 py-2">
                    <span className="nav-link text-white">Sign in</span>
                  </button>
                </Link>
              </div>
            ) : (
              <div className="d-flex align-items-center register-btn gap-2">
                <div className="dropdown">
                  <button
                    className="profile-menu-toggle dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {session?.user?.image ? (
                      <img
                        className="profile-menu-avatar"
                        src={session.user.image}
                        alt={userName}
                      />
                    ) : (
                      <span className="profile-menu-avatar profile-menu-initial">
                        {userInitial}
                      </span>
                    )}
                    <span className="profile-menu-text">
                      <span className="profile-menu-label">Signed in as</span>
                      <span className="profile-menu-name">{userName}</span>
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end profile-dropdown-menu">
                    <li>
                      <Link
                        className="dropdown-item profile-dropdown-item"
                        href="/profile"
                      >
                        <BsPerson className="me-2" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item profile-dropdown-item text-danger"
                        type="button"
                        onClick={() => signOut({ callbackUrl: "/sign-in" })}
                      >
                        <BsBoxArrowRight className="me-2" />
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

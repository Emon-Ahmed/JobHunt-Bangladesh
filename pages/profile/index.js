import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../../components/Frontend/Footer/Footer";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import { BsEye, BsBagPlus, BsBagCheck, BsBuilding, BsFilePlus } from "react-icons/bs";
import { FaRegBuilding, FaRegUser, FaRegSun } from "react-icons/fa";
import { useSession, signOut, getSession } from "next-auth/react";
import MyProfile from "../../components/Backend/Profile/MyProfile";
import PostAJob from "../../components/Backend/Profile/PostAJob";
import AppliedJobs from "../../components/Backend/Profile/AppliedJobs";
import MyJobs from "../../components/Backend/Profile/MyJobs";
import Setting from "../../components/Backend/Profile/Setting";
import Company from "../../components/Backend/Profile/Company";
import AddCompany from "../../components/Backend/Profile/AddCompany";

const Profile = () => {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Profile || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Profile Page || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />

      <div className="container">
        <img
          className="w-100 rounded-4"
          src="https://jobbox-nextjs.vercel.app/assets/imgs/page/candidates/img.png"
          alt="Candidate Cover"
        />
        <div className="px-5">
          <img
            className="company_logo rounded-3"
            src={session?.user?.image}
            alt="Profile"
          />
          <div className="d-flex justify-content-between align-items-start mt-2 mb-4 pb-1">
            <div className="pt-2 pb-1">
              <div className="">
                <div className="d-flex align-items-center">
                  <h3 className="fw-bolder">
                    {session?.user ? session?.user?.name : "Emon Ahmed"}
                  </h3>
                  <div className="d-flex align-items-center px-2">
                    <img
                      className="img18"
                      src="/media/img/location.svg"
                      alt="Jobs Location"
                    />
                    <div className="ms-1">
                      <div className="fontSize17 secondary-text fw-semibold">
                        Dhaka, Bangladesh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="fontSize16">
                UI/UX Designer. Front end Developer
              </span>
            </div>

            <button className="btn bg-primary-color text-white fw-bolder px-5 py-3">
              <Link className="nav-link text-white" href="/sign-in">
                <span className="pe-3 fontSize17">
                  <BsEye />
                </span>
                Preview
              </Link>
            </button>
          </div>
        </div>
        <hr />
        <div className="row align-items-start my-5">
          <div className="col-md-3">
            <div
              className="profile_setting nav flex-column nav-pills me-3 pb-4"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active px-5 my-2 text-start"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                {" "}
                <span className="pe-2">
                  <FaRegBuilding />
                </span>{" "}
                My Profile
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-post-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-post"
                type="button"
                role="tab"
                aria-controls="v-pills-post"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <BsBagPlus />{" "}
                </span>
                Post A Job
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <BsBagCheck />{" "}
                </span>
                Applied Jobs
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <FaRegUser />
                </span>{" "}
                My Jobs
              </button>

              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-Company"
                type="button"
                role="tab"
                aria-controls="v-pills-Company"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <BsBuilding />
                </span>{" "}
                My Company
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-New-Company"
                type="button"
                role="tab"
                aria-controls="v-pills-New-Company"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <BsFilePlus />
                </span>{" "}
                New Company
              </button>
              <button
                className="nav-link px-5 my-2 text-start"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                {" "}
                <span className="pe-2">
                  <FaRegSun />
                </span>{" "}
                Settings
              </button>
            </div>
            <hr />
            <p className="text-start py-2 fontSize13 text-danger">
              Delete Account
            </p>
          </div>
          <div className="col-md-9">
            <div className="tab-content py-2" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabIndex="0"
              >
                <div>
                  <MyProfile />
                </div>
              </div>
              <div
                className="tab-pane fade no-outline"
                id="v-pills-post"
                role="tabpanel"
                aria-labelledby="v-pills-post-tab"
                tabIndex="0"
              >
                <div>
                  <PostAJob />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabIndex="0"
              >
                <div>
                  <AppliedJobs />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
                tabIndex="0"
              >
                <div>
                  <MyJobs />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-Company"
                role="tabpanel"
                aria-labelledby="v-pills-Company-tab"
                tabIndex="0"
              >
                <div>
                  <Company />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-New-Company"
                role="tabpanel"
                aria-labelledby="v-pills-New-Company-tab"
                tabIndex="0"
              >
                <div>
                  <AddCompany />
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
                tabIndex="0"
              >
                <div>
                  <Setting />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Profile;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

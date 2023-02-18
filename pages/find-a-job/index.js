import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavBar from "../../components/Frontend/Header/NavBar";
import Newsletter from "../../components/Frontend/Home/Newsletter";
import Footer from "../../components/Frontend/Footer/Footer";
import FindForm from "../../components/Frontend/Header/FindForm";
import Link from "next/link";

const FindAJob = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/job')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading)
  return (
    <div className="m-5 text-center text-black">
      <h4>Loading...</h4>
    </div>
  );
  if (!data) return <p>No profile data</p>
  
  return (
    <>
      <Head>
        <title>Find A Job || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Find A Job || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      <div className="container">
        <div className="text-center pt-4">
          <div className="candidates-bg text-center rounded rounded-3 p-5">
            <h3 className="fw-bolder">
              <span className="primary-color">22</span> Jobs Available Now
            </h3>
            <p className="text-black-50 fontSize14">
              orem ipsum dolor sit amet consectetur adipisicing elit. Vero
              repellendus magni, <br />
              atque delectus molestias quis?
            </p>
            <div className="mx-lg-5 px-lg-5">
              <FindForm />
            </div>
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <span className="fontSize14">
            Showing <b>4-6</b> of <b>{data?.length}</b> jobs
          </span>
          <div className="px-2 border border-1 rounded rounded-1 d-flex justify-content-between align-items-center w-auto">
            <span className="px-1 fontSize14">Sort: </span>
            <select className="fontSize14 form-style">
              <option value="0">Latest</option>
              <option value="1">Oldest</option>
              <option value="2">Lowest Cost</option>
              <option value="3">Highest Cost</option>
            </select>
          </div>
        </div>
        <hr />
        <div className="py-3">
          <div className="row">
            {data?.map((jobList) => (
              <div key={jobList?._id} className="col-xl-3 col-md-6 col-lg-4 g-2 ">
                <div className="p-4 m-2 recruiters-box rounded-4 hover-white  border border-1 borderSecondary">
                  <div className="d-flex pt-2 pb-4 align-items-center">
                    <img
                      className="img48 rounded-2"
                      src="/media/img/JobHunt-Company.png"
                      alt="Company"
                    />
                    <div className="ms-2">
                      <h6 className="fw-bolder cursorPointer">
                        {jobList?.company_name}
                      </h6>
                      <div className="d-flex align-items-center">
                        <img
                          src="/media/img/location.svg"
                          alt="Jobs Location"
                        />
                        <span className="fontSize11 ps-1">
                          {jobList?.company_address}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="text-black text-decoration-none"
                    href={`/find-a-job/${jobList?._id}`}
                  >
                    <h5 className="fw-bolder cursorPointer mb-3">{jobList?.job_title}</h5>
                  </Link>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src="/media/img/briefcase.svg" alt="Jobs Type" />
                      <span className="fontSize12 secondary-text ps-1">
                        {jobList?.job_type}
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="/media/img/time.svg" alt="Jobs Deadline" />
                      <span className="fontSize12 secondary-text ps-1">
                        3 mins ago
                      </span>
                    </div>
                  </div>
                  {/* <p className="fontSize14 text-dark py-1">
                    {jobList.description}
                  </p> */}
                  <div className="my-2">
                    {jobList?.employment_info?.skills?.map((s) => (
                      <span className="me-2 mb-2 btn btn-secondary-color rounded fontSize12">
                        {s?.skill}
                      </span>
                    ))}
                  </div>
                  <hr />
                  <div className="row g-0 align-items-center">
                    <div className="col-md-7 col-lg-7 col-7">
                      <span className="fw-bold fs-4 primary-color">$800</span>
                      <span className="fontSize15 text-black-50">/month</span>
                    </div>
                    <div className="col-md-5 col-lg-5 col-5 text-end ">
                      <span className="rounded-1 px-2 py-2 fontSize13 primary-color recruiters-btn cursorPointer">
                        Apply Now
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <nav className="py-5" aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default FindAJob;

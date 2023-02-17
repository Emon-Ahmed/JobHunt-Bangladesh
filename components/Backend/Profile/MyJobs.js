import React, { useEffect, useState } from "react";
import Link from "next/link";

const MyJobs = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/job")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="m-5 text-center text-black">
        <h4>Loading...</h4>
      </div>
    );
  if (!data) return <p>No profile data</p>;

  async function handleDelete(_id) {
    await fetch(`/api/job/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((d) => {
        if (d != null) {
          alert("Delete Order");
          const remaining = data.filter((row) => row._id !== _id);
          setData(remaining);
        }
      });
  }

  return (
    <div>
      <h3 className="text-black fw-bolder">My Jobs</h3>
      <div>
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <span className="fontSize14 text-black">
            Showing <b>4-6</b> of <b>{data?.length}</b> jobs
          </span>
          <div className="px-2 border border-1 rounded rounded-1 d-flex justify-content-between align-items-center w-auto">
            <span className="px-1 fontSize14 text-black">Sort: </span>
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
              <div key={jobList?._id} className="col-md-6 g-2 ">
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
                    href={`/find-a-job/${jobList?.job_title}`}
                  >
                    <h5 className="fw-bolder cursorPointer mb-3">
                      {jobList?.job_title}
                    </h5>
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
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="">
                      <span className="rounded-1 px-4 py-2 fontSize13 text-white bg-primary-color text-white recruiters-btn cursorPointer">
                        View Job
                      </span>
                    </div>
                    <div onClick={() => handleDelete(jobList?._id)}>
                      <span className="rounded-1 px-4 py-2 fontSize13 text-white bg-danger recruiters-btn cursorPointer">
                        Delete Now
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
    </div>
  );
};

export default MyJobs;

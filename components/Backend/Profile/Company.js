import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

const Company = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/company")
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
    await fetch(`/api/company/${_id}`, {
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
      <h3 className="text-black fw-bolder">Company</h3>
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
            </select>
          </div>
        </div>
        <hr />
        <div className="py-3">
          <div className="row">
          {data.map((company) => (
              <div
                key={company?.id}
                className="col-md-6 col-lg-4 g-2"
              >
                <div className="px-3 py-4 m-2 rounded-4 border border-1 borderSecondary hover-white recruiters-box">
                  <div className="d-flex align-items-center flex-column justify-content-center">
                    <img
                      className="img48 rounded"
                      src={company?.company_icon}
                      alt="Company"
                    />
                    <div className="d-flex flex-column align-items-center">
                      <Link
                        className="text-black text-decoration-none"
                        href={`/recruiters/${company?.company_name}`}
                      >
                        <h4 className="pt-2 fw-bolder cursorPointer">
                          {company?.company_name}
                        </h4>
                      </Link>
                      <div className="d-flex align-items-center">
                        <span className="fontSize12">
                          <Rating
                            readonly="false"
                            size="17"
                            initialValue={company?.company_rating}
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column justify-content-between align-items-center">
                    <div className="d-flex align-items-center py-2">
                      <img src="/media/img/location.svg" alt="Jobs Type" />
                      <span className="fontSize13 secondary-text ps-1 fw-bold">
                        {company?.company_location}
                      </span>
                    </div>
                    <div className="d-flex my-4 px-5 py-3 recruiters-btn rounded-1 align-items-center justify-content-center cursorPointer">
                      <span className="fontSize13 primary-color">
                        {company?.company_job} Open Jobs
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

export default Company;

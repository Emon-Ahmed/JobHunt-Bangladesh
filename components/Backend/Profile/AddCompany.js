import React, { useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Formik, Form, Field } from "formik";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";

const AddCompany = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [file, setFile] = useState("https://via.placeholder.com/1325x355");
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const resetFileInput = () => {
    inputRef.current.value = null;
    setFile("https://via.placeholder.com/1325x355");
  };
  return (
    <div>
      <h3 className="text-black fw-bolder">New Company</h3>
      <Formik
        initialValues={{
          job_title: "",
          industry: "graphics",
          job_level: "beginner",
          Salary: "$200 - $400",
          Experience: "Fresher",
          job_type: "Full Time",
          Location: "Dhaka",
          company: "adobe",
          file: file,
        }}
        onSubmit={async (values, { resetForm }) => {
          const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...values,
              description: value,
            }),
          };
          await fetch(`${process.env.BASE_URL}/api/company`, options)
            .then((res) => res.json())
            .then((data) => {
              resetForm();
              setValue("");
            });
        }}
      >
        <Form className="login-register text-start my-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-group my-2">
                <label
                  className="form-label text-black-50 fontSize14"
                  htmlFor="input-1"
                >
                  Company Name
                </label>
                <Field
                  className="no-outline"
                  type="text"
                  name="job_title"
                  placeholder="Title"
                />
              </div>
              <div className="form-group my-3">
                <label className="form-label text-black-50 fontSize14">
                  Company Description
                </label>
                <ReactQuill
                  className="no-outline editor-height text-black"
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  placeholder={"Write your post here..."}
                />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mt-5 w-100">
                    <label className="form-label text-black-50 fontSize14">
                      Industry
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="industry"
                    >
                      <option value="graphics">Graphics</option>
                      <option value="developer">Developer</option>
                    </Field>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mt-5 w-100">
                    <label className="form-label text-black-50 fontSize14">
                      Company Age
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="company_age"
                    >
                      <option value="1 Year">1 Year</option>
                      <option value="2 Year">2 Year</option>
                    </Field>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group my-3 w-100">
                    <label className="form-label text-black-50 fontSize14">
                      Company Size
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="company_size"
                    >
                      <option value="0 - 10">0 - 10</option>
                      <option value="10 - 25">10 - 25</option>
                      <option value="25 - 50">25 - 50</option>
                      <option value="50 - 100">50 - 100</option>
                      <option value="100+">100+</option>
                    </Field>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <label className="form-label text-black-50 fontSize14">
                      Location
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="Location"
                    >
                      <option value="Dhaka">Dhaka</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Mymensingh">Mymensingh</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Barisal">Barisal</option>
                      <option value="Chittagong">Chittagong</option>
                    </Field>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <label
                      className="form-label text-black-50 fontSize14"
                      htmlFor="input-1"
                    >
                      Company Email
                    </label>
                    <Field
                      className="no-outline"
                      type="text"
                      name="job_title"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <label
                      className="form-label text-black-50 fontSize14"
                      htmlFor="input-1"
                    >
                      Company Phone
                    </label>
                    <Field
                      className="no-outline"
                      type="text"
                      name="job_title"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4 w-100 border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
                <button
                  className="login-btn w-100 bg-primary-color fw-bolder"
                  type="submit"
                >
                  Add New Company
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <label
                  className="form-label text-black-50 fontSize14"
                  htmlFor="input-1"
                >
                  Company Logo
                </label>
                <div className="my-2">
                  <label className="text-black-50 fontSize14" htmlFor="input-1">
                    <img
                      className="rounded-circle img168 me-2"
                      src={file}
                      alt="File"
                    />
                  </label>
                  <div className="mt-3">
                    <input
                      className="no-outline border-0 file-btn"
                      type="file"
                      onChange={handleChange}
                      ref={inputRef}
                    />
                  </div>
                </div>
                <span onClick={resetFileInput} className="text-danger">
                  Delete
                </span>
              </div>
              <hr />
              <div>
                <label
                  className="form-label text-black-50 fontSize14"
                  htmlFor="input-1"
                >
                  Company Cover
                </label>
                <div className="my-2">
                  <label className="text-black-50 fontSize14" htmlFor="input-1">
                    <img
                      className="rounded-3 img168 me-2 img-fluid"
                      src={file}
                      alt="File"
                    />
                  </label>
                  <div className="mt-3">
                    <input
                      className="no-outline border-0 file-btn"
                      type="file"
                      onChange={handleChange}
                      ref={inputRef}
                    />
                  </div>
                </div>
                <span onClick={resetFileInput} className="text-danger">
                  Delete
                </span>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCompany;

import React, { useRef, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import DatePicker from "react-datepicker";
import { TagsInput } from "react-tag-input-component";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css";

const PostAJob = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const inputRef = useRef(null);
  const [selected, setSelected] = useState(["HTML"]);
  const [value, setValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
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
      <h3 className="text-black fw-bolder">Post Job</h3>
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
          startDate: startDate,
        }}
        onSubmit={async (values, { resetForm }) => {
          const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...values,
              description: value,
              skills: selected,
            }),
          };
          await fetch(`${process.env.BASE_URL}/api/job`, options)
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
                  Title
                </label>
                <Field
                  className="no-outline"
                  type="text"
                  name="job_title"
                  placeholder="Title"
                />
                <div className="fontSize14 pt-1 text-center text-danger">
                  <ErrorMessage name="job_title" />
                </div>
              </div>
              <div className="form-group my-3">
                <label className="form-label text-black-50 fontSize14">
                  Description
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
                  <div className="form-group mt-5">
                    <label className="form-label text-black-50 fontSize14">
                      Job Level
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="job_level"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="experienced">Experienced</option>
                    </Field>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group my-3 w-100">
                    <label className="form-label text-black-50 fontSize14">
                      Salary
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="Salary"
                    >
                      <option value="$200 - $400">$200 - $400</option>
                      <option value="$400 - $600">$400 - $600</option>
                      <option value="$600 - $800">$600 - $800</option>
                      <option value="$800 - $1000">$800 - $1000</option>
                      <option value="$1000++">$1000++</option>
                    </Field>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <label className="form-label text-black-50 fontSize14">
                      Experience
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="Experience"
                    >
                      <option value="Fresher">Fresher</option>
                      <option value="1 - 2 years">1 - 2 years</option>
                      <option value="2 - 3 years">2 - 3 years</option>
                      <option value="3 - 4 years">3 - 4 years</option>
                      <option value="4 years plus">4 years plus</option>
                    </Field>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group my-3 w-100">
                    <label className="form-label text-black-50 fontSize14">
                      Job type
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="job_type"
                    >
                      <option value="Full Time">Full Time</option>
                      <option value="Per Hour">Per Hour</option>
                      <option value="Remote">Remote</option>
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
                <div className="col-12 my-3">
                  <label className="form-label text-black-50 fontSize14">
                    Skills
                  </label>
                  <TagsInput
                    className="p-0 m-0"
                    value={selected}
                    onChange={setSelected}
                    name="skills"
                    placeHolder="Enter Skill Name"
                  />
                </div>
              </div>
              <div className="my-4 w-100 border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
                <button
                  className="login-btn w-100 bg-primary-color fw-bolder"
                  type="submit"
                >
                  Post Job
                </button>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <label
                  className="form-label text-black-50 fontSize14"
                  htmlFor="input-1"
                >
                  Post Banner
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
              <hr />
              <div className="form-group">
                <label className="form-label text-black-50 fontSize14">
                  Select Your Company
                </label>
                <Field
                  className="form-select form-select-lg no-outline"
                  as="select"
                  name="company"
                >
                  <option value="adobe">Adobe</option>
                  <option value="Bismillah Lab">Bismillah Lab</option>
                </Field>
              </div>
              <div className="my-3">
                <label className="form-label text-black-50 fontSize14">
                  Deadline
                </label>
                <DatePicker
                  className="form-control dataPicker"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PostAJob;

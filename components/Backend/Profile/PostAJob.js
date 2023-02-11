import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostAJob = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const inputRef = useRef(null);
  const router = useRouter();
  const [file, setFile] = useState(
    "https://i0.wp.com/www.glamflame.net/wp-content/uploads/2020/01/Hero-Banner-Placeholder-Light-1024x480-1.png?fit=1024%2C480&ssl=1"
  );
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const resetFileInput = () => {
    inputRef.current.value = null;
    setFile(
      "https://i0.wp.com/www.glamflame.net/wp-content/uploads/2020/01/Hero-Banner-Placeholder-Light-1024x480-1.png?fit=1024%2C480&ssl=1"
    );
  };
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h3 className="text-black fw-bolder">Post A Job</h3>
      <div>
        <Formik
          initialValues={{
            description: value,
            industry: "",
            job_level: "",
            Salary: "",
            Experience: "",
            job_type: "",
            Location: "",
            file: file,
            company: "",
            startDate: startDate,
            job_title: "",
          }}
          onSubmit={async (values) => {
            console.log(values);
            const options = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            };

            await fetch(`${process.env.BASE_URL}/api/job`, options)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                // if (data) router.push(`${process.env.BASE_URL}`);
              });
          }}
        >
          <Form className="login-register text-start my-3">
            <div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group my-2">
                    <label
                      className="form-label text-black-50 fontSize14"
                      htmlFor="input-1"
                    >
                      Job Title *
                    </label>
                    <Field
                      className="no-outline"
                      id="input-1"
                      type="text"
                      name="job_title"
                      placeholder="Your full name"
                    />
                    <div className="fontSize14 pt-1 text-center text-danger">
                      <ErrorMessage name="job_title" />
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <label className="form-label text-black-50 fontSize14">
                      Description
                    </label>

                    <ReactQuill
                      className="no-outline editor-height text-black"
                      id="input-1"
                      theme="snow"
                      name="description"
                      value={value}
                      onChange={setValue}
                    />

                    <div className="fontSize14 pt-1 text-center text-danger">
                      <ErrorMessage name="description" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group my-3 w-100">
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
                      <div className="form-group my-3">
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
                  <div className="my-4 w-50 border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
                    <button
                      className="login-btn w-100"
                      type="submit"
                      name="Job_Post"
                    >
                      Post Job
                    </button>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="">
                    <label
                      className="form-label text-black-50 fontSize14"
                      htmlFor="input-1"
                    >
                      Post Banner
                    </label>
                    <div className="my-2">
                      <label
                        className="text-black-50 fontSize14"
                        htmlFor="input-1"
                      >
                        <img
                          className="rounded-3 img168 me-2 img-fluid"
                          src={file}
                          alt="File"
                        />
                      </label>
                      <div className="mt-3">
                        <input
                          className="no-outline border-0 file-btn"
                          id="input-1"
                          type="file"
                          name="file"
                          onChange={handleChange}
                          ref={inputRef}
                        />
                      </div>
                    </div>
                    <span onClick={resetFileInput} className="text-danger">
                      Delete
                    </span>
                    <div className="fontSize14 pt-1 text-center text-danger">
                      <ErrorMessage name="fullname" />
                    </div>
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
                      <option value="bismillah">Bismillah Lab</option>
                    </Field>
                  </div>
                  <div className="my-3">
                    <label className="form-label text-black-50 fontSize14">
                      Deadline
                    </label>
                    <DatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PostAJob;

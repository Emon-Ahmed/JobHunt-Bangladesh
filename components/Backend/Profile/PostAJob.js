import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";

const PostAJob = () => {
  const [value, setValue] = useState();
  const inputRef = useRef(null);
  const router = useRouter();
  const [file, setFile] = useState(
    "https://www.molecularproducts.com/wp-content/uploads/2017/01/placeholder-product-banner.jpg"
  );
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const resetFileInput = () => {
    inputRef.current.value = null;
    setFile("");
  };
  return (
    <div>
      <h3 className="text-black fw-bolder">Post A Job</h3>
      <div>
        <Formik
          initialValues={{
            username: "",
            fullname: "",
            description: value,
          }}
          onSubmit={async (values) => {
            const options = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            };

            await fetch(`${process.env.BASE_URL}/api/auth/signup`, options)
              .then((res) => res.json())
              .then((data) => {
                if (data) router.push(`${process.env.BASE_URL}`);
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
                      required
                      name="job_title"
                      placeholder="Your full name"
                    />
                    <div className="fontSize14 pt-1 text-center text-danger">
                      <ErrorMessage name="job_title" />
                    </div>
                  </div>
                  <div className="form-group my-2">
                    <label
                      className="form-label text-black-50 fontSize14"
                      htmlFor="input-1"
                    >
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
                    ;
                    <div className="fontSize14 pt-1 text-center text-danger">
                      <ErrorMessage name="description" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group my-3">
                        <label
                          className="form-label text-black-50 fontSize14"
                          htmlFor="input-1"
                        >
                          Select Your Company
                        </label>
                        <Field
                          className="d-block px-3 text-black-50 border-1 border py-3 no-outline"
                          as="select"
                          name="color"
                        >
                          <option value="adobe">Adobe</option>
                          <option value="bismillah">Bismillah Lab</option>
                        </Field>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group my-3">
                        <label
                          className="form-label text-black-50 fontSize14"
                          htmlFor="input-1"
                        >
                          Select Your Company
                        </label>
                        <Field
                          className="d-block px-3 text-black-50 border-1 border py-3 no-outline"
                          as="select"
                          name="color"
                        >
                          <option value="adobe">Adobe</option>
                          <option value="bismillah">Bismillah Lab</option>
                        </Field>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 w-50 border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
                    <button
                      className="login-btn w-100"
                      type="submit"
                      name="login"
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
                          alt=""
                        />
                      </label>
                      <div className="mt-3">
                        <input
                          className="no-outline border-0 file-btn"
                          id="input-1"
                          type="file"
                          required
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
                    <label
                      className="form-label text-black-50 fontSize14"
                      htmlFor="input-1"
                    >
                      Select Your Company
                    </label>
                    <Field
                      className="d-block px-3 text-black-50 border-1 border py-3 no-outline"
                      as="select"
                      name="color"
                    >
                      <option value="adobe">Adobe</option>
                      <option value="bismillah">Bismillah Lab</option>
                    </Field>
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

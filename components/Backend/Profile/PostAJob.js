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
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const resetFileInput = () => {
    inputRef.current.value = null;
    setFile("");
  };
  return (
    <div>
      <h3 className="text-black fw-bolder">Post A Jobs</h3>
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
              <div className="">
                <div className="d-flex align-items-center">
                  <label
                    className="form-label text-black-50 fontSize14"
                    htmlFor="input-1"
                  >
                    <img
                      className="rounded-3 img168 img-fluid"
                      src={`${file} ? ${file} :  ${"https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"}`}
                      alt=""
                    />
                  </label>
                  <div>
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
                  <span onClick={resetFileInput} className="text-danger">
                    Delete
                  </span>
                </div>
                <div className="fontSize14 pt-1 text-center text-danger">
                  <ErrorMessage name="fullname" />
                </div>
              </div>
              <div className="form-group">
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
                  name="fullname"
                  placeholder="Your full name"
                />
                <div className="fontSize14 pt-1 text-center text-danger">
                  <ErrorMessage name="fullname" />
                </div>
              </div>
              <div className="form-group">
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
              <div className="form-group">
                <label
                  className="form-label text-black-50 fontSize14"
                  htmlFor="input-1"
                >
                  Contact number *
                </label>
                <Field
                  className="no-outline"
                  id="input-1"
                  type="text"
                  required
                  name="username"
                  placeholder="username"
                />
                <div className="fontSize14 pt-1 text-center text-danger">
                  <ErrorMessage name="username" />
                </div>
              </div>
            </div>

            <div className="w-50 border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
              <button className="login-btn w-100" type="submit" name="login">
                Post Job
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PostAJob;

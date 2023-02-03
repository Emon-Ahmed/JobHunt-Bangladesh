import Head from "next/head";
import React from "react";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
const PostAJob = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
      errors.fullname = "Required";
    } else if (values.fullname.length > 15) {
      errors.fullname = "Must be 15 characters or less";
    }


    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 15) {
      errors.username = "Must be 15 characters or less";
    }

    if (!values.role) {
      errors.role = "Select One Role, Candidate/Recruiter";
    }

    return errors;
  };
  const router = useRouter();
  return (
    <div>
      <h3 className="text-black fw-bolder">Post A Jobs</h3>
      <div>
        <Formik
          initialValues={{
            username: "",
            fullname: "",
            banner: ""
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
                if (data) router.push("http://localhost:3000/");
              });
          }}
          validate={validate}
        >
          <Form className="login-register text-start my-5">
            <div className="form-group">
              <label className="form-label text-black-50 fontSize14" htmlFor="input-1">
                Full Name *
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
              <label className="form-label text-black-50 fontSize14" htmlFor="input-1">
                Username *
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

            <div className="border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
              <button className="login-btn w-100" type="submit" name="login">
                Post Job
              </button>
            </div>
            <div className="text-muted text-center">
              Already have an account?{" "}
              <Link className="text-decoration-none" href="/sign-in">
                Sign in
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default PostAJob;

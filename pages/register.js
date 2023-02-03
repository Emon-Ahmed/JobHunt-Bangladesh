import Head from "next/head";
import React from "react";
import Link from "next/link";
import NavBar from "../components/Frontend/Header/NavBar";
import Footer from "../components/Frontend/Footer/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
const Register = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.fullname) {
      errors.fullname = "Required";
    } else if (values.fullname.length > 15) {
      errors.fullname = "Must be 15 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 15) {
      errors.username = "Must be 15 characters or less";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be greater then 8 characters";
    }

    if (!values.cpassword) {
      errors.cpassword = "Required";
    } else if (values.password !== values.cpassword) {
      errors.cpassword = "Password not match..!";
    }

    if (!values.role) {
      errors.role = "Select One Role, Candidate/Recruiter";
    }

    return errors;
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Register || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Register || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
            <div className="text-center">
              <div className="font-sm primary-color">Register</div>
              <h2 className="my-2 fw-bolder">Start for free Today</h2>
              <p className="font-sm text-muted mb-4">
                Access to all features. No credit card required.
              </p>
            </div>
            <Formik
              initialValues={{
                username: "",
                fullname: "",
                email: "",
                password: "",
                cpassword: "",
                role: "",
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
              validate={validate}
            >
              <Form className="login-register text-start my-5">
                <div className="form-group">
                  <label className="form-label fontSize14" htmlFor="input-1">
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
                  <label className="form-label fontSize14" htmlFor="input-email">
                    Email address*
                  </label>
                  <Field
                    className="no-outline"
                    id="input-email"
                    type="text"
                    required
                    name="email"
                    placeholder="example@gmail.com"
                  />
                  <div className="fontSize14 pt-1 text-center text-danger">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label fontSize14" htmlFor="input-1">
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
                <div className="form-group">
                  <label className="form-label fontSize14" htmlFor="input-4">
                    Password *
                  </label>

                  <Field
                    className=" no-outline"
                    id="input-4"
                    type="password"
                    required
                    name="password"
                    placeholder="************"
                  />
                  <div className="fontSize14 pt-1 text-center text-danger">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label fontSize14" htmlFor="input-5">
                    Re-Password *
                  </label>
                  <Field
                    className=" no-outline"
                    id="input-5"
                    type="password"
                    required
                    name="cpassword"
                    placeholder="************"
                  />
                  <div className="fontSize14 pt-1 text-center text-danger">
                    <ErrorMessage name="cpassword" />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="form-check d-flex  align-items-center">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="candidate"
                      value="candidate"
                    />
                    <label
                      className="form-check-label ms-1"
                      htmlFor="candidate"
                    >
                      Candidate
                    </label>
                  </div>
                  <div className="form-check d-flex  align-items-center">
                    <Field
                      className="form-check-input"
                      type="radio"
                      name="role"
                      id="Recruiter"
                      value="recruiter"
                    />
                    <label
                      className="form-check-label ms-1"
                      htmlFor="Recruiter"
                    >
                      Recruiter
                    </label>
                  </div>
                </div>
                <div className="fontSize14 pt-1 text-center text-danger">
                  <ErrorMessage name="role" />
                </div>

                <div className="border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
                  <button
                    className="login-btn w-100"
                    type="submit"
                    name="login"
                  >
                    Submit & Register
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
      </div>

      <Footer />
    </>
  );
};

export default Register;

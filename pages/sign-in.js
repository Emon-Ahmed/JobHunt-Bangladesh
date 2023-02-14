import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/Frontend/Header/NavBar";
import Footer from "../components/Frontend/Footer/Footer";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";

const SingIn = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be greater then 8 characters";
    }
    return errors;
  };
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Sing In || Job Hunt - Bangladesh</title>
        <meta
          name="description"
          content="Sing In || Job Hunt - Bangladesh || This Website is for job seekers in Bangladesh"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NavBar />

      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
            <div className="text-center">
              <div className="font-sm primary-color">Welcome back!</div>
              <h2 className="my-2 fw-bolder">Member Login</h2>
              <p className="font-sm text-muted mb-4">
                Access to all features. No credit card required.
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values) => {
                const status = await signIn("credentials", {
                  redirect: false,
                  email: values.email,
                  password: values.password,
                  callbackUrl: "/profile",
                });
                if (status.ok) router.push(status.url);
              }}
              validate={validate}
            >
              <Form className="login-register text-start my-5">
                <div className="form-group">
                  <label className="form-label fontSize14" htmlFor="email">
                    Email address *
                  </label>
                  <Field
                    className="no-outline"
                    id="email"
                    type="text"
                    required
                    name="email"
                    placeholder="Email address"
                  />
                  <div className="fontSize14 pt-1 text-center text-danger">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label fontSize14" htmlFor="password">
                    Password *
                  </label>
                  <Field
                    className=" no-outline"
                    id="password"
                    type="password"
                    required
                    name="password"
                    placeholder="************"
                  />
                  <div className="fontSize14 pt-1 text-center text-danger">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                <div className="text-end">
                  <Link
                    className="text-muted text-decoration-none pb-3"
                    href="/forgot-password"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="border-remove-btn d-flex justify-content-center align-items-center my-3 text-center">
                  <button
                    className="login-btn w-100"
                    type="submit"
                    name="login"
                  >
                    Login
                  </button>
                </div>
                <div className="text-muted text-center">
                  Don't have an Account?{" "}
                  <Link className="text-decoration-none" href="/register">
                    Register
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

export default SingIn;

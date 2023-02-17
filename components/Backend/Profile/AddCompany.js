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
  const coverRef = useRef(null);
  const iconRef = useRef(null);

  const [quillText, setQuillText] = useState("");
  const [coverImage, setCoverImage] = useState(
    "https://via.placeholder.com/1325x355"
  );
  const [iconImage, setIconImage] = useState(
    "https://via.placeholder.com/164x164"
  );

  function handleCoverChange(e) {
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  }
  function handleIconChange(e) {
    setIconImage(URL.createObjectURL(e.target.files[0]));
  }

  const resetCoverInput = () => {
    coverRef.current.value = null;
    setCoverImage("https://via.placeholder.com/1325x355");
  };
  const resetIconInput = () => {
    iconRef.current.value = null;
    setIconImage("https://via.placeholder.com/164x164");
  };

  return (
    <div>
      <h3 className="text-black fw-bolder">New Company</h3>
      <Formik
        initialValues={{
          company_name: "",
          company_tagline: "",
          company_description: "",
          company_location: "Dhaka",
          company_age: "1 Year",
          company_size: "0-10",
          company_industry: "Graphics",
          company_email: "example@gmail.com",
          company_phone: "+880 --- --- ----",
          company_rating: 5,
        }}
        onSubmit={async (values, { resetForm }) => {
          const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...values,
              company_description: quillText,
              company_icon: iconImage,
              company_cover: coverImage,
            }),
          };
          await fetch(`${process.env.BASE_URL}/api/company`, options)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              resetForm();
              setQuillText("");
              setCoverImage("https://via.placeholder.com/1325x355");
              setIconImage("https://via.placeholder.com/164x164");
            });
        }}
      >
        <Form className="login-register text-start my-3">
          <div className="row">
            <div className="col-lg-8">
              <div className="form-group my-2">
                <label className="form-label text-black-50 fontSize14">
                  Company Name
                </label>
                <Field
                  className="no-outline"
                  type="text"
                  name="company_name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group my-2">
                <label className="form-label text-black-50 fontSize14">
                  Company Tagline
                </label>
                <Field
                  className="no-outline"
                  type="text"
                  name="company_tagline"
                  placeholder="Tagline"
                />
              </div>
              <div className="form-group my-3">
                <label className="form-label text-black-50 fontSize14">
                  Company Description
                </label>
                <ReactQuill
                  className="no-outline editor-height text-black"
                  theme="snow"
                  value={quillText}
                  onChange={setQuillText}
                  placeholder={"Write your post here..."}
                />
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group mt-5 w-100">
                    <label className="form-label text-black-50 fontSize14">
                      Company Industry
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="company_industry"
                    >
                      <option value="Graphics">Graphics</option>
                      <option value="Developer">Developer</option>
                      <option value="Marketing">Marketing</option>
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
                      Company Location
                    </label>
                    <Field
                      className="form-select form-select-lg no-outline"
                      as="select"
                      name="company_location"
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
                    <label className="form-label text-black-50 fontSize14">
                      Company Email
                    </label>
                    <Field
                      className="no-outline"
                      type="text"
                      name="company_email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group my-3">
                    <label className="form-label text-black-50 fontSize14">
                      Company Phone
                    </label>
                    <Field
                      className="no-outline"
                      type="text"
                      name="company_phone"
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
                <label className="form-label text-black-50 fontSize14">
                  Company Logo
                </label>
                <div className="my-2">
                  <label className="text-black-50 fontSize14">
                    <img
                      className="rounded-circle img168 me-2 w-50"
                      src={iconImage}
                      alt="Company Icon Image"
                    />
                  </label>
                  <div className="mt-3">
                    <input
                      className="no-outline border-0 file-btn"
                      type="file"
                      onChange={handleIconChange}
                      ref={iconRef}
                    />
                  </div>
                </div>
                <span onClick={resetIconInput} className="text-danger">
                  Delete
                </span>
              </div>
              <hr />
              <div>
                <label className="form-label text-black-50 fontSize14">
                  Company Cover
                </label>
                <div className="my-2">
                  <label className="text-black-50 fontSize14">
                    <img
                      className="rounded-3 img168 me-2 img-fluid"
                      src={coverImage}
                      alt="Company Cover Image"
                    />
                  </label>
                  <div className="mt-3">
                    <input
                      className="no-outline border-0 file-btn"
                      type="file"
                      onChange={handleCoverChange}
                      ref={coverRef}
                    />
                  </div>
                </div>
                <span onClick={resetCoverInput} className="text-danger">
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

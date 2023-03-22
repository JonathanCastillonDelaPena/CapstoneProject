import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import axios, { AxiosError } from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormSignUp = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home");
    }
  });

  const registerSchema = Yup.object({
    first_name: Yup.string().min(3).max(25).trim().required(),
    last_name: Yup.string().min(3).max(25).trim().required(),
    email: Yup.string().email().lowercase().trim().required(),
    pass: Yup.string().min(8).max(15).trim().required(),
    username: Yup.string().lowercase().min(3).max(25).trim().required(),
    gender: Yup.string().min(3).max(25).trim().required(),
  });

  const [error, setError] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    pass: "",
    username: "",
    gender: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values) => {
        setError("");

        try {
          const response = await axios.post(
            "http://localhost:3000/signup",
            values
          );
          const responseData = response.data;
          console.log(response.data);
          alert(`${responseData.message}`);
          navigate("/");
        } catch (err) {
          if (err && err instanceof AxiosError)
            setError(err.response?.data.message);
          else if (err && err instanceof Error) setError(err.message);
          //console.log("Error: ", err.response.data);
          const responseData = err.response.data;
          console.log(responseData);
          alert(`${responseData.error}`);
        }
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <Form>
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h2 className="card-title text-center mb-4">Sign Up</h2>
                      <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <Field
                          type="text"
                          id="first_name"
                          name="first_name"
                          className={
                            errors.first_name && touched.first_name
                              ? "form-control input-error"
                              : "form-control"
                          }
                        />
                        <ErrorMessage
                          name="first_name"
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <Field
                          type="text"
                          id="last_name"
                          name="last_name"
                          className={
                            errors.last_name && touched.last_name
                              ? "form-control input-error"
                              : "form-control"
                          }
                        />
                        <ErrorMessage
                          name="last_name"
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className={
                            errors.email && touched.email
                              ? "form-control input-error"
                              : "form-control"
                          }
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pass">Password</label>
                        <Field
                          type={passwordShown ? "text" : "password"}
                          id="pass"
                          name="pass"
                          className={
                            errors.pass && touched.pass
                              ? "form-control input-error"
                              : "form-control"
                          }
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="show-password-btn"
                          onClick={togglePassword}
                        >
                          {passwordShown ? (
                            <i
                              className="bi bi-eye-slash-fill"
                              onChange={(e) => setPassword(e.target.value)}
                            ></i>
                          ) : (
                            <i className="bi bi-eye-fill"></i>
                          )}
                        </button>
                        <ErrorMessage
                          name="pass"
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <Field
                          type="text"
                          id="username"
                          name="username"
                          className={
                            errors.username && touched.username
                              ? "form-control input-error"
                              : "form-control"
                          }
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <Field
                          as="select"
                          id="gender"
                          name="gender"
                          required
                          className={
                            errors.gender && touched.gender
                              ? "form-control input-error"
                              : "form-control"
                          }
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Field>
                        <ErrorMessage
                          name="gender"
                          component="div"
                          className="error text-danger"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <button
                          type="submit"
                          className={
                            !(dirty && isValid)
                              ? "btn disabled"
                              : "btn btn-primary btn-block"
                          }
                          disabled={!(dirty && isValid)}
                        >
                          Sign Up
                        </button>
                        <p className="pt-3">
                          Already have an account? <Link to="/">Log in</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSignUp;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import axios, { AxiosError } from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormLogIn = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home");
    }
  });

  const loginSchema = Yup.object({
    username: Yup.string().min(3).max(25).trim().required(),
    pass: Yup.string().min(8).max(15).trim().required(),
  });

  const [error, setError] = useState("");
  const signIn = useSignIn();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const initialValues = {
    username: "",
    pass: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
        setError("");

        try {
          const response = await axios.post(
            "http://localhost:3000/login",
            values
          );

          signIn({
            token: response.data.accessToken,
            expiresIn: 10800,
            tokenType: "Bearer",
            authState: { username: values.username },
          });
        } catch (err) {
          if (err && err instanceof AxiosError)
            setError(err.response?.data.message);
          else if (err && err instanceof Error) setError(err.message);
          //console.log("Error: ", err.response.data);
          const responseData = err.response.data;
          console.log(responseData);
          if (responseData.error == "invalid") {
            alert("Invalid username or password");
          } else {
            alert(`${responseData.error}`);
          }
        }
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <Form>
            <div className="divForm border border-1 rounded-3 p-3 bg-light">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
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
              <div className="mb-3">
                <label htmlFor="pass" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <Field
                    type={passwordShown ? "text" : "password"}
                    className="form-control"
                    name="pass"
                    id="pass"
                    placeholder="Password"
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
                </div>
                <ErrorMessage
                  name="pass"
                  component="div"
                  className="error text-danger"
                />
              </div>
              <button
                type="submit"
                className={
                  !(dirty && isValid) ? "btn disabled" : "btn btn-primary"
                }
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>
              <span className="ps-3">
                No account yet? <Link to="/register">Sign Up</Link>
              </span>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormLogIn;

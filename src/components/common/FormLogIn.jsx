import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn, useIsAuthenticated } from "react-auth-kit";
import axios, { AxiosError } from "axios";
import { useFormik } from "formik";

const FormLogIn = () => {
  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/home');
    }
  });

    const [error, setError] = useState("");
    const signIn = useSignIn();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

    const onSubmit = async (values) => {
        console.log("Values: ", values);
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
          console.log("Error: ", err);
        }
      };

      const formik = useFormik({
        initialValues: {
          username: "",
          pass: "",
        },
        onSubmit,
      });

    return (
        
    <div className="divForm border border-1 rounded-3 p-3 bg-light">
        <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 d-flex justify-content-center">
                <h4>Sign In with :
                <i className="bi bi-facebook mx-1"></i>
                <i className="bi bi-google mx-1"></i>
                <i className="bi bi-linkedin mx-1"></i>
                </h4> 
            </div>
            <h5 className="text-center">OR</h5>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Username" value={formik.values.username} onChange={formik.handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="pass" className="form-label">Password</label>
                <div className="input-group">
                <input type={passwordShown ? "text" : "password"} className="form-control" name="pass" required placeholder="Password" value={formik.values.pass} onChange={formik.handleChange} />
                <button className="btn btn-outline-secondary" type="button" id="show-password-btn" onClick={togglePassword}>{passwordShown ? <i className="bi bi-eye-slash-fill" onChange={e => setPassword(e.target.value)}></i> : <i className="bi bi-eye-fill"></i>}</button>
                </div>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember-me" name="remember-me" />
                <label className="form-check-label" for="remember-me">Remember me</label>
            </div> */}
                <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </div>
    )
}

export default FormLogIn;

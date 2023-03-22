import React from "react";
import '../assets/style/global.css';
import { Link } from "react-router-dom";
import FormLogIn from "../components/common/FormLogIn";

const PageLogin = () => {
    return (
        <div className="pageLogInContainer d-lg-flex">
            <div className="containerLogIn container w-100 d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-1 text-center text-white">Welcome</h1>
                <FormLogIn></FormLogIn>
                </div>
            </div>

            <div className="containerSignUp container w-50 d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-1">KodeBook</h1>
                <h6 className="display-6 text-center">Connect with like-minded people</h6>
                <Link to="/register" className="btn btn-SignUp mx-1">SIGN UP</Link>
                <h6 className="text-center mt-5">Geared towards bringing together people with shared interests or hobbies</h6>
            </div>
        </div>
    );
};

export default PageLogin;
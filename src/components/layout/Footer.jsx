import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center border-top mt-5 footer">
        <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"></a>
            <span className="text-muted">© 2021 KodeBook Company, Inc</span>
        </div>
    </footer>   
    )
}

export default Footer
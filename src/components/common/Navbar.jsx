import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-center">
        <Link to={"/home"}>
          <h3>Home</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

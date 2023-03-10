import React from "react";
import { Link } from "react-router-dom";
import '../../assets/style/nav.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to={"/home"} className="navbar-brand">
      <img src="https://trello.com/1/cards/6405b0002b3347b1d350edcc/attachments/6406d9a785b025038862e9fe/previews/preview/download/Kodebook-1.png" alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <div className="test my-2 mx-3 ms-3">
        <button type="button" className="btn btn-secondary mx-2"><i className="bi bi-house-door-fill"></i> Home</button>
        <button type="button" className="btn btn-danger"><i className="bi bi-plus-circle"></i> Create</button>
      </div>
      <form className="d-flex my-1 mx-3 ms-5" role="search">
        <div className="input-group">
          <input className="form-control bg-dark text-light danger-placeholder" type="search" placeholder="Search for people, pages, groups" aria-label="Search"></input>
          <button className="btn btn-outline-secondary text-light" type="submit"><i className="bi bi-search"></i></button>
        </div>
        <div className="d-flex align-items-center ms-2">
          <h3 className="text-light"><i className="bi bi-person-plus mx-3"></i></h3>
          <h3 className="text-light"><i className="bi bi-chat-left-dots mx-3"></i></h3>
          <h3 className="text-light"><i className="bi bi-bell mx-3"></i></h3>
          <h3 className="text-light"><i className="bi bi-person-circle mx-3"></i></h3>
        </div>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;

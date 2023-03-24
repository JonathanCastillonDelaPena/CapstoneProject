import React, { useRef } from "react";
import { Await } from "react-router-dom";
import "../../assets/style/changeEmail.css";
const ChangeEmail = () => {
  //    const { currentUser, setLoading, setAlert, setModal, Modal} = useAuth();
  //     const emailRef = useRef();

  //     const handleSubmit = async (e) => {
  //         e.preventDefault();
  //         setLoading(true);
  //     try {
  //         await updateEmail(currentUser, emailRef.current.value)
  //         setAlert({
  //             isAlert: true,
  //             severity: 'success',
  //             message: 'Your email has been updated',
  //             timeOut: 8000,
  //             location: 'main',
  //         });
  //     } catch (errror) {
  //         setAlert({
  //             isAlert: true,
  //             severity: 'error',
  //             message: Error.message,
  //             timeOut: 5000,
  //             location: 'modal',
  //         });
  //         console.log(Error);
  //     }
  //         setLoading(false);
  //     };

  return (
    <div className="container">
      <div className="main">
        <div className="topbar">
          <a href="/home">Home</a>
          <a href="/profile">Profile</a>
          <a href="">Settings</a>
        </div>
        <div className="row">
          <div className="col-md-4 mt-1">
            <div className="card text-center sidebar">
              <div className="card-body">
                <img
                  src="https://i.pinimg.com/originals/0f/17/11/0f1711a4053360cba6f5422e9ee2a9d6.jpg"
                  alt=""
                  className="rounded-circle w-50 "
                />
                <div className="mt-3">
                  <h3>Monkey D. Goku</h3>
                  <i class="bi bi-house-door-fill">
                    <a href="">Home</a>
                  </i>
                  <i class="bi bi-gear">
                    <a href="">General</a>
                  </i>
                  <i class="bi bi-globe-americas">
                    <a href="">Language &Region</a>
                  </i>
                  <i class="bi bi-geo-alt">
                    <a href="">Location</a>
                  </i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-1">
            <div className="card mb-3 content">
              <h1 className="m-3 pt-3"> About</h1>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Full Name</h5>
                  </div>
                  <div className="col-md-9 text-secondary">Monkey D. Goku</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Phone</h5>
                  </div>
                  <div className="col-md-9 text-secondary">+09123454643</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Email</h5>
                  </div>
                  <div className="col-md-9 text-secondary">
                    monkeydgoku@gmail.com
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-3">
                    <h5>Address</h5>
                  </div>
                  <div className="col-md-9 text-secondary">South Blue Sea</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeEmail;

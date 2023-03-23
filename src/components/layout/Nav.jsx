import React, { useState, useEffect } from 'react';
import '../../assets/style/global.css'
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit'
import ModalPost from './ModalPost';
import SearchBox from '../searchBox/SearchBox';
function Nav({resultState}) {
  


const Nav = ({ props }) => {
  const signOut = useSignOut()
  return (
    <header className="pt-1 fixed-top navbarC border">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {/* LOGO */}
            <img className='kodeBook-logo d-none d-sm-block' src="https://res.cloudinary.com/dbjikdtuj/image/upload/v1679567851/Capstone/Posts/ypqhckgmerrrmgypxoye.png" alt="" />
          {/* END LOGO */}
            <div className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
               <SearchBox resultState={resultState}/>
            </div>

            <ul className="ms-auto mb-2 mb-lg-0">

                {/* Create POST */}
                  <button className='btnC btn-highlight me-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <i className="bi bi-large bi-color bi-plus-circle-fill"></i>
                  <span className='mx-2 font700'>Create</span>
                  </button>
                {/* Home */}
                <li className="nav-item">
                    <Link to='/Home'>
                      <button className='btnC btn-highlightHome me-2'>
                        <i className="bi bi-large bi-house-door-fill"></i>
                        <span className='mx-2 mt-1 font700'>Home</span>
                      </button>
                    </Link>
                </li>

            {/* Friend req START */}
            <li className="nav-item dropdown">
              <button className='btnC btn-highlightHome me-2' id="navbarDropdownFR" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi-large bi bi-color bi-person-fill-add  position-relative">
                    <span className="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger font-extra-small-size">
                      1
                    </span>
                    </i>
                    <span className='mx-2 mt-1 font700'>Friend Request</span>
              </button>
                <div className="dropdown-menu dropdown-friend p-2" aria-labelledby="navbarDropdownFR">
                      <h2 className='font700 text-center hover-Line'>Friend Request</h2>              
                      <div className='d-flex Hover-Effect rounded p-2'>
                          <img
                            className="rounded-circle smallMiniProfilePicComment mx-2 mt-1"
                            src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="..."
                          />
                          <div>
                            <div className='mb-3'>
                              <span className='friendName font700'>John Paul Baldonado</span>
                              <span className='text-muted'>Sent you a friend Request</span>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                              <button className='btn btn-primary'>Confirm</button>
                              <button className='btn btn-danger'>Delete</button>
                            </div>
                          </div>
                      </div>                 
                </div>
            </li>
            {/* Friend req END */}

            {/* Profile */}
            <li className="nav-item nav-ul-user">
                <button className='btnC btn-highlightHome me-2' id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className='mx-2 mt-1 pt-1 font700'>{props.first_name} {props.last_name} </span>
                  <img className='profilePicNav' src={props.image_url} alt="" />
                </button>
                <ul className="dropdown-menu boxshadow p-2" aria-labelledby="dropdownUser1">

                    <li className='userdropdownlist w-100'>
                      <Link to="/Profile" className='p-2 font700 userLink w-100'>
                        Profile
                      </Link>
                    </li>

                    <li className='userdropdownlist w-100'>
                    <Link to='/' className='p-2 font700 userLink w-100'>
                        Settings
                      </Link>
                    </li>

                    <li className='userdropdownlist w-100'>
                      <Link className='p-2 font700 userLink w-100' onClick={() => signOut()} to='/'>
                          <i className="bi-large bi bi-color bi-box-arrow-left"></i>
                          <span className='mx-2 mt-1'>Sign Out</span>
                      </Link>
                    </li>
                </ul>
            </li>
            {/* END PROFILE */}
            </ul>

          {/* <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 link-secondary">Overview</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
            <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
          </ul> */}



          {/* <div class="dropdown text-end">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Nav;
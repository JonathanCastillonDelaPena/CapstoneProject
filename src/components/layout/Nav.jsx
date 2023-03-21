import React, { useState, useEffect } from 'react';
import '../../assets/style/global.css'
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit'
import ModalPost from './ModalPost';
function Nav() {
  
  const signOut = useSignOut()
  return (
    <nav className="navbar navbar-expand-lg bg-black fixed-top">
      <div className="container">
        <img className='kodeBook-logo' src="https://trello.com/1/cards/6405b0002b3347b1d350edcc/attachments/64141958d37410ba2e9d82ff/previews/64141958d37410ba2e9d83af/download/KodeBook_Logo_Complete.png" alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="burger-color bi bi-list bi-large"></i>
        </button>

{/* Menu Start */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
           {/* Create POST */}
          <button className='btn btn-link me-2' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i className="bi bi-large bi-color bi-plus-circle-fill"></i>
            <span className='mx-2 font700'>Create</span>
          </button>

          {/* SEARCH */}
          <form className="box">
            <Link type="submit" data-bs-toggle="tooltip" data-bs-placement="left" title="Search">
              <i className="bi bi-search"></i>
              <input className="input-text" type="search" placeholder="Type Name Here" aria-label="Search" />
            </Link>
          </form>
         

          {/* MENU */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
                  <Link className='btn-link w-100' to='/Home'>
                    <i className="bi bi-large bi-color bi-house-door-fill"></i>
                    <span className='mx-2 mt-1'> Home</span>
                  </Link>
            </li>
            {/* Profile */}
            <li className="nav-item">
                  <Link className='btn-link w-100' to='/profile'>
                    {/* Or ProfilePic circle Mini */}
                  <i className="bi-large bi bi-color bi-person-circle"></i>
                    <span className='mx-2 mt-1'>Profile</span>
                  </Link>
            </li>
        {/* Friend req START */}
            <li className="nav-item dropdown">
              <Link className='btn-link w-100' id="navbarDropdownFR" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi-large bi bi-color bi-person-fill-add  position-relative">
                    <span className="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger font-extra-small-size">
                      1
                    </span>
                    </i>
                    <span className='mx-2 mt-1'>Friend Request</span>
              </Link>
              {/* Link */}
                <div className="dropdown-menu p-2" aria-labelledby="navbarDropdownFR">
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

            {/* Messages */}
            <li className="nav-item dropdown">
              <Link className='btn-link w-100'  id="navbarDropdownMS" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi-large bi bi-color bi-chat-left-text-fill position-relative">
                    <span className="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger font-extra-small-size">
                      1
                    </span>
                  </i>
                  <span className='mx-2'>Message</span>
              </Link>
              {/* Message Dropdown */}
                <div className="dropdown-menu me-2" aria-labelledby="navbarDropdownMS">
                    <h2 className='font700 text-center hover-Line'>
                      Create New 
                    <i className="bi-large bi bi-color bi-chat-right-text-fill mx-3"></i>
                    </h2>
                  {/* <Link className='btn d-flex' data-bs-toggle="tooltip" data-bs-placement="left" title="Create New Message">
                    
                  </Link> */}

                      <div className='d-flex Hover-Effect rounded p-2'>
                          <img
                            className="rounded-circle smallMiniProfilePicComment mx-2 mt-1"
                            src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="..."
                          />
                          <div>
                            <div className='mb-3 d-flex flex-column'>
                              <span className='friendName font700'>John Paul Baldonado</span>
                              <span className='text-muted'>Message Content</span>
                            </div>
                          </div>
                        </div>
                </div>
            </li>
            <li className="nav-item">
              <Link className='btn-link w-100' onClick={() => signOut()} to='/login'>
                  <i className="bi-large bi bi-color bi-box-arrow-left"></i>
                  <span className='mx-2 mt-1'>Sign Out</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

  

    </nav>
  )
}

export default Nav;
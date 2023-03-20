import React, { useState, useEffect } from 'react';
import '../../assets/style/global.css'
import { SideBarData } from './SideBar';
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit'
function Nav() {
  
  const signOut = useSignOut()
  return (
    <header className='header fixed-top'>
      <div className='navbar navbar-expand-lg px-5'>
        <nav className='container-lg d-flex justify-content-center w-100'>
    {/* LOGO SMALL */}
          <img className='kodeBook-logo' src="https://trello.com/1/cards/6405b0002b3347b1d350edcc/attachments/6414195517bfb00945d54007/previews/6414195517bfb00945d54013/download/KodeBook_Logo_Only.png" alt="" />
    {/* Toggler Button */}
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
    {/* MENU */}
          <div className='collapse navbar-collapse bg-light w-25' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-1 mb-lg-0'>
             
            </ul>
{/* UL Another List */}
            <ul className='navbar-nav mE-auto mb-1 mb-lg-0'>
                {/* Home */}
                <li>
                  <Link className='btn-link' to='/Home'>
                  <i class="bi bi-large bi-house-door-fill"></i>
                    {/* <span className='mx-2'>HOME</span> */}
                  </Link>
                </li>
                {/* Profile*/}
                <li>
                  <Link className='btn-link' to='/Home'>
                    {/* Or ProfilePic circle Mini */}
                  <i class="bi bi-person-circle"></i>
                    {/* <span className='mx-2'>HOME</span> */}
                  </Link>
                </li>
               {/* FRIEND REQ */}
               <li>
                  <Link className='btn-link' to='/Home'>
                    <i class="bi bi-person-fill-add  position-relative">
                    <span class="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger font-extra-small-size">
                      99+
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </i>
                  </Link>
                </li>
                {/* Messages */}
                <li>
                  <Link className='btn-link' to='/Home'>
                  <i class="bi bi-chat-left-text-fill position-relative">
                    <span class="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger font-extra-small-size">
                      99+
                      <span class="visually-hidden">unread messages</span>
                    </span>
                    </i>
                  </Link>
                </li>
                {/* Notif */}
                <li>
                  <Link className='btn-link' to='/Home'>
                  <i class="bi bi-bell-fill position-relative">
                    <span class="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger font-extra-small-size">
                      99+
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </i>
                  </Link>
                </li>
              <li>
            {/* LOGOUT */}
                <Link className='btn-link' onClick={() => signOut()} to='/login'>
                  <i class="bi bi-box-arrow-left"></i>
                </Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </div>
    </header> 
         
    
  )
}

export default Nav;
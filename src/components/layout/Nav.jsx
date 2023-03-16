import React, { useState, useEffect } from 'react';
import '../../assets/style/global.css'
import { SideBarData } from './SideBar';
import { Link } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit'
function Nav() {
  // SideBar Funtionality
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

      useEffect(() => {
        const handleWheel = () => {
          setSideBar(false);
        };
        window.addEventListener("wheel", handleWheel);
        return () => {
          window.removeEventListener("wheel", handleWheel);
        };
      }, []);
      
  return (
    <div className='main-nav-menu'>
      <nav className='navbar navbar-icon-top navbar-expand-lg d-flex justify-content-evenly'>
{/* LOGO and DASHBOARD BUTTONS */}
        <div className='col-md-3 text-center'>
          {/* <button className='btn rounded-circle BgBtn' onClick={showSideBar}>
          <i class="customIcon iconColor bi bi-menu-button-wide-fill"></i>
          </button> */}
          <Link to="/home" className='navbar-brand'>
            <img className='logoImg ms-3' src="https://trello.com/1/cards/6405b0002b3347b1d350edcc/attachments/6406d9a785b025038862e9fe/previews/6406d9a885b025038862ea0a/download/Kodebook-1.png" alt="" />
          </Link>

          <Link className='p-2 btn'>
              <i class="bi bi-house-fill me-2"></i>
              <span className='linkName'>Home</span>
          </Link>
        </div>
{/* SEARCH BAR */}
        <div className='col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
        <form className="me-3">
          <div className="input-group rounded">
            <input type="search" className="form-control rounded border-0" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
              <i className="bi bi-search"></i>
            </span>
          </div>
        </form>
        </div>
{/* MENU ICONS */}
        <div className='d-flex align-items-center col-md-3 mb-2 mb-md-0'>
            <div className=' d-flex justify-content-evenly w-75'>
              {/* Notfication */}
                <button className='btn rounded-circle position-relative mt-1'>
                  <i className='customIcon bi bi-bell-fill'></i>
                    <span className='position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger'>
                      99
                    <span class="visually-hidden">Notifcation</span>
                  </span>
                </button>
                
            {/* Messages */}
                <button className='btn rounded-circle position-relative mt-1'>
                  <i className="customIcon bi bi-chat-left-text-fill"> </i>
                  <span className='position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger'>
                      99
                    <span class="visually-hidden">Notifcation</span>
                  </span>
                </button> 

            {/* ProfileBtn */}
            <div className='dropdown mt-1'>
              <button class="btn rounded-circle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="customIcon bi bi-person-circle"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <hr />
                <li className='d-flex justify-content-center'>
                <Link className='btn'  onClick={() => signOut()}>
                Logout
                </Link>
                 
                 
                  </li>
              </ul>
            </div>
      

            </div>
        </div>
      </nav>

        {/* sidebar Mapping with Toggler */}
          {/* <div className={`nav-menu ${sideBar ? 'active' : ''} customShadow`}>
              <ul className='nav-menu-items'>
              <h3 className='mt-3 mb-4'>Dashboard</h3>
              <hr />
                {SideBarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon} <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
          </div> */}

    </div>   
         
    
  )
}

export default Nav;
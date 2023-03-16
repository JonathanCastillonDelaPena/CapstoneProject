import React, { useState, useEffect } from 'react';
import '../../assets/style/global.css'
import { SideBarData } from './SideBar';
import { Link } from 'react-router-dom';
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
      <div className='d-flex flex-wrap sticky-top align-items-center justify-content-center justify-content-md-between px-5 border-bottom '>
        <div className='d-flex align-items-center col-md-3 mb-2 mb-md-0'>
        {/* Logo and Button/Link of SideNav */}
            <div className=' d-flex justify-content-evenly w-75'>
              <button className='btn customBtnPrimary'>
                <i className="customIcon bi bi-person-circle" onClick={showSideBar}></i>
                
                </button>

                <span class="position-relative">
                  <i class="customIcon bi bi-bell-fill"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span class="visually-hidden">unread notifications</span>
                    </span>
                </span>
              {/* <button className='btn hidden-arrow'><i className="customIcon bi bi-bell-fill">
              <span class="badge rounded-pill badge-notification bg-danger">1</span>
                </i></button> */}
              
              <button className='btn'><i class="customIcon bi bi-chat-left-text-fill"></i></button> 
            </div>
        </div>
        <div className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
          <form className="me-3">
            <div class="input-group rounded">
              <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
              <span class="input-group-text border-0" id="search-addon">
              <i class="bi bi-search"></i>
              </span>
            </div>
          </form>
        </div>
        <div className='col-md-3 text-center'>
          <Link to="/home" className='navbar-brand ms-3'>
            <img className='logoImg ms-3' src="https://trello.com/1/cards/6405b0002b3347b1d350edcc/attachments/6406d9a785b025038862e9fe/previews/6406d9a885b025038862ea0a/download/Kodebook-1.png" alt="" />
          </Link>
        </div>
      </div>

        {/* sidebar Mapping with Toggler */}
          <div className={`nav-menu ${sideBar ? 'active' : ''} customShadow`}>
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
          </div>
    </div>   
         
    
  )
}

export default Nav;
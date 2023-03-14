import React, { useState, useEffect } from 'react';
import '../../assets/style/global.scss';
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
    <div>
      <div className='d-flex flex-wrap sticky-top align-items-center justify-content-center justify-content-md-between px-5 border-bottom '>
        <div className='d-flex align-items-center col-md-3 mb-2 mb-md-0'>
        {/* Logo and Button/Link of SideNav */}
          <Link to="#" className='menu-bars'>
             <i className="bi bi-list custom-text-primary" onClick={showSideBar}></i>
          </Link>
          <Link to="/home" className='navbar-brand ms-3'>
            <img className='logoImg ms-3' src="https://trello.com/1/cards/6405b0002b3347b1d350edcc/attachments/6406d9a785b025038862e9fe/previews/6406d9a885b025038862ea0a/download/Kodebook-1.png" alt="" />
          </Link>
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
                  <i className="customIconSize bi bi-bell-fill"></i>
                  <i className="customIconSize bi bi-person-circle mx-3"></i>
        </div>
      </div>

        {/* sidebar Mapping with Toggler */}
          <div className={`nav-menu ${sideBar ? 'active' : ''} customShadow`}>
              <ul className='nav-menu-items'>
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
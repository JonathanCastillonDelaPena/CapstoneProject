<div>
        <nav className='custom-nav navbar-expand-lg navbar d-flex customShadow'>
            <div className='container-fluid'> 
                {/* Logo and Button/Link of SideNav */}
                  <Link to="#" className='menu-bars'>
                      <i className="bi bi-list custom-text-primary" onClick={showSideBar}></i>
                  </Link>
                  <Link to="/home" className='navbar-brand ms-3'>
                      <img className='logoImg ms-3' src="https://trello.com/1/cards/6405b0002b3347b1d350edcc/attachments/6406d9a785b025038862e9fe/previews/6406d9a885b025038862ea0a/download/Kodebook-1.png" alt="" />
                  </Link>
                {/* form */}
                <div className='container d-flex justify-content-center'>
                  <form className="me-3 form-control">
                    <div class="input-group rounded">
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <span class="input-group-text border-0" id="search-addon">
                        <i class="bi bi-search"></i>
                        </span>
                    </div>
                  </form>
                </div>
                {/* ICONS */}
                <div className=''>
                  <i className="bi bi-bell-fill"></i>
                  <i className="bi bi-person-circle mx-3"></i>
                </div>
            </div>
        </nav>
        
        {/* sidebar Mapping */}
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
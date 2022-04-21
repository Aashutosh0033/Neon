import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img
                src="https://ik.imagekit.io/nmtrlmn4bwh/Neon_website/neon-logo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1649782575338"
                height="30"
                alt="NEON Logo"
                loading="lazy"
              />
            </Link>
            {/* <!-- Left links --> */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              {/* <!-- Dropdown --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link className="dropdown-item" to="/">T-Shirts</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">Trousers</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">Caps</Link>
                  </li>
                </ul>
              </li>
              {/* <!-- Dropdown --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Catagory
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <Link className="dropdown-item" to="/">Men</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">Women</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About us</Link>
              </li>
            </ul>
            {/* <!-- Left links --> */}
            <form className="d-flex input-group w-auto mx-3">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </form>
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div className="d-flex align-items-center">
            
            {/* <!-- Icon --> */}
            <Link className="text-reset me-3" to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>

            {/* <!-- Notifications --> */}
            {/* <div className="dropdown">
              <Link
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                to="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">1</span>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">Some news</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">Another news</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">Something else here</Link>
                </li>
              </ul>
            </div> */}
            {/* <!-- Avatar --> */}
            <div className="dropdown">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="/"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="/account">My profile</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">Settings</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </div>
  )
}

export default Header
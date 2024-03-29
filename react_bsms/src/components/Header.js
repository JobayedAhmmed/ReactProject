import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <a href="index.html">
              <img src="assets/images/logo.png" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <h1 className="call_text">Call Us : +01 1234567890</h1>
            </form>
            <div className="search_icon">
              <ul>
                <li>
                  <a href="#">
                    <img src="assets/images/search-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="http://localhost:8080/users/signin">LOGIN</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <div className="navbar-logo">
          <Link to="/">Your Logo</Link>
        </div> */}
        <ul className="navbar-links">
          <li>
            {/* <Link to="/" className="navbar-link" > */}
              Appointy
            {/* </Link> */}
          </li>
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/addServices" className="navbar-link">
              Add sevices
            </Link>
          </li>
          <li>
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

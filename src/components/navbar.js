// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {isLogin} from "../utils/localStorage"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="navbar-links" style={{color : "lightblue", fontSize : 18}}>
          {/* <li>
            <div className="navbar-link">
              <Link to="/"> <img src="https://tse3.mm.bing.net/th?id=OIP.dFgAsRE8oyw3JtUO-k89WQHaB2&pid=Api&P=0&h=180"  width={180} height={60}/></Link>
            </div>
          </li> */}

          <li style={{color : "lightblue", fontSize : 20}}>
            {/* <Link to="/" className="navbar-link" > */}
              Appointy
            {/* </Link> */}
          </li>
          <li></li>
          <li></li>
          
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          {isLogin === null && <li>
            <Link to="/addServices" className="navbar-link">
              Add sevices
            </Link>
          </li>}
          <li>
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </li>
          { isLogin !== null && <li>
            <Link to="/login" className="navbar-link">
              Login
            </Link>
          </li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

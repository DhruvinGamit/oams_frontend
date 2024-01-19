// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { isLogin } from "../utils/localStorage";

const Navbar = () => {
  const [render, setRender] = useState("");

  const re_render = (e) => {
    console.log(window.localStorage.getItem("LoginToken"));
    setRender("");
    console.log("render" , render);
  };

  // const LoginToken = () => {
  //   setRender(window.localStorage.getItem("LoginToken"));
  //   console.log(render);
  // };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul
          className="navbar-links"
          style={{ color: "lightblue", fontSize: 18 }}
        >
          {/* <li>
            <div className="navbar-link">
              <Link to="/"> <img src="https://tse3.mm.bing.net/th?id=OIP.dFgAsRE8oyw3JtUO-k89WQHaB2&pid=Api&P=0&h=180"  width={180} height={60}/></Link>
            </div>
          </li> */}
          <li>
            <Link
              to="/"
              className="navbar-link"
              style={{ color: "lightblue", fontSize: 20 }}
            >
              Appointy
            </Link>
          </li>
          <li></li>
          <li>
            <Link to="/home" className="navbar-link">
              Home
            </Link>
          </li>
          {isLogin.length > 0 && (
            <li>
              <Link to="/addServices" className="navbar-link">
                Add sevices
              </Link>
            </li>
          )}
          <li>
            <Link to="/register" className="navbar-link">
              Register
            </Link>
          </li>
          {isLogin.length === 0 && (
            <li>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
          )}
          <li>
              <Link to="/service-appointments" className="navbar-link">
              service-appointments
              </Link>
            </li>
            <li>
              <Link to="/requested-services" className="navbar-link">
              requested-services
              </Link>
            </li>
          <li></li>
          <li></li> <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li>
            <button onClick={re_render}> re-render </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// Navbar.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { isLogin, logout } from "../utils/localStorage";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
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
          {window.localStorage.getItem("UserId") && (
            <div>
              {window.localStorage.getItem("IsProvider") == true && (
                <li>
                  <Link to="/addServices" className="navbar-link">
                    Add sevices
                  </Link>
                </li>
              )}
            </div>
          )}
          {!window.localStorage.getItem("UserId") && (
            <li>
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </li>
          )}
          {!window.localStorage.getItem("UserId") && (
            <li>
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
          )}
          {window.localStorage.getItem("UserId") && (
            <div>
              {window.localStorage.getItem("IsProvider") == true && (
                <li>
                  <Link to="/service-appointments" className="navbar-link">
                    service-appointments
                  </Link>
                </li>
              )}
            </div>
          )}
          {window.localStorage.getItem("UserId") && (
            <li>
              <Link to="/requested-services" className="navbar-link">
                requested-services
              </Link>
            </li>
          )}

          {window.localStorage.getItem("UserId") != null && (
            <li className="logout-button" style={{ marginLeft: 800 }}>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// // Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Navbar.css";
// import { isLogin, logout, getUserData } from "../utils/localStorage";

// const Navbar = () => {
//   const userData = getUserData() || {}; // Provide a default empty object
//   console.log(userData)

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <ul className="navbar-links" style={{ color: "lightblue", fontSize: 18 }}>
//           <li>
//             <Link to="/" className="navbar-link" style={{ color: "lightblue", fontSize: 20 }}>
//               Appointy
//             </Link>
//           </li>
//           <li>
//             <Link to="/home" className="navbar-link">
//               Home
//             </Link>
//           </li>
//           {userData.isProvider != true && (
//             <li>
//               <Link to="/addServices" className="navbar-link">
//                 Add services
//               </Link>
//             </li>
//           )}
//           {!isLogin() && (
//             <>
//               <li>
//                 <Link to="/register" className="navbar-link">
//                   Register
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/login" className="navbar-link">
//                   Login
//                 </Link>
//               </li>
//             </>
//           )}
//           {isLogin() && (
//             <>
//               <li>
//                 <Link to="/service-appointments" className="navbar-link">
//                   Service Appointments
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/requested-services" className="navbar-link">
//                   Requested Services
//                 </Link>
//               </li>
//               <li className="logout-button">
//                 <button onClick={logout}>Logout</button>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

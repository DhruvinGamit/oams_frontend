
// // Navbar.js
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Navbar.css";
// import { logout } from "../utils/localStorage";

// const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   const userId = window.localStorage.getItem("UserId");
//   const isProvider = window.localStorage.getItem("IsProvider");

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
//           {userId && isProvider === "true" && (
//             <li>
//               <Link to="/addServices" className="navbar-link">
//                 Add services
//               </Link>
//             </li>
//           )}
//           {!userId && (
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
//           {userId && isProvider === "true" && (
//             <li>
//               <Link to="/service-appointments" className="navbar-link">
//                 Service Appointments
//               </Link>
//             </li>
//           )}
//           {userId && (
//             <li>
//               <Link to="/requested-services" className="navbar-link">
//                 Requested Services
//               </Link>
//             </li>
//           )}
          
//           {userId && (
//             <li className="logout-button" style={{ marginLeft: 800 }}>
//               <button onClick={handleLogout}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../utils/localStorage";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const userId = window.localStorage.getItem("UserId");
  const isProvider = window.localStorage.getItem("IsProvider");
  const userEmail = window.localStorage.getItem("UserEmail"); 
  const formattedEmail = userEmail ? userEmail.split('@')[0] : '';

  return (
    <nav style={{ backgroundColor: "#333", color: "#fff", padding: "10px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }} className="navbar-container">
        <ul style={{ listStyleType: "none", display: "flex", alignItems: "center" }} className="navbar-links">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#3ec8d8", marginRight: "20px" }} className="navbar-link">
              Appointy
            </Link>
          </li>
          <li>
            <Link to="/home" style={{ textDecoration: "none", color: "#fff", marginRight: "20px" }} className="navbar-link">
              Home
            </Link>
          </li>
          {userId && isProvider === "true" && (
            <li>
              <Link to="/addServices" style={{ textDecoration: "none", color: "#fff", marginRight: "20px" }} className="navbar-link">
                Add services
              </Link>
            </li>
          )}
          {!userId && (
            <>
              <li>
                <Link to="/register" style={{ textDecoration: "none", color: "#fff", marginRight: "20px" }} className="navbar-link">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" style={{ textDecoration: "none", color: "#fff", marginRight: "20px" }} className="navbar-link">
                  Login
                </Link>
              </li>
            </>
          )}
          {userId && isProvider === "true" && (
            <li>
              <Link to="/service-appointments" style={{ textDecoration: "none", color: "#fff", marginRight: "20px" }} className="navbar-link">
                Service Appointments
              </Link>
            </li>
          )}
          {userId && (
            <li>
              <Link to="/requested-services" style={{ textDecoration: "none", color: "#fff", marginRight: "20px" }} className="navbar-link">
                Requested Services
              </Link>
            </li>
          )}
        </ul>
        <ul style={{ listStyleType: "none", display: "flex", alignItems: "center" }} className="navbar-links">
          {userId && (
            <li className="logout-button">
              {/* Display user's email here */}
              <span style={{ marginRight: "20px" }}>Welcome, {formattedEmail}</span>
              <button style={{ backgroundColor: "red", border: "none", color: "#fff", cursor: "pointer", padding: "5px 10px", borderRadius: "5px" }} onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
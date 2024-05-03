import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    navigate("/home");
  };

  return (
    <div className="admin-container">
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <ul className="navbar-links">
          <Link  to="/categories" style={{ backgroundColor: "blue", border: "none", color: "#fff", cursor: "pointer", padding: "5px 10px", borderRadius: "50px" }} >
            Add Category
          </Link>
          <button style={{ backgroundColor: "blue", border: "none", color: "#fff", cursor: "pointer", padding: "5px 10px", borderRadius: "50px" }}>Service Providers</button>

        </ul>
        
        <div style={{ display: "flex", alignItems: "center" }}>
          <b className="navbar-item welcome-admin" style={{ marginRight: "10px" }}>
            Welcome, Admin
          </b>
          <button style={{ backgroundColor: "red", border: "none", color: "#fff", cursor: "pointer", padding: "5px 10px", borderRadius: "50px" }} onClick={handleLogout}>Logout</button>
        </div>
      </nav>
      <div className="user-table-container">
        <table className="user-table">
          {/* Your table content here */}
        </table>
      </div>
    </div>
  );
};

export default Admin;

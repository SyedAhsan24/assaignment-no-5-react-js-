import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="Main">
      <div className="nav">
        <h1>Syed Ashan Nawab</h1>
      </div>
      <div className="flex">
        <center>
          {" "}
          <h1>Welcome to DashBoard</h1>
        </center>
        <button className="button" onClick={handleLogout}>
          Logout{" "}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

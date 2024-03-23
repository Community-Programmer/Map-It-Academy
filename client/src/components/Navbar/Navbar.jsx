import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>
          <div class="dropdown">
            Courses
            <div class="dropdown-content">
              <a href="#">AWS</a>
              <a href="#">Snowflake</a>
              <a href="#">IICS</a>
              <a href="#">DBT</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            Programs
            <div class="dropdown-content">
              <a href="#">Cloud Data Warehouse</a>
              <a href="#">Data Integration</a>
              <a href="#">Data Migration</a>
            </div>
          </div>
        </li>
      </ul>
      <button className="button nv-button">Login</button>
    </div>
  );
};

export default Navbar;

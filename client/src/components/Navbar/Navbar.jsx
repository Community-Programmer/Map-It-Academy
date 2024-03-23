import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <NavLink to='/'><img src={logo} alt="" className="logo" /></NavLink>
      <ul>
        <NavLink to='/'><li>Home</li></NavLink>
        <li>
          <div class="dropdown">
            Courses
            <div class="dropdown-content">
              <NavLink href="#">AWS</NavLink>
              <NavLink href="#">Snowflake</NavLink>
              <NavLink href="#">IICS</NavLink>
              <NavLink href="#">DBT</NavLink>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            Programs
            <div class="dropdown-content">
              <NavLink href="#">Cloud Data Warehouse</NavLink>
              <NavLink href="#">Data Integration</NavLink>
              <NavLink href="#">Data Migration</NavLink>
            </div>
          </div>
        </li>
      </ul>
      <button onClick={()=>navigate('/login')} className="button nv-button">Login</button>
      <button onClick={()=>navigate('/signup')} className="button nv-button">Sign up</button>
    </div>
  );
};

export default Navbar;

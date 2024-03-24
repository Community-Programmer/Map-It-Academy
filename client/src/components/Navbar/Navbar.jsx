import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { logoutUser } from "../../store/authSlice";




const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {

    dispatch(logoutUser());

  };

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="" className="logo" />
      </NavLink>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
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
      {!auth.isLogin ? (
        <>
          <button
            onClick={() => navigate("/login")}
            className="button nv-button"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="button nv-button"
          >
            Sign up
          </button>
        </>
      ) : (
        <div>
          <FaRegUserCircle/> 
          <div class="dropdown">
           {auth.username}
            <div class="dropdown-content">
              <NavLink to="/profile"><FaRegUser/> My profile</NavLink>
              <NavLink onClick={handleLogout}><MdLogout/> Logout</NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

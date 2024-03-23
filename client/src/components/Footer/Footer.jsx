import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <img src={logo} alt="" className="logo" />
        <div>
          <span>Courses</span>
          <ul>
            <li>AWS</li>
            <li>Snowflake</li>
            <li>IICS</li>
            <li>DBT</li>
          </ul>
        </div>
        <div>
          <span>Programs</span>
          <ul>
            <li>Cloud Data Warehouse</li>
            <li>Data Integration</li>
            <li>Data Migration</li>
          </ul>
        </div>
      </div>
      <div className="C-Footer">
        <hr />© 2024 mapitacademy | All rights reserved.
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Outlet/>
      <Footer />
    </>
  );
};

export default Layout;
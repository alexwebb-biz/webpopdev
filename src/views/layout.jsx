import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "../components/navbar.js";
import Footer from "../components/footer.js";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
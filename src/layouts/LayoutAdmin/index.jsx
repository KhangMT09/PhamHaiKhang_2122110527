import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const LayoutAdmin = () => {
  return (
    <div>
      <Header />
      <section className="maincontent m-3">x
      </section>
      
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutAdmin;
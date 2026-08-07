import React from "react";
import { useLocation } from "react-router-dom";

const NavBarTitle = ({ title, hideOnDashboard }) => {
 
   const { pathname } = useLocation();

  if (hideOnDashboard && pathname === "/user/dashboard") {
    return null;
  }
  return <h1 className="text-lg md:text-2xl font-bold text-black">{title}</h1>;
};

export default NavBarTitle;

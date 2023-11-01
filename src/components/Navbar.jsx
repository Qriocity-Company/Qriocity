import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Get the current route location

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isRouteActive = (path) => {
    // Check if the current route matches the given path
    return location.pathname === path ? "font-semibold text-orange-400" : "";
   
  };

  return (
    <div className="flex flex-row justify-between max-w-[1440px] h-[66px] w-full items-center px-8 md:px-[64px] bg-[#000]">
      <Link to="/">
        <img src={logo} alt="company logo" />
      </Link>
      <div className="hidden md:flex flex-row gap-6 font-RedHat text-white">
        <Link to="/" className={isRouteActive("/")}>
          Home
        </Link>
        <Link to="/courses" className={isRouteActive("/courses")}>
          Our Courses
        </Link>
        <Link to="/about" className={isRouteActive("/about")}>
          About Us
        </Link>
        <Link to="/projects" className={isRouteActive("/projects")}>
          Projects
        </Link>
        <Link to="/contact" className={isRouteActive("/contact")}>
          Contact Us
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        {showMenu ? (
          <HiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <HiMenu
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      {showMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full z-[999] backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-center text-[#F4511E] font-semibold text-[24px] font-Raleway">
          <Link to="/" className={isRouteActive("/")} onClick={()=>{toggleMenu()}}>
            Home
          </Link>
          <Link to="/courses" className={isRouteActive("/courses")} onClick={()=>{toggleMenu()}}>
            Our Courses
          </Link>
          <Link to="/about" className={isRouteActive("/about")} onClick={()=>{toggleMenu()}}>
            About Us
          </Link>
          <Link to="/projects" className={isRouteActive("/projects")} onClick={()=>{toggleMenu()}}>
            Projects
          </Link>
          <Link to="/contact" className={isRouteActive("/contact")} onClick={()=>{toggleMenu()}}>
            Contact Us
          </Link>
          <HiX
            className="text-[#F4511E] text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      )}
    </div>
  );
};

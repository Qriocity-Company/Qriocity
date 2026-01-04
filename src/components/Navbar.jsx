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
    if (path.includes("?")) {
      return location.pathname + location.search === path
        ? "font-semibold text-orange-400"
        : "";
    }
    return location.pathname === path ? "font-semibold text-orange-400" : "";
  };

  return (
    <header className="fixed top-0 left-0 w-screen z-[50] bg-[#0000006c] backdrop-blur-[0.5rem] ">
      <div className="flex flex-row justify-between max-w-[1440px] h-[66px] w-full items-center px-4 md:px-[20px] ">
        <Link to="/">
          <img src={logo} alt="company logo" />
        </Link>
        <div className="hidden md:flex flex-row gap-5 font-RedHat text-white">
          <Link to="/" className={isRouteActive("/")}>
            Home
          </Link>
          {/* <Link to="/about" className={isRouteActive("/about")}>
            About Us
          </Link> */}
          <Link to="/courses" className={isRouteActive("/courses")}>
            Our Courses
          </Link>
          <Link to="/projects" className={isRouteActive("/projects")}>
            Projects
          </Link>
          <Link to="/contact" className={isRouteActive("/contact")}>
            Contact Us
          </Link>
          <Link to="/consultations" className={isRouteActive("/consultations")}>
            Project Consultations
          </Link>
          <Link
            to="/projectWorkshop"
            className={isRouteActive("/projectWorkshop")}
          >
            Project Workshop
          </Link>
          <Link to="/bookacall?city=googleads" className={isRouteActive("/bookacall?city=googleads")}>
            Final Year Projects
          </Link>
          {/* <Link to="/Bootcamp" className={isRouteActive("/Bootcamp")}>
            Bootcamp
          </Link> */}
          {/* <Link
            to="/assignments-service"
            className={isRouteActive("/assignments-service")}
          >
            Assignments/ Courseworks
          </Link> */}
          <Link to="/phd-projects" className={isRouteActive("/phd-projects")}>
            Phd-projects
          </Link>
          {/* <Link
            to="/hardware-projects"
            className={isRouteActive("/hardware-projects")}
          >
            Hardware-projects
          </Link> */}
        </div>
        <div className="md:hidden flex items-center">
          {showMenu ? (
            ""
          ) : (
            <HiMenu
              className="text-white text-2xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        {showMenu && (
          <div className="md:hidden fixed top-0 left-0 w-[80%] font-bold h-screen z-[50] backdrop-blur-[0.8rem] flex flex-col gap-10 py-10 items-center text-white bg-[#f4691e] text-[20px] font-Raleway overflow-auto">
            <Link
              to="/"
              className={isRouteActive("/")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              className={isRouteActive("/about")}
              onClick={() => {
                toggleMenu();
              }}
            >
              About Us
            </Link> */}
            <Link
              to="/courses"
              className={isRouteActive("/courses")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Our Courses
            </Link>

            <Link
              to="/projects"
              className={isRouteActive("/projects")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={isRouteActive("/contact")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Contact Us
            </Link>

            <Link
              to="/consultations"
              className={isRouteActive("/consultations")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Project Consultations
            </Link>

            <Link
              to="/projectWorkshop"
              className={isRouteActive("/projectWorkshop")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Project Workshop
            </Link>
            <Link
              to="/bookacall?city=googleads"
              className={isRouteActive("/bookacall?city=googleads")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Final Year Projects
            </Link>
            <Link
              to="/Bootcamp"
              className={isRouteActive("/Bootcamp")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Bootcamp
            </Link>
            <Link
              to="/assignments-service"
              className={isRouteActive("/assignments-service")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Assignments/Courseworks
            </Link>
            <Link
              to="/phd-projects"
              className={isRouteActive("/phd-projects")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Phd-projects
            </Link>

            <Link
              to="/hardware-projects"
              className={isRouteActive("/hardware-projects")}
              onClick={() => {
                toggleMenu();
              }}
            >
              Hardware-projects
            </Link>

            <HiX
              className="text-[white] text-4xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        )}
      </div>
    </header>
  );
};

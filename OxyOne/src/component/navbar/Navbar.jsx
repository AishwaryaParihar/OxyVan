import React, { useState } from "react";
import logo from "../../assets/oxyVan-logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="white-bg dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
        {" "}
        {/* Added px-4 for padding */}
        <a href="" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <NavLink
            to="/donate"
            type="button"
            className="md:block text-white bg-second hover:bg-second-hover focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-9 mr-11 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Donate 
            
          </NavLink>
          {/* <NavLink
            to="/certificate"
            type="button"
            className="md:block text-white bg-second hover:bg-second-hover focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-9 mr-11 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Certified
          </NavLink> */}
          <button
            onClick={toggleMenu}
            className="flex items-center  text-gray-500 rounded-lg focus:outline-none  ml-auto md:hidden" // Added ml-auto for alignment
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between  ${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-2 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700  ">
            <li>
              <NavLink
                to=""
                className="block py-2 px-1 text-white bg-primary rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500 custom-nav"
                aria-current="page"
              >
                Home
     
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 custom-nav"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/research"
                className="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 custom-nav"
              >
                Trees Role
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 custom-nav"
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 custom-nav"
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="block py-2 px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 custom-nav"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

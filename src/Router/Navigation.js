import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
    const menuItems = <>
            <li className="menuHover"><HashLink smooth={true} state={'sdf'} to="/#hero">HOME</HashLink></li>
            <li className="menuHover"><HashLink smooth={true} to="/#about">ABOUT</HashLink></li>
            <li className="menuHover"><HashLink smooth={true} to="/#project">PROJECTS</HashLink></li>
            <li className="menuHover"><HashLink  smooth={true} to="/#contact">CONTACT</HashLink></li>
           <li className="menuHover"><Link to="/blog" >BLOG</Link></li>
          </>
  return (
    <div className="navbar bg-base-100 shadow z-10 sticky top-0">
      <div className="navbar flex justify-between">
      <img className="w-1/3 lg:w-32 hidden lg:block" src="https://i.ibb.co/CB8syp7/jharna-logo.png" alt="jharna-portfolio" />
        <div className="dropdown">
          <label tabIndex={0} className="btn  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img className="w-1/3 lg:w-32 lg:hidden" src="https://i.ibb.co/CB8syp7/jharna-logo.png" alt="jharna-portfolio" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        {menuItems}
        </ul>
      </div>
      
    </div>
  );
};

export default Navigation;

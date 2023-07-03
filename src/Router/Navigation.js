import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar bg-[#223438] shadow z-50 sticky top-0">
      <div className="navbar flex justify-between">
        <a href="/" alt="logo">
        <img
          className="p-0 m-0 max-w-[100%] w-20 hidden lg:block"
          src="https://i.ibb.co/2n3LWZF/JS-2.png"
          alt="jharna-portfolio"
        />
        </a>
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-black  lg:hidden">
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
            className="bg-[#2b4449]  menu menu-compact dropdown-content mt-3 p-3 shadow  w-52"
          >
            <nav className="menu-4">
              <NavLink className="nav-content current" to="/">
                <span data-hover="Home">Home</span>
              </NavLink>
              <NavLink className="nav-content" to="/about">
                <span data-hover="About">About</span>
              </NavLink>
              <NavLink className="nav-content" to="/project">
                <span data-hover="Projects">Projects</span>
              </NavLink>
              <NavLink className="nav-content" to="/blog">
                <span data-hover="Blogs">Blogs</span>
              </NavLink>
            </nav>
          </ul>
        </div>
        <img
          className="max-w-[100%] w-16 lg:hidden"
          src="https://i.ibb.co/2n3LWZF/JS-2.png"
          alt="jharna-portfolio"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <nav className="menu-4">
            <NavLink className="nav-content current" to="/">
              <span data-hover="Home">Home</span>
            </NavLink>
            <NavLink className="nav-content" to="/about">
              <span data-hover="About">About</span>
            </NavLink>
            <NavLink className="nav-content" to="/project">
              <span data-hover="Projects">Projects</span>
            </NavLink>
            <NavLink className="nav-content" to="/blog">
              <span data-hover="Blogs">Blogs</span>
            </NavLink>
          </nav>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

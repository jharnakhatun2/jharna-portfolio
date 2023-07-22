import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar bg-[#000] shadow z-50 sticky top-0">
      <div className="relative w-full lg:container mx-auto px-6 lg:px-20">
        <div className="navbar flex justify-between">
          <a href="/" alt="logo" className="w-[17%] md:w-[10%]">
            <img
              className="p-0 m-0 max-w-[100%] w-full"
              src="https://i.ibb.co/2n3LWZF/JS-2.png"
              alt="jharna-portfolio"
            />
          </a>
          {/* Mobile menu icon */}
          <div className="dropdown">
            {!isMenuOpen ? (
              <AlignJustify
                onClick={() => setIsMenuOpen(true)}
                size={36}
                className="cursor-pointer text-background bg-primary rounded-full p-1 lg:hidden"
              />
            ) : (
              <X
                onClick={() => setIsMenuOpen(false)}
                size={36}
                className="cursor-pointer text-primary"
              />
            )}
          </div>
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
      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </div>
  );
};

export default Navigation;
const NavContentMob = ({ setIsMenuOpen }) => {
  return (
    <>
      <ul className="absolute top-16 left-0 bg-[#2b2a2a]  mt-3 p-3 shadow  w-full">
        <nav
          onClick={() => setIsMenuOpen(false)}
          className="menu-4 flex flex-col"
        >
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
    </>
  );
};

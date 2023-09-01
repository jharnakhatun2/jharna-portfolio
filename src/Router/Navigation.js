import { AlignJustify, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsTwitter,
} from "react-icons/bs";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar bg-[#33065b] sticky top-0 z-50 ${
        scroll > 7 * 16 ? "backdrop-blur-sm bg-[#37065daf]" : ""
      }`}
    >
      <div className="relative w-full mx-auto px-8 md:px-20 justify-between">
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/jharna-khatun2/">
            <BsLinkedin className="social-icon hover:text-[#f33bea] text-base-300 text-xl"></BsLinkedin>
          </a>
          <div className="text-gray-500">|</div>
          <a href="https://github.com/Jharna203">
            <BsGithub className="social-icon hover:text-[#f33bea] text-base-300 text-xl"></BsGithub>
          </a>
          <div className="text-gray-500">|</div>
          <a href="https://www.facebook.com/jharnakhatun2/">
            <BsFacebook className="social-icon hover:text-[#f33bea] text-base-300 text-xl"></BsFacebook>
          </a>
          <div className="text-gray-500">|</div>
          <a href="https://jharnakhatun.medium.com/">
            <BsMedium className="social-icon hover:text-[#f33bea] text-base-300 text-xl"></BsMedium>
          </a>
          <div className="text-gray-500">|</div>
          <a href="https://twitter.com/Jharna203">
            <BsTwitter className="social-icon hover:text-[#f33bea] text-base-300 text-xl"></BsTwitter>
          </a>
        </div>
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

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <nav className="menu-4">
              <NavLink
                className={`nav-content ${
                  location.pathname === "/" ? "current" : ""
                }`}
                to="/"
              >
                <span data-hover="Home">Home</span>
              </NavLink>
              <NavLink
                className={`nav-content ${
                  location.pathname === "/about" ? "current" : ""
                }`}
                to="/about"
              >
                <span data-hover="About">About</span>
              </NavLink>
              <NavLink
                className={`nav-content ${
                  location.pathname === "/project" ? "current" : ""
                }`}
                to="/project"
              >
                <span data-hover="Projects">Projects</span>
              </NavLink>
              <NavLink
                className={`nav-content ${
                  location.pathname === "/blog" ? "current" : ""
                }`}
                to="/blog"
              >
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
  const location = useLocation();
  return (
    <>
      <ul className="absolute top-16 left-0 bg-[#33065b] p-3 shadow  w-full leading-loose">
        <nav
          onClick={() => setIsMenuOpen(false)}
          className="menu-4 flex flex-col"
        >
          <NavLink
            className={`nav-content ${
              location.pathname === "/" ? "current" : ""
            }`}
            to="/"
          >
            <span data-hover="Home">Home</span>
          </NavLink>
          <NavLink
            className={`nav-content ${
              location.pathname === "/about" ? "current" : ""
            }`}
            to="/about"
          >
            <span data-hover="About">About</span>
          </NavLink>
          <NavLink
            className={`nav-content ${
              location.pathname === "/project" ? "current" : ""
            }`}
            to="/project"
          >
            <span data-hover="Projects">Projects</span>
          </NavLink>
          <NavLink
            className={`nav-content ${
              location.pathname === "/blog" ? "current" : ""
            }`}
            to="/blog"
          >
            <span data-hover="Blogs">Blogs</span>
          </NavLink>
        </nav>
      </ul>
    </>
  );
};

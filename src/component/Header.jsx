import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const navItems = (
    <>
      <li>
        <ScrollLink to="#" smooth={true} duration={1000}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="portfolio" smooth={true} duration={1000}>
          Portfolio
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="aboutMe" smooth={true} duration={1000}>
          About Me
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="skills" smooth={true} duration={1000}>
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="projects" smooth={true} duration={1000}>
          Project
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={1000}>
          Contact
        </ScrollLink>
      </li>
      <li>
        <a className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded hover:bg-white group">
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-lime-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="flex items-center gap-2 justify-center relative w-full text-left text-white transition-colors duration-1000 ease-in-out group-hover:text-hidden group-hover:text-white">
            Download Resume{" "}
            <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-700 -translate-x-full group-hover:translate-x-0 ease">
              <FaDownload/>
            </span>
          </span>
        </a>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar">
        <div className="navbar-start">
          <Link>
            <h2 className="font-[Cinzel] text-6xl text-lime-400 underline">
              M
            </h2>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1 text-lg font-[cinzel]">
            {navItems}
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-white ml-36" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 border shadow-2xl text-white card ease-in bg-blue-500 rounded-box w-52"
          >
            <p>{navItems}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

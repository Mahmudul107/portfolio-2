import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const navItems = (
    <>
      <li>
        <Link className={({ isActive }) => (isActive ? "active" : "default")}>
          Home
        </Link>
      </li>
      <li>
        <Link className={({ isActive }) => (isActive ? "active" : "default")}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link className={({ isActive }) => (isActive ? "active" : "default")}>
          About Me
        </Link>
      </li>
      <li>
        <Link className={({ isActive }) => (isActive ? "active" : "default")}>
          Skills
        </Link>
      </li>
      <li>
        <Link className={({ isActive }) => (isActive ? "active" : "default")}>
          Contact
        </Link>
      </li>
      <li>
        <Link className={({ isActive }) => (isActive ? "active" : "default")}>
          Blogs
        </Link>
      </li>
      <li>
        <Link className={({ isActive }) => (isActive ? "active" : "default")}>
          Download Resume
        </Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar">
        <div className="navbar-start">
          <Link>
            <h2 className="font-[Cinzel] text-6xl text-lime-400">M</h2>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-white px-1 text-lg font-[cinzel]">
            {navItems}
          </ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-white ml-36"/>
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

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineBulb } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import pdf from "../../public/MERN Stack Developer resume of Mahmudul Islam.pdf";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const scrollLinkClass =
    "relative cursor-pointer transition text-white px-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-lime-400 after:transition-all after:duration-300 after:w-0 hover:after:w-full";

  const activeClass =
    "after:w-full after:bg-lime-400 text-lime-400 font-semibold";

  const navItems = (
    <>
      {["Portfolio", "About", "Skills", "Projects", "Contact"].map((item) => (
        <li key={item}>
          <ScrollLink
            to={item.toLowerCase().replace(" ", "")}
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            activeClass={activeClass}
            className={scrollLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </ScrollLink>
        </li>
      ))}

      <li>
        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>
          <span className={scrollLinkClass}>Blog</span>
        </Link>
      </li>

      <li>
        <a
          href={pdf}
          download
          className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all rounded-md bg-lime-600 hover:bg-white group"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white transition-transform duration-700 -translate-x-full group-hover:translate-x-0 ease">
            <FaDownload />
          </span>
          <span className="relative text-white group-hover:text-lime-600 transition-colors duration-300">
            Resume
          </span>
        </a>
      </li>
    </>
  );

  return (
    <header className="bg-gradient-to-r from-[#031b2c] via-[#030d50] to-[#022944] px-4 py-5 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-4xl font-[Cinzel] text-lime-400 underline">M</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 text-white text-lg font-[Cinzel]">
          <ul className="flex space-x-6">{navItems}</ul>
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-lime-400 transition"
            title="Toggle theme"
          >
            <AiOutlineBulb size={24} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-lime-400 transition"
            title="Toggle theme"
          >
            <AiOutlineBulb size={24} />
          </button>
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <AiOutlineClose size={26} className="text-white" />
            ) : (
              <AiOutlineMenu size={26} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden mt-4 flex flex-col space-y-4 items-center text-white text-lg font-[Cinzel] bg-[#070c2e] p-6 rounded-lg shadow-xl">
          {navItems}
        </ul>
      )}
    </header>
  );
};

export default Header;

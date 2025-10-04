// Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const sections = ["home", "skills", "projects", "contact"];

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-8 bg-black/95 backdrop-blur-sm text-gray-300 z-50 border-b border-slate-800">
      <h1 className="text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-signature">
        Saud
      </h1>

      {/* Navbar Links */}
      <ul className="hidden md:flex gap-4">
        {sections.map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-80} // يحسب ارتفاع Navbar
              className="relative px-4 py-2 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              <span className="relative z-10 capitalize">{section}</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50 cursor-pointer" onClick={handleClick}>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
   {nav && (
  <div className="absolute top-0 left-0 w-full h-screen bg-black backdrop-blur-md flex flex-col justify-center items-center">
    <ul className="flex flex-col items-center gap-8">
      {sections.map((section) => (
        <li key={section}>
          <Link
            to={section}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={handleClick}
            className="text-4xl font-bold text-gray-300 hover:text-white transition-all duration-300 capitalize"
          >
            {section}
          </Link>
        </li>
      ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

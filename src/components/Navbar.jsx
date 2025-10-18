import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo2.svg"
            alt="Arrow Point Tech Cont LLC"
            className="h-25"
          />
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-10 text-white text-base">
          <Link to="/">
            <li className="hover:text-[#00BFFF] transition cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/ourservices">
            <li className="hover:text-[#00BFFF] transition cursor-pointer">
              Our Services
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-[#00BFFF] transition cursor-pointer">
              About Us
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-[#00BFFF] transition cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>

        {/* Right: Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-white text-3xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-black/60 bg-opacity-90 text-white flex flex-col items-center space-y-4 py-6">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <span className="hover:text-[#00BFFF]">Home</span>
          </Link>
          <Link to="/ourservices" onClick={() => setIsOpen(false)}>
            <span className="hover:text-[#00BFFF]">Our Services</span>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <span className="hover:text-[#00BFFF]">About Us</span>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <span className="hover:text-[#00BFFF]">Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

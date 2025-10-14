import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png" // replace with your logo
            alt="Arrow Point Tech Cont LLC"
            className="h-25"
          />
        </div>

        {/* Center: Navigation Links */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-10 text-white text-base">
          <li className="hover:text-[#00BFFF] transition cursor-pointer">Home</li>
          <li className="hover:text-[#00BFFF] transition cursor-pointer">Our Services</li>
          <li className="hover:text-[#00BFFF] transition cursor-pointer">About Us</li>
          <li className="hover:text-[#00BFFF] transition cursor-pointer">Contact</li>
        </ul>

        {/* Right: Placeholder for spacing balance or future button */}
        <div className="w-20 md:w-24"></div>
      </div>
    </nav>
  );
};

export default Navbar;

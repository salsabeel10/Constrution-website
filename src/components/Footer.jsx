import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10">
        {/* Logo and Description */}
        <div>
          <img
            src="./logo-dark.svg"
            alt="Arrow Point Tech Cont. LLC"
            className="h-30 mb-4"
          />
          <p className="text-sm leading-relaxed">
            We provide complete contracting and maintenance solutions across
            Dubai, delivering reliable service, skilled workmanship, and
            long-lasting results for every project.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Electrical Works</li>
            <li>Plumbing</li>
            <li>Painting</li>
            <li>AC Maintenance</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>Interior Fit-Out</li>
            <li>Renovation</li>
            <li>Waterproofing</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-gray-700" />
              <a href="#" className="hover:text-orange-500 transition">
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter className="text-gray-700" />
              <a href="#" className="hover:text-orange-500 transition">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-gray-700" />
              <a href="#" className="hover:text-orange-500 transition">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© 2025 Arrow Point Tech Cont. LLC</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-orange-500">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-orange-500">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

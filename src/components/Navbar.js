import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-gray-800 text-3xl font-bold mr-2">🎓</div> {/* Logo */}
            <Link to="/" className="text-2xl font-extrabold text-gray-800">ShikshaPath</Link>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/pricing" className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">Pricing</Link>
            <Link to="/community" className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">Community</Link>
            <Link to="/About" className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">About</Link>
            <Link to="/resources" className="text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">Resources</Link>
          </div>

          {/* Login and Sign-In Buttons (Desktop) */}
          <div className="hidden md:flex space-x-4 ml-4">
            <Link to="/Login" className="bg-black text-white px-4 py-2 rounded-full shadow-lg text-lg font-medium hover:bg-gray-800 transition transform duration-300 ease-in-out hover:scale-105">
              Login
            </Link>
            <Link to="Signin" className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-lg font-medium hover:bg-blue-700 transition transform duration-300 ease-in-out hover:scale-105">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none hover:text-gray-600 transition duration-300 ease-in-out"
              aria-label="Open Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (shown when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg transition-transform transform duration-300 ease-in-out">
          <Link to="/pricing" className="block text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">Pricing</Link>
          <a href="/community" className="block text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">Community</a>
          <a href="/about" className="block text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">About</a>
          <a href="/resources" className="block text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out px-3 py-2 text-lg font-semibold">Resources</a>

          {/* Mobile Login and Sign-In Buttons */}
          <div className="mt-4">
            <button className="bg-black text-white px-4 py-2 w-full rounded-full shadow-lg text-lg font-medium hover:bg-gray-800 transition transform duration-300 ease-in-out hover:scale-105">
              Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 w-full mt-2 rounded-full shadow-lg text-lg font-medium hover:bg-blue-700 transition transform duration-300 ease-in-out hover:scale-105">
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Links Section */}
        <div className="flex justify-center space-x-8 mb-4">
          <Link to="/mission" className="hover:text-gray-900 transition duration-300 ease-in-out">Mission</Link>
          <Link to="/blog" className="hover:text-gray-900 transition duration-300 ease-in-out">Blog</Link>
          <Link to="/privacy#privacy" className="hover:text-gray-900 transition duration-300 ease-in-out font-bold">
  Privacy
</Link>
<Link to="/terms#terms" className="hover:text-gray-900 transition duration-300 ease-in-out">
  Terms
</Link>
          <Link to="/Help" className="hover:text-gray-900 transition duration-300 ease-in-out">Accessibility</Link>
          <Link to="/Help" className="hover:text-gray-900 transition duration-300 ease-in-out">Help Center</Link>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="#" className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out">
          <i class="fa-brands fa-facebook"></i>
          </Link>
          <Link to="#" className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out">
          <i class="fa-brands fa-instagram"></i>
          </Link>
          <Link to="#" className="text-gray-800 hover:text-gray-900 transition duration-300 ease-in-out">
          <i class="fa-brands fa-x-twitter"></i>
          </Link>
        </div>

        {/* Info Section */}
        <div className="text-center">
          <p className="text-sm text-gray-600">Contact Us: <Link to="mailto:hey@shikshapath.ai" className="text-gray-800 hover:text-gray-900">hey@shikshapath.ai</Link></p>
          <p className="text-sm text-gray-600 mt-1">Empowering Future Leaders Through Personalized Learning.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

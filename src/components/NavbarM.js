import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavbarM = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate(); // Add this line

  const handleLogOut = (e) => {
    e.preventDefault(); // Prevent default behavior
    localStorage.removeItem("authToken"); // Remove authToken from localStorage
    e.preventDefault();
    navigate('/'); // Redirect to the login page (or any desired page)
  }

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="text-4xl animate-bounce">🎓</div> {/* Increased logo size */}
          <Link to="/" className="text-4xl font-extrabold tracking-wider">Shikshaपथ</Link> {/* Increased text size */}
        </div>

        {/* Hamburger Menu Icon (for small screens) */}
        <button
          className="md:hidden block text-white hover:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 md:items-center`}
        >
          {/* AI Tutor */}
          <Link to="/aitutor"
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <i className="fas fa-chalkboard-teacher"></i>
            <span>AI Tutor</span>
          </Link>

          {/* Explore */}
          <Link
            to="/explore"
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <i className="fas fa-book-open"></i>
            <span>Explore</span>
          </Link>

          {/* Progress */}
          <Link
            to="/progress"
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <i className="fas fa-chart-bar"></i>
            <span>Progress</span>
          </Link>

          {/* Attendance */}
          <a
            href="/attendance"
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <i className="fas fa-user-graduate"></i>
            <span>Contests</span>
          </a>
        </nav>

        {/* Profile & Logout */}
        <div className="flex items-center space-x-8">
          <Link to="/Profile" className="relative">
            <button className="flex items-center space-x-2 hover:text-yellow-300 focus:outline-none">
              {/* Profile Icon with Centered FontAwesome */}
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <i className="fa-solid fa-user text-2xl"></i> {/* Increased icon size and centered it */}
              </div>
              <span className="text-lg">Profile</span>
            </button>
          </Link>
          <button 
           onClick={handleLogOut}
            className="flex items-center space-x-2 text-lg hover:text-yellow-300 transition-transform transform hover:scale-110"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span >Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarM;

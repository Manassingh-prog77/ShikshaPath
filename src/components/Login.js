import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Ensure this CSS file exists
import { Link , useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for login status
  const [error, setError] = useState(''); // State for error messages
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [rememberMe, setRememberMe] = useState(false); // State for remember me checkbox

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true); // Simulate successful login
      setError(''); // Clear any previous errors 
      if (rememberMe) {
        localStorage.setItem('authToken', data.authtoken); // Store auth token if "Remember me" is checked
      }
      setTimeout(()=>{
        navigate("/")
      },2000)
    } else {
      setError('Enter Valid Email ID and Password'); // Show error message
    }
  };

  const Balloon = () => {
    const balloonVariants = {
      initial: {
        y: 1000,
        opacity: 0,
      },
      animate: (i) => ({
        y: [1000, -200, -400], // Animate up to give a floating effect
        opacity: [0, 1, 1, 0],
        transition: {
          duration: 3,
          delay: i * 0.3, // Stagger balloons
          ease: 'easeInOut',
        },
      }),
    };

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}vw`, // Random horizontal position
              bottom: 0,
              width: '200px', // Increased width (doubled)
              height: '320px', // Increased height (doubled)
              backgroundImage: `url(${process.env.PUBLIC_URL}/balloon.png)`, // Use direct path
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'translateX(-50%)',
            }}
            variants={balloonVariants}
            initial="initial"
            animate="animate"
            custom={i} // Pass index for stagger effect
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-200 flex items-center justify-center relative">
      {isLoggedIn && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <Balloon />
          <motion.div
            className="bg-white shadow-xl rounded-lg p-4 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-purple-600">Success!</h2>
            <p className="text-gray-600">You have successfully logged in!</p>
          </motion.div>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <motion.div
          className="bg-red-500 text-white p-4 rounded-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>{error}</p>
        </motion.div>
      )}

      {/* Login Card */}
      <motion.div
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo or Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">ShikshaPath</h1>
          <p className="text-gray-500">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-gray-600">
              <input
                type="checkbox"
                className="mr-2 form-checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-purple-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.button>
          </div>
        </form>

        {/* Signup Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/Signin" className="text-purple-500 font-bold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;

import React from 'react';
import { motion } from 'framer-motion'; // For animations

const Mission = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-10 px-4 sm:px-6 lg:px-8 text-white">
      {/* Title Section */}
      <motion.h2 
        className="text-center text-5xl font-extrabold mb-10"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Our Mission
      </motion.h2>

      {/* Mission Content */}
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2 }}
      >
        {/* Mission Text */}
        <div>
          <p className="text-lg leading-8">
            At <span className="font-bold">ShikshaPath</span>, our mission is to bring joyful learning experiences to every student in rural India. We believe in making education playful, personalized, and powerful through AI-driven tools.
          </p>
          <p className="text-lg mt-4 leading-8">
            Our goals include:
          </p>
          <ul className="list-disc ml-6 mt-2 text-lg">
            <li>AI-Powered Personalized Learning tailored to individual student needs</li>
            <li>Localized, diverse content to make learning accessible for all</li>
            <li>Interactive Learning Modules designed to spark curiosity and engagement</li>
            <li>Comprehensive Performance Tracking using real-time data analytics</li>
            <li>Exploration Features for students to explore space, history, and more</li>
            <li>Access to learning anytime, anywhere</li>
          </ul>
        </div>

        {/* Animated Illustration */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1.2 }}
        >
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4KFQgYpJx0dZ_ejCfEqQFDd4ZNk2_URruA&s" // Placeholder image, replace with relevant graphic
            alt="Mission Illustration" 
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      {/* Interactive Elements */}
      <div className="mt-16">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.3 }}
        >
          {/* Left Message */}
          <div className="text-center md:text-left md:w-1/2">
            <h3 className="text-3xl font-bold">Empowering Rural Students</h3>
            <p className="mt-4 text-lg leading-relaxed">
              We are on a mission to close the education gap and empower every student with access to top-notch, personalized education. Let's make learning fun, engaging, and accessible for all!
            </p>
          </div>

          {/* Animated Call to Action */}
          <motion.div
            className="mt-6 md:mt-0 md:ml-6 flex-shrink-0"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1, duration: 0.8 }}
          >
            <button className="bg-yellow-400 text-purple-900 py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300">
              Join Us in Our Mission
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Call to Action and Further Information */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5 }}
      >
        <h3 className="text-4xl font-extrabold">Join the Revolution in Learning</h3>
        <p className="text-lg mt-4">
          We are transforming rural education. Be part of this exciting journey by joining the ShikshaPath community today. Together, we can make quality education accessible to all!
        </p>
        <button className="mt-6 bg-white text-pink-600 py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
          Learn More About Our Vision
        </button>
      </motion.div>
    </div>
  );
};

export default Mission;

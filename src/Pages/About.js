import React from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Ensure this CSS file exists

const AboutSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-12 bg-gradient-to-b from-pink-100 to-blue-200 text-gray-800">
      {/* Cloud Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img src="/Cloud.png" alt="Cloud" className="absolute top-0 left-10 w-80 opacity-60 animate-float" />
        <img src="/Cloud.png" alt="Cloud" className="absolute top-20 right-10 w-96 opacity-50 animate-float-reverse" />
        <img src="/Cloud.png" alt="Cloud" className="absolute bottom-10 left-40 w-112 opacity-60 animate-float" />
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10 mb-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-6 text-purple-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to ShikshaPath!
        </motion.h2>

        <motion.p
          className="text-base md:text-lg mb-5 max-w-xl mx-auto text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ShikshaPath is more than just an education platform – it's a world where learning becomes an adventure! 🌟 Our mission is to bring joyful, personalized education to every child, especially in rural India.
        </motion.p>

        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4 text-pink-500 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Vision
        </motion.h3>

        <motion.p
          className="text-base md:text-lg mb-6 max-w-lg mx-auto text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          We aim to revolutionize education by creating a vibrant learning space where every child can discover, grow, and have fun! Through technology and creativity, ShikshaPath opens doors to endless possibilities for young learners. 🚀
        </motion.p>

        <motion.h3
          className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Our Mission
        </motion.h3>

        <motion.p
          className="text-base md:text-lg max-w-lg mx-auto mb-6 text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          At ShikshaPath, our mission is to make learning enjoyable and accessible for all. We provide engaging content, fun activities, and tailor-made experiences to ignite curiosity and creativity in every child. 🎨📚
        </motion.p>

        {/* Call-to-action */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
        >
          <a
            href="/get-started"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-base md:text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Join the Adventure!
          </a>
        </motion.div>
      </div>

      
    </section>
  );
};

export default AboutSection;

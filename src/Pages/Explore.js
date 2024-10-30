import React from 'react';
import { Link } from 'react-router-dom';
// Assuming you have logo assets for Science and Humanities


const Explore = () => {
  return (
    <section className="h-[71vh] bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-0">

        {/* Science Panel */}
        <Link to="/science" className="relative bg-blue-500 hover:bg-blue-600 transition duration-300 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center space-y-4 transform hover:scale-105">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png"} alt="Science Logo" className="w-20 h-30 mt-4 animate-bounce" />
          <h2 className="text-3xl font-bold text-white mb-2">Science</h2>
          <p className="text-white text-lg">
            Blast off into the world of Science! Discover how things work, explore the universe, 
            and create experiments that unlock the secrets of nature.
          </p>
          <div className="absolute -top-5 -right-5 w-16 h-16 bg-white opacity-50 rounded-full blur-xl"></div>
        </Link>

        {/* Humanities Panel */}
        <Link to="/Humanities" className="relative bg-pink-500 hover:bg-pink-600 transition duration-300 p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center space-y-4 transform hover:scale-105">
          <img src={"https://clipart-library.com/image_gallery2/Earth.png"} alt="Humanities Logo" className="w-20 h-20 mb-4 animate-spin" />
          <h2 className="text-3xl font-bold text-white mb-2">Humanities</h2>
          <p className="text-white text-lg">
            Dive deep into the heart of Humanities! Understand cultures, explore human stories, 
            and learn how society shapes the world we live in.
          </p>
          <div className="absolute -top-5 -left-5 w-16 h-16 bg-white opacity-50 rounded-full blur-xl"></div>
        </Link>

      </div>
    </section>
  );
};

export default Explore;

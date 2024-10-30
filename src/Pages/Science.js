import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nasa from '../components/Nasa';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlanetClick = (planetName) => {
    closeModal(); // Close the modal before navigating
    navigate(`/Detail?keyword=${planetName}`); // Redirect to the Detail section with planet name as a parameter
  };

  const planets = [
    { name: 'Mercury' },
    { name: 'Venus' },
    { name: 'Earth' },
    { name: 'Mars' },
    { name: 'Jupiter' },
    { name: 'Saturn' },
    { name: 'Uranus' },
    { name: 'Neptune' },
  ];

  return (
    <div className="relative h-screen bg-black flex justify-center items-center overflow-hidden h-[60vh]">
      {/* Giphy Embed */}
      <div style={{ width: '100%', height: '0', paddingBottom: '56%', position: 'relative' }}>
        <iframe
          src="https://giphy.com/embed/APq0WQXgQQrKFcBbjP"
          width="100%"
          height="100%"
          style={{ position: 'absolute' }}
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Solar System GIF"
        ></iframe>
      </div>

      {/* Text Overlay */}
      <div className="absolute z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          Discover the Wonders of Our Solar System
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium">
          Embark on a journey through space and explore the planets, stars, and the mysteries of the universe.
        </p>
        <button 
          onClick={openModal} 
          className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-lg font-semibold">
          Start Your Exploration
        </button>
      </div>

      {/* Modal for Planet Cards */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-20">
          <div className="relative bg-white w-full max-w-6xl p-6 rounded-lg flex">
            {/* Left Panel for Sun */}
            <div className="w-1/3 p-4 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-lg text-center flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-white mb-4">Explore the Sun</h2>
              <div className="bg-black p-6 rounded-lg">
                <img
                  src={`${process.env.PUBLIC_URL}/Sun.png`}
                  alt="Sun"
                  className="w-48 h-48 mx-auto"
                />
                <h3 className="text-3xl text-white mt-4 font-semibold">Sun</h3>
              </div>
              <p className="text-white mt-4 text-lg">
                The Sun is the star at the center of the Solar System. It is by far the most important source of energy for life on Earth.
              </p>
            </div>

            {/* Right Panel for Planets */}
            <div className="w-2/3 pl-6">
              <button 
                onClick={closeModal} 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl">
                ❌
              </button>
              <h2 className="text-3xl font-bold text-center mb-6">Explore the Planets</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {planets.map((planet) => (
                  <div
                    key={planet.name}
                    className="bg-black p-4 rounded-lg text-center hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => handlePlanetClick(planet.name)} // Add click handler
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/${planet.name}.png`}
                      alt={planet.name}
                      className="w-24 h-24 mx-auto"
                    />
                    <h3 className="text-xl text-white mt-4 font-semibold">{planet.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Science Component
const Science = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroSection />
      <div className="mx-auto p-8">
        <Nasa />
      </div>
    </div>    
  );
};

export default Science;

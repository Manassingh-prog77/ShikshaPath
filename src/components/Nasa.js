import React, { useState, useEffect } from 'react';

const ScienceExplore = () => {
  // State hooks to store various NASA data
  const [apodData, setApodData] = useState(null); // Astronomy Picture of the Day
  const [roverPhotos, setRoverPhotos] = useState([]); // Mars Rover Photos
  const [planets, setPlanets] = useState([]); // Planetary Data
  const [asteroids, setAsteroids] = useState([]); // Asteroids Near Earth
  const [missions, setMissions] = useState([]); // NASA Missions
  const [marsWeather, setMarsWeather] = useState(null); // Mars Weather Data

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Astronomy Picture of the Day
        const apodResponse = await fetch(`https://api.nasa.gov/planetary/apod?api_key=83jjGIVFueVGMbZSp1RM0s7J6tAYxD3VRy7brcoc`);
        const apod = await apodResponse.json();
        setApodData(apod);

        // Fetch Mars Rover Photos
        const roverResponse = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=83jjGIVFueVGMbZSp1RM0s7J6tAYxD3VRy7brcoc`);
        const roverData = await roverResponse.json();
        setRoverPhotos(roverData.photos.slice(0, 6));

        // Fetch Planetary Data
        const planetsResponse = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
        const planetsData = await planetsResponse.json();
        setPlanets(planetsData.bodies.filter(body => body.isPlanet).slice(0, 6));

        // Fetch Asteroids Near Earth
        const asteroidsResponse = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-01-01&end_date=2022-01-07&api_key=83jjGIVFueVGMbZSp1RM0s7J6tAYxD3VRy7brcoc`);
        const asteroidsData = await asteroidsResponse.json();
        setAsteroids(asteroidsData.near_earth_objects['2022-01-01'].slice(0, 6));

        // Fetch Mars Weather Data
        const weatherResponse = await fetch(`https://api.nasa.gov/insight_weather/?api_key=83jjGIVFueVGMbZSp1RM0s7J6tAYxD3VRy7brcoc&feedtype=json&ver=1.0`);
        const weatherData = await weatherResponse.json();
        setMarsWeather(weatherData);

        // Hardcoded NASA missions for now (can replace with API data if available)
        setMissions([
          { name: 'Apollo 11', year: 1969, description: 'First manned moon landing.' },
          { name: 'Voyager 1', year: 1977, description: 'First spacecraft to leave the solar system.' },
          { name: 'Curiosity', year: 2012, description: 'Mars rover exploring the surface of Mars.' }
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="science-explore bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 md:px-12">
      <h1 className="text-center text-5xl font-bold mb-12">Explore the Wonders of Space</h1>

      {/* Astronomy Picture of the Day */}
      {apodData && (
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Astronomy Picture of the Day</h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8">
            <img src={apodData.url} alt={apodData.title} className="max-w-md rounded-lg shadow-lg mb-4 md:mb-0" />
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-2">{apodData.title}</h3>
              <p className="text-gray-400">{apodData.explanation}</p>
            </div>
          </div>
        </section>
      )}

      {/* Mars Rover Photos */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Mars Rover Photos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roverPhotos.map((photo) => (
            <div key={photo.id} className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
              <img src={photo.img_src} alt={`Mars Rover - ${photo.rover.name}`} className="h-48 w-full object-cover rounded-lg mb-4" />
              <p className="text-gray-300">
                Taken by {photo.rover.name} on {photo.earth_date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Planetary Data */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Explore the Planets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {planets.map((planet) => (
            <div key={planet.id} className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-white">{planet.englishName}</h3>
              <p className="text-gray-300">Gravity: {planet.gravity} m/s²</p>
              <p className="text-gray-300">Density: {planet.density} g/cm³</p>
            </div>
          ))}
        </div>
      </section>

      {/* Asteroids Near Earth */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Asteroids Near Earth</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {asteroids.map((asteroid) => (
            <div key={asteroid.id} className="bg-gray-800 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-white">{asteroid.name}</h3>
              <p className="text-gray-300">Diameter: {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)} meters</p>
              <p className="text-gray-300">Potential Hazard: {asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ScienceExplore;

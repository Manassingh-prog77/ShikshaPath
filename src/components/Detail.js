import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To retrieve URL parameters

const Details = () => {
  const { keyword } = useParams(); // Get the keyword from URL parameters
  const [nasaData, setNasaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch data related to the keyword from NASA API
  const fetchNasaData = async () => {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;

    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${keyword}`
      );
      const data = await response.json();

      // Check if any items were returned
      if (data.collection.items.length > 0) {
        setNasaData(data.collection.items);
      } else {
        setError(true);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching NASA data:', error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNasaData();
  }, [keyword]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <p className="text-2xl">Loading NASA Data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-red-500">
        <p className="text-2xl">Error fetching NASA data for "{keyword}". Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Exploring: {keyword}</h1>

      {nasaData && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nasaData.map((item, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">{item.data?.[0]?.title || "No title available"}</h2>
              {item.links?.[0]?.href && (
                <img
                  src={item.links[0].href}
                  alt={item.data?.[0]?.title || "Image"}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
              )}
              <p className="text-gray-300">{item.data?.[0]?.description || "No description available."}</p>
              {item.links?.[0]?.href && (
                <a href={item.links[0].href} target="_blank" rel="noopener noreferrer" className="text-yellow-400 mt-2 inline-block">
                  View More
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-8">
        <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
          Start Your Exploration
        </button>
      </div>
    </div>
  );
};

export default Details;

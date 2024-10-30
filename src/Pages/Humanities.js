import React, { useEffect, useState } from 'react';

// Base URL for the Wikidata API
const WIKIDATA_API_URL = 'https://www.wikidata.org/w/api.php';

const HistorySection = () => {
    const [historyData, setHistoryData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('history');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch history data from the API
    const fetchHistoryData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `${WIKIDATA_API_URL}?action=wbsearchentities&search=${searchTerm}&format=json&limit=10&origin=*&language=en`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setHistoryData(data.search || []);
        } catch (error) {
            console.error('Error fetching history data:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchHistoryData();
    }, [searchTerm]);

    return (
        <div className="bg-gradient-to-r from-blue-200 to-green-200 p-8 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6 text-purple-800">🌍 History Explorer</h1>
            <p className="text-lg text-center mb-8 text-gray-700">
                Dive into fascinating historical topics and learn about significant events, people, and places!
            </p>

            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Search for historical topics..."
                    className="border border-purple-500 rounded-lg p-3 flex-grow mr-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    onClick={fetchHistoryData}
                    className="bg-purple-600 text-white rounded-lg p-3 shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
                >
                    🔍 Search
                </button>
            </div>

            {loading ? (
                <p className="text-center text-lg text-gray-600">Loading...</p>
            ) : error ? (
                <p className="text-center text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {historyData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-xl rounded-lg p-4 transition-transform transform hover:scale-105"
                        >
                            <h2 className="font-bold text-2xl text-blue-600">{item.label}</h2>
                            <p className="text-gray-800">{item.description || 'No description available.'}</p>
                            <a
                                href={`https://www.wikidata.org/wiki/${item.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-600 mt-2 block underline hover:text-purple-800"
                            >
                                Read more
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const Humanities = () => {
    return (
        <div>
            <HistorySection />
        </div>
    );
};

export default Humanities;

import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  // Default reviews data
  const reviews = [
    {
      name: 'Aarav Gupta',
      role: '10th Grade Student',
      review: 'ShikshaPath has completely changed the way I study! The AI tutor is so helpful in tracking my progress and preparing me for exams. Highly recommend it!',
      rating: 5,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Meera Singh',
      role: '12th Grade Science Student',
      review: 'The weekly tests and AI insights have really helped me improve in subjects I was weak in. ShikshaPath is my go-to for exam prep!',
      rating: 4,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Raj Patel',
      role: '9th Grade Student',
      review: 'I love how easy it is to use ShikshaPath for assignments and tests. It’s made learning fun and effective for me.',
      rating: 5,
      image: 'https://via.placeholder.com/150'
    },
  ];

  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-10">What Our Students Say</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((review, index) => (
          <div key={index} className="border border-indigo-400 rounded-lg shadow-lg p-8 bg-indigo-50 hover:bg-indigo-100 transition duration-300">
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-indigo-700">{review.name}</h4>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">"{review.review}"</p>
            <div className="flex items-center">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="material-icons text-yellow-400 mr-1">★</span>
                ))}
              {Array(5 - review.rating)
                .fill()
                .map((_, i) => (
                  <span key={i} className="material-icons text-gray-300 mr-1">★</span>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Join the ShikshaPath Community!</h3>
        <p className="text-lg text-gray-700 mt-4 mb-8">Thousands of students are improving their learning experience with us. What are you waiting for?</p>
        <Link to="/pricing" className="mt-6 bg-indigo-600 text-white py-4 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
          Get Started for Just $1
        </Link>
      </div>
    </div>
  );
};

export default Community;

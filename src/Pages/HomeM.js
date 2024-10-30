import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Shikshaपथ</h1>
            <p className="text-lg mb-6">
              Your personal guide to success in learning. Experience AI-driven tutoring, progress tracking, and much more!
            </p>
            <a 
              href="/signup" 
              className="bg-yellow-400 text-black py-3 px-6 rounded-lg text-lg hover:bg-yellow-300 transition duration-300"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img 
              src="https://edutinker.com/wp-content/uploads/2023/02/Education-Schemes-for-India-in-Schools-An-Overview.png" 
              alt="Learning Illustration" 
              className="w-full h-auto max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Shikshaपथ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.map(feature => (
              <div key={feature.title} className="bg-white shadow-md rounded-lg p-6 text-center">
                <i className={`fas ${feature.icon} text-4xl mb-4 ${feature.iconColor}`}></i>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Shikshaपथ</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Shikshaपथ is an innovative platform designed to make learning easier and more enjoyable. Our AI-driven solutions offer personalized tutoring, detailed progress tracking, and a seamless learning experience for students of all levels.
          </p>
          <a 
            href="/explore" 
            className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Shikshaपथ Today!</h2>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Sign up now and begin your learning journey with AI-driven tutoring, a vast library of resources, and personalized progress tracking.
          </p>
          <a 
            href="/signup" 
            className="bg-white text-gray-800 py-3 px-6 rounded-lg text-lg hover:bg-gray-200 transition duration-300"
          >
            Sign Up
          </a>
        </div>
      </section>
    </div>
  );
};

// Data for features section
const featuresData = [
  {
    title: 'AI Tutor',
    description: 'Get personalized learning plans with our intelligent AI tutor.',
    icon: 'fa-chalkboard-teacher text-blue-500',
  },
  {
    title: 'Explore',
    description: 'Access a wide range of resources, courses, and materials.',
    icon: 'fa-book-open text-purple-500',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your learning and achievements in real-time.',
    icon: 'fa-chart-bar text-green-500',
  },
  {
    title: 'Attendance',
    description: 'Keep track of your attendance and participation easily.',
    icon: 'fa-user-graduate text-pink-500',
  },
];

export default HomePage;

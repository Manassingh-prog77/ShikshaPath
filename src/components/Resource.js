import React from 'react';

const Resources = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-10">Explore Our Resources</h2>

      {/* Resource categories */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* AI Learning Tools */}
        <div className="border border-green-400 rounded-lg shadow-lg p-8 bg-green-50 hover:bg-green-100 transition duration-300">
          <h3 className="text-xl font-semibold text-green-700">AI Learning Tools</h3>
          <p className="text-lg text-gray-700 mt-4">Access a range of AI-powered tools to enhance your learning experience. Get personalized assistance, progress tracking, and intelligent recommendations.</p>
          <button className="mt-6 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300">
            Explore AI Tools
          </button>
        </div>

        {/* Study Materials */}
        <div className="border border-blue-400 rounded-lg shadow-lg p-8 bg-blue-50 hover:bg-blue-100 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-700">Study Materials</h3>
          <p className="text-lg text-gray-700 mt-4">Download curriculum-specific study guides, practice questions, and assignments to stay on top of your studies.</p>
          <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            View Study Materials
          </button>
        </div>

        {/* Webinars & Workshops */}
        <div className="border border-purple-400 rounded-lg shadow-lg p-8 bg-purple-50 hover:bg-purple-100 transition duration-300">
          <h3 className="text-xl font-semibold text-purple-700">Webinars & Workshops</h3>
          <p className="text-lg text-gray-700 mt-4">Join live webinars and workshops hosted by expert educators. Learn new skills, explore exciting topics, and engage with industry professionals.</p>
          <button className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
            Join a Webinar
          </button>
        </div>

      </div>

      {/* Additional Information */}
      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Research Articles */}
        <div className="border border-red-400 rounded-lg shadow-lg p-8 bg-red-50 hover:bg-red-100 transition duration-300">
          <h3 className="text-xl font-semibold text-red-700">Research Articles</h3>
          <p className="text-lg text-gray-700 mt-4">Stay updated with the latest research in education technology, AI-driven learning methods, and curriculum development.</p>
          <button className="mt-6 bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition duration-300">
            Read Articles
          </button>
        </div>

        {/* Educational Blogs */}
        <div className="border border-yellow-400 rounded-lg shadow-lg p-8 bg-yellow-50 hover:bg-yellow-100 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-700">Educational Blogs</h3>
          <p className="text-lg text-gray-700 mt-4">Explore insightful articles, tips, and strategies to enhance your learning and teaching experience. Stay ahead in your education journey.</p>
          <button className="mt-6 bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-yellow-700 transition duration-300">
            Explore Blogs
          </button>
        </div>

      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900">Ready to Dive Deeper?</h3>
        <p className="text-lg text-gray-700 mt-4">Join our platform today and gain access to all the resources you need for academic success!</p>
        <button className="mt-6 bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Resources;

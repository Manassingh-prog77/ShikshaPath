import React from 'react';

const PromotionalSection = () => {
  return (
    <section className="bg-gradient-to-br from-purple-300 to-blue-500 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Discover the Joy of Learning with ShikshaPath!
        </h2>
        <p className="text-lg md:text-xl text-white mb-12">
          Join us in a fun and exciting journey tailored just for you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-4">🚀</div> {/* Emoji for visual appeal */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Launch Your Potential</h3>
            <p className="text-gray-600 text-center">
              Explore personalized learning paths designed to boost your confidence and skills!
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-4">📚</div> {/* Emoji for visual appeal */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Engaging Content</h3>
            <p className="text-gray-600 text-center">
              Discover a world of interactive lessons that make learning fun and enjoyable!
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:scale-105 flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-4">👩‍🏫</div> {/* Emoji for visual appeal */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-center">
              Get support from passionate educators who are here to guide you every step of the way!
            </p>
          </div>
        </div>

        {/* New Benefits Section as Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Creative Learning</h3>
            <p className="text-gray-600 text-center">
              Engage in fun, creative projects that make learning exciting!
            </p>
          </div>

          {/* Benefit Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-4">🌍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Community</h3>
            <p className="text-gray-600 text-center">
              Connect with learners from around the world and share experiences!
            </p>
          </div>

          {/* Benefit Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Recognition</h3>
            <p className="text-gray-600 text-center">
              Celebrate your achievements and earn badges for your progress!
            </p>
          </div>

          {/* Benefit Card 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <div className="text-5xl text-blue-500 mb-4">📈</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Track Progress</h3>
            <p className="text-gray-600 text-center">
              Easily track your learning journey and see how far you’ve come!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalSection;

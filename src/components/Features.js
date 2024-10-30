import React from 'react';
import { motion } from 'framer-motion';
import '../App.css'; // Ensure this CSS file exists

export default function WhyChooseUsSection() {
  const reasons = [
    {
      title: '🎉 Fun Learning Experience',
      description: 'We make learning enjoyable through games, stories, and interactive lessons!',
    },
    {
      title: '🚀 Innovative Tools',
      description: 'Utilize the latest technology to enhance the learning journey and spark creativity.',
    },
    {
      title: '🌈 Colorful Community',
      description: 'Join a vibrant community of learners and educators, sharing experiences and growth.',
    },
    {
      title: '🦸‍♀️ Empowering Educators',
      description: 'Support and resources for teachers to create impactful and personalized learning experiences.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-300 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-6 text-purple-700 animate-fade-in">
          Why Choose Shiksha Path?
        </h2>
        <p className="text-xl mb-10 text-gray-600 opacity-90">
          Experience a whole new world of learning with us!
        </p>
        <div className="flex flex-wrap justify-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 m-4 w-80 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }} // Animation start state
              animate={{ opacity: 1, y: 0 }} // Animation end state
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
            >
              <h3 className="text-2xl font-semibold text-purple-600 mb-3">{reason.title}</h3>
              <p className="text-gray-700 text-base">{reason.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.a
          href="/get-started"
          className="mt-8 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pulse"
          whileHover={{ scale: 1.05 }}
        >
          Join the Adventure!
        </motion.a>
      </div>
    </section>
  );
}

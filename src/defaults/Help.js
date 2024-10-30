import React from 'react';
import { motion } from 'framer-motion';

const Accessibility = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-yellow-400 to-red-500 p-6 rounded-lg text-white shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-6 animate-pulse">Access for Everyone!</h2>
      <ul className="space-y-4">
        {[
          { icon: '🎧', text: 'Screen Reader Support' },
          { icon: '🔍', text: 'Text Size Adjustment' },
          { icon: '🎨', text: 'High Contrast Mode' },
          { icon: '⌨️', text: 'Keyboard Navigation' }
        ].map((item, index) => (
          <motion.li 
            key={index}
            className="flex items-center text-xl hover:text-yellow-200 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl mr-3">{item.icon}</span> 
            {item.text}
          </motion.li>
        ))}
      </ul>
      <p className="text-center mt-4 text-lg">Let us know how we can improve your experience!</p>
    </motion.div>
  );
};

const HelpCenter = () => {
  return (
    <motion.div 
      className="p-6 bg-blue-500 rounded-lg text-white shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-center mb-6 animate-pulse">We're Here to Help!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'How to Create an Account?', description: 'A simple guide to get you started!' },
          { title: 'How to Reset My Password?', description: 'Step-by-step instructions to regain access.' },
          { title: 'Contact Support', description: 'Need more help? Reach out to our friendly support team!' }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="p-4 bg-yellow-300 rounded-lg hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
      <input 
        type="text" 
        placeholder="Looking for something specific?" 
        className="mt-4 p-3 rounded w-full text-black shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" 
      />
    </motion.div>
  );
};

export default function Help() {
  return (
    <div className="space-y-6">
      <Accessibility />
      <HelpCenter />
    </div>
  );
}

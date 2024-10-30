import React from 'react';
import { Link } from 'react-router-dom';

const AiTutorMain = () => {
  return (
    <div className="bg-blue-50 mb-6 p-10 rounded-lg shadow-lg text-center max-w-6xl mx-auto mt-8">
      <h1 className="text-5xl font-bold text-purple-600 mb-6">
        Your Personalized AI Tutor
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Choose from a variety of learning options to enhance your understanding, practice, and excel in your studies.
      </p>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Chapter Explanation Section */}
        <Link to="/Chapter" className="bg-white p-6 rounded-lg shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <i className="fas fa-book text-purple-500 text-4xl mb-4 flex-grow"></i>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Chapter Explanation</h2>
          <p className="text-gray-600 flex-grow">
            Dive into detailed chapter explanations with interactive examples and AI-powered explanations.
          </p>
         
        </Link>

        {/* Assignments Section */}
        <Link to="/assignments" className="bg-white p-6 rounded-lg shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <i className="fas fa-pencil-alt text-purple-500 text-4xl mb-4 flex-grow"></i>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Assignments</h2>
          <p className="text-gray-600 flex-grow">
            Get assignments to solidify your understanding of each chapter.
          </p>
         
        </Link>

        {/* Practice Test Section */}
        <Link to="/practice" className="bg-white p-6 rounded-lg shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <i className="fas fa-file-alt text-purple-500 text-4xl mb-4 flex-grow"></i>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Practice Test</h2>
          <p className="text-gray-600 flex-grow">
            Take practice tests and improve your readiness with real-time feedback from the AI tutor.
          </p>
         
        </Link>

        {/* Syllabus Analyzer Section */}
        <Link to="/syllabus" className="bg-white p-6 rounded-lg shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <i className="fas fa-list text-purple-500 text-4xl mb-4 flex-grow"></i>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Syllabus Analyzer</h2>
          <p className="text-gray-600 flex-grow">
            Analyze your syllabus to identify areas of improvement and optimize your study time.
          </p>
         
        </Link>

        {/* Monthly Prep Level Test Section */}
        <Link to="/Prep" className="bg-white p-6 rounded-lg shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <i className="fas fa-calendar-check text-purple-500 text-4xl mb-4 flex-grow"></i>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Prep Level Test</h2>
          <p className="text-gray-600 flex-grow">
            Take monthly tests to track your progress and assess your preparation level.
          </p>
         
        </Link>

        {/* Doubt Solving Section */}
        <Link to="/DoubtSolving" className="bg-white p-6 rounded-lg shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <i className="fas fa-question-circle text-purple-500 text-4xl mb-4 flex-grow"></i>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Doubt Solving</h2>
          <p className="text-gray-600 flex-grow">
            Have a doubt? Get it solved instantly with our AI-powered doubt-solving tool.
          </p>
         
        </Link>

        {/* Pending Submissions Section */}
        <Link to="/Pending" className="bg-white p-6 rounded-lg shadow-lg hover:bg-purple-100 transform hover:scale-105 transition-transform duration-300 flex flex-col">
          <i className="fas fa-clock text-purple-500 text-4xl mb-4 flex-grow"></i>
          <h2 className="text-2xl font-bold text-purple-600 mb-2">Pending Submissions</h2>
          <p className="text-gray-600 flex-grow">
            Check and manage your pending submissions to ensure timely completion of assignments.
          </p>
           </Link>

      </div>
    </div>
  );
};

export default AiTutorMain;

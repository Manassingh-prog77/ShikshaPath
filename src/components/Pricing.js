import React,{useState} from 'react';

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
  
    const handleContactUsClick = () => {
      setIsModalOpen(true);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      setIsModalOpen(false);
      setIsAlertVisible(true);
      setTimeout(() => setIsAlertVisible(false), 5000); // Hide alert after 5 seconds
    };
    
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-10">Our Pricing Plans</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Students Plan */}
        <div className="border border-blue-400 rounded-lg shadow-lg p-8 bg-blue-50 hover:bg-blue-100 transition duration-300">
          <h3 className="text-xl font-semibold text-blue-700">Students</h3>
          <p className="text-3xl font-bold text-gray-900">$1 <span className="text-lg font-medium">/ month</span></p>
          <ul className="mt-6 space-y-4 text-left text-gray-700">
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">School</span> Home Tutor for syllabus completion
            </li>
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">Assignment</span> Daily assignments
            </li>
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">Assignment turned in</span> Weekly subject-wise tests
            </li>
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">Chart</span> Monthly progress tracking
            </li>
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">Insights</span> AI-driven weak point analysis
            </li>
            <li className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">Explore</span> Explore section
            </li>
          </ul>
        </div>

        {/* Teachers Plan */}
        <div className="border border-yellow-400 rounded-lg shadow-lg p-8 bg-yellow-50 hover:bg-yellow-100 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-700">Teachers</h3>
          <p className="text-3xl font-bold text-gray-900">$24 - $30 <span className="text-lg font-medium">/ month</span></p>
          <ul className="mt-6 space-y-4 text-left text-gray-700">
            <li className="flex items-center">
              <span className="material-icons text-yellow-500 mr-2">Group</span> Class package (30-40 students)
            </li>
            <li className="flex items-center">
              <span className="material-icons text-yellow-500 mr-2">Track changes</span> Track individual student progress
            </li>
            <li className="flex items-center">
              <span className="material-icons text-yellow-500 mr-2">Calendar today</span> Curriculum-based test schedule
            </li>
            <li className="flex items-center">
              <span className="material-icons text-yellow-500 mr-2">Insights</span> AI insights for each student
            </li>
            <li className="flex items-center">
              <span className="material-icons text-yellow-500 mr-2">Assignment</span> Create and assign tests
            </li>
          </ul>
        </div>

        {/* Organizations Plan */}
        <div className="border border-purple-400 rounded-lg shadow-lg p-8 bg-purple-50 hover:bg-purple-100 transition duration-300">
          <h3 className="text-xl font-semibold text-purple-700">Organizations</h3>
          <p className="text-3xl font-bold text-gray-900">Custom Pricing</p>
          <ul className="mt-6 space-y-4 text-left text-gray-700">
            <li className="flex items-center">
              <span className="material-icons text-purple-500 mr-2">School</span> Tailored for educational institutions
            </li>
            <li className="flex items-center">
              <span className="material-icons text-purple-500 mr-2">Report Card</span> Institution-wide performance tracking
            </li>
            <li className="flex items-center">
              <span className="material-icons text-purple-500 mr-2">Assignment</span> Custom tests and schedules
            </li>
            <li className="flex items-center">
              <span className="material-icons text-purple-500 mr-2">Phone</span> Contact for custom pricing
            </li>
          </ul>
          <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300" onClick={handleContactUsClick}>Contact Us</button>
        </div>

      </div>
      {isModalOpen && (
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
      {/* Close Button */}
      <button 
        onClick={() => setIsModalOpen(false)} 
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      {/* Modal Content */}
      <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Organization Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Students</label>
          <input
            type="number"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="tel"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">How did you hear about ShikshaPath?</label>
          <select
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
          >
            <option value="Other organizations">Other organizations</option>
            <option value="Ads">Ads</option>
            <option value="Teachers">Teachers</option>
            <option value="Students">Students</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)}


      {/* Success Alert */}
      {isAlertVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg">
          Thank you for showing your interest. Our team will contact you shortly.
        </div>
      )}
    </div>
  );
};

export default Pricing;
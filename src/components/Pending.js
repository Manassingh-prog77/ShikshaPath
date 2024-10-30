import React, { useState, useEffect } from 'react';

const Card = ({ title, dueDate, description, onSeeQuestions }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-transform duration-200 hover:scale-105">
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="text-sm text-gray-500">Due Date: {dueDate}</p>
      <p className="text-gray-700 mt-2">{description}</p>
      {onSeeQuestions && (
        <button
          className="mt-2 py-2 px-4 rounded text-white bg-purple-500 font-semibold transition duration-300"
          onClick={onSeeQuestions}
        >
          See Questions
        </button>
      )}
    </div>
  );
};

const Modal = ({ questions, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Questions</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index} className="mb-2">{question}</li>
          ))}
        </ul>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const PendingSubmission = () => {
  const [assignments, setAssignments] = useState([]);
  const [practiceTests, setPracticeTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalQuestions, setModalQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAssignments = async () => {
      const response = await fetch('http://localhost:5000/api/study/fetchquiz', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken'),
        },
      });

      const data = await response.json();

      if (response.ok) {
        setAssignments(data.quizzes);
      } else {
        console.log(data.message);
        setAssignments([]);
      }
    };

    const fetchPracticeTests = async () => {
      const response = await fetch('http://localhost:5000/api/practise/fetchpractise', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken'),
        },
      });

      const data = await response.json();

      if (response.ok) {
        setPracticeTests(data.questions); // Adjust according to your response structure
      } else {
        console.log(data.message);
        setPracticeTests([]);
      }
      setLoading(false);
    };

    fetchAssignments();
    fetchPracticeTests();
  }, []);

  const handleSeeQuestions = (questions) => {
    setModalQuestions(questions);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalQuestions([]);
  };

  return (
    <div className="bg-gradient-to-r from-green-200 to-blue-200 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        <i className="fas fa-clock text-purple-500 text-4xl  flex-grow"></i> Pending Submissions
      </h2>
      <p className="text-center text-red-600 mb-4">Incomplete submissions create a negative impact on your progress.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Unsubmitted Assignments Section */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">Unsubmitted Assignments</h3>
          {loading ? (
            <p>Loading assignments...</p>
          ) : assignments.length > 0 ? (
            assignments.map(assignment => (
              <Card
                key={assignment._id}
                title={assignment.title}
                dueDate={new Date(assignment.dueDate).toLocaleDateString()}
                description={assignment.instructions}
                onSeeQuestions={() => handleSeeQuestions(assignment.questions)}
              />
            ))
          ) : (
            <p className="text-center text-red-500">No Assignments Pending</p>
          )}
        </div>

        {/* Practice Tests Section */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">Practice Tests</h3>
          {loading ? (
            <p>Loading practice tests...</p>
          ) : practiceTests.length > 0 ? (
            practiceTests.map(test => (
              <Card
                key={test._id}
                title={test.title}
                dueDate={new Date(test.dueDate).toLocaleDateString()}
                description={test.instructions}
                onSeeQuestions={() => handleSeeQuestions(test.questions)}
              />
            ))
          ) : (
            <p className="text-center text-red-500">No Practice Tests Available</p>
          )}
        </div>
      </div>

      {showModal && <Modal questions={modalQuestions} onClose={closeModal} />}
    </div>
  );
};

export default PendingSubmission;

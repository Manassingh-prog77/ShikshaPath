import React, { useState, useEffect } from 'react';

const AssignmentSection = () => {
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [noAssignmentsMessage, setNoAssignmentsMessage] = useState('');

  const fetchAssignments = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/study/fetchquiz', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken'),
        },
      });

      const data = await response.json();

      // Check if the message indicates no quizzes
      if (data.message && data.message === "No quizzes found.") {
        setNoAssignmentsMessage(data.message);
        setAssignments([]);
      } else {
        setAssignments(data.quizzes);
        setNoAssignmentsMessage('');
      }
    } catch (error) {
      console.error('Error fetching assignments:', error);
      setError('Failed to load assignments. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const handleCompleteNow = (assignment, index) => {
    setSelectedAssignment({ ...assignment, index });
    setUserAnswers({});
  };

  const handleAnswerChange = (questionIndex, value) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allAnswered = Object.values(userAnswers).every(answer => answer.trim() !== '');
    if (!allAnswered) {
      alert('Please fill in all answers before submitting.');
      return;
    }

    const responsesText = selectedAssignment.questions.map((question, index) => {
      return `Question ${index + 1} asked from student was ${question} and answer given by student ${userAnswers[index]}`;
    }).join(', ');

    console.log(responsesText);

    setIsSubmitting(true);

    try {
      const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'x-rapidapi-key': '607ee8caabmsh1784f5a55b8446ep136777jsn06e8f34cb11c',
        },
        body: JSON.stringify({
          "messages": [
            {
              "role": "user",
              "content": `You are an AI teacher for students in grades 5-12. Recently, you assigned a homework task to a student, which included ten questions. Evaluate the assignment based on the answers provided and award marks according to the following criteria: if the answer is accurate, assign 10 marks; if the answer is undefined or lacks knowledge or incorrect, assign 0 marks. The questions and corresponding answers are as follows: ${responsesText} After evaluating this assignment, provide the total marks obtained out of 100, returning only the number of marks with no additional text or explanation.`
            }
          ],
          "temperature": 0.9,
          "max_tokens": 1024
        }),
      });

      if (!response.ok) {
        throw new Error(`Error from API: ${response.statusText}`);
      }

      const apiData = await response.json();
      console.log('API Response:', apiData);

      const deleteResponse = await fetch(`http://localhost:5000/api/study/quiz/${selectedAssignment._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken'),
        },
      });

      if (!deleteResponse.ok) {
        throw new Error(`Error deleting assignment: ${deleteResponse.statusText}`);
      }

      await addMarksToDatabase("Assignment", apiData.result);
      setSelectedAssignment(null);
      setSuccessModalVisible(true);

    } catch (error) {
      console.error('Error during submission:', error);
      alert('Failed to evaluate the assignment. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const addMarksToDatabase = async (title, marks) => {
    try {
      const response = await fetch('http://localhost:5000/api/marks/addMark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken'),
        },
        body: JSON.stringify({
          title: title,
          marks: marks,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error adding marks: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Marks added:', result);
    } catch (error) {
      console.error('Error adding marks:', error);
      alert('Failed to add marks. Please try again later.');
    }
  };

  const closeSuccessModal = () => {
    setSuccessModalVisible(false);
  };

  if (loading) {
    return <div className="text-center mt-20 text-lg">Loading assignments...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-lg text-red-600">{error}</div>;
  }

  if (noAssignmentsMessage) {
    return (
      <div className="p-6 bg-yellow-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">{noAssignmentsMessage}</h1>
        <p className="text-lg text-center">🎉 Great work! Keep it up! 🎉</p>
        <img src="http://clipart-library.com/image_gallery/n1043101.jpg" alt="Happy" className="mx-auto mt-4 rounded-lg shadow-md" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-800">Assignments</h1>
      {assignments.map((assignment, index) => (
        <div key={assignment._id} className="bg-white p-4 rounded-lg shadow-md mb-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
          <h2 className="text-xl font-semibold text-blue-600">{assignment.title}</h2>
          <p className="text-gray-600">Due Date: {new Date(assignment.dueDate).toLocaleString()}</p>
          <button
            onClick={() => handleCompleteNow(assignment, index)}
            className="mt-2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Complete Now
          </button>
        </div>
      ))}

      {selectedAssignment && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-2">{`Assignment ${selectedAssignment.index + 1}`}</h2>
            <p className="mb-4">{selectedAssignment.instructions}</p>

            <form onSubmit={handleSubmit}>
              {selectedAssignment.questions.map((question, index) => (
                <div key={index} className="mb-6">
                  <label className="block text-lg mb-2">{`${index + 1}. ${question}`}</label>
                  <input
                    type="text"
                    className="border rounded p-4 w-full text-lg"
                    value={userAnswers[index] || ''}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    placeholder="Your answer..."
                  />
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-3 rounded hover:bg-green-600 transition duration-300"
                disabled={Object.values(userAnswers).some(answer => answer.trim() === '')}
              >
                Submit Answers
              </button>
              <button
                type="button"
                className="mt-2 w-full bg-red-500 text-white font-bold py-3 rounded hover:bg-red-600 transition duration-300"
                onClick={() => setSelectedAssignment(null)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {successModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-2">Success!</h2>
            <p className="mb-4">Your assignment has been submitted successfully!</p>
            <button
              onClick={closeSuccessModal}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignmentSection;

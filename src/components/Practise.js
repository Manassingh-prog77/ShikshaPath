import React, { useState } from 'react';

const Practice = () => {
  const [topics, setTopics] = useState(['']);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [evaluationModal, setEvaluationModal] = useState(false);

  const handleTopicChange = (index, value) => {
    const newTopics = [...topics];
    newTopics[index] = value;
    setTopics(newTopics);
  };

  const addTopic = () => {
    setTopics([...topics, '']);
  };

  const handleAnswerChange = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const formattedTopics = topics.filter(topic => topic.trim() !== '').join(', ');
      const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'x-rapidapi-key': 'e2cfdcdb72msh6256572674abedep1c0601jsn7e39e3a281b2',
        },
        body: JSON.stringify({
          "messages": [
            {
              "role": "user",
              "content": `Create a list of 10 questions based on the topic ${topics} for students from class 5 to 12. Format the response strictly as valid JSON with a key questions, containing an array of strings. Each string should represent one question. Ensure the response is well-structured and properly formatted.Don't give whiteSpaces in response`
            }
          ],
          "temperature": 0.9,
          "max_tokens": 1024
        }),
      });

      const data = await response.json();

      const secondApiResponse = await fetch('http://localhost:5000/api/practise/Addpractise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('authToken'), // Fetch auth-token from localStorage
        },
        body: JSON.stringify(data),
      });

      const secondApiData = await secondApiResponse.json();

      if (secondApiData.message === "Quiz created successfully") {
        setQuestions(secondApiData.practise.questions);
      } else {
        throw new Error('Quiz creation failed');
      }
    } catch (error) {
      console.error("Error fetching questions:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allAnswered = Object.values(answers).every(answer => answer.trim() !== '');
    if (!allAnswered) {
        alert('Please fill in all answers before submitting.');
        return;
    }

    const responsesText = questions.map((question, index) => {
        return `Question ${index + 1} was "${question}" and the answer given was "${answers[question]}"`;
    }).join(', ');

    console.log('Responses Text:', responsesText);

    setLoading(true);
    setError(null);
    setShowModal(true); // Show the modal when submission starts

    try {
        const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4-2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
                'x-rapidapi-key': 'e2cfdcdb72msh6256572674abedep1c0601jsn7e39e3a281b2',
            },
            body: JSON.stringify({
                "messages": [
                    {
                        "role": "user",
                        "content": `You are an AI teacher for students in grades 5-12. Recently, you assigned a test to a student, which included ten questions. Evaluate the assignment based on the answers provided and award marks according to the following criteria: if the answer is accurate, assign 10 marks; if the answer is undefined or lacks knowledge or incorrect, assign 0 marks. The questions and corresponding answers are as follows: ${responsesText} After evaluating this assignment, provide the total marks obtained out of 100, returning only the number of marks with no additional text or explanation.`
                    }
                ],
                "temperature": 0.9,
                "max_tokens": 1024
            }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const apiData = await response.json();
        
        await addMarksToDatabase("Practice Quiz", apiData.result);

        // Close the loading modal and show evaluation success modal
        setShowModal(false);
        setEvaluationModal(true);

    } catch (error) {
        console.error('Submission error:', error);
        setError('Failed to submit and evaluate your answers. Please try again.');
        setShowModal(false); // Close the modal if an error occurs
    } finally {
        setLoading(false);
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
        setError('Failed to add marks to the database. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mb-6 mx-auto p-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 rounded-lg shadow-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">ShikshaPath Practice Quiz</h2>

      <form onSubmit={handleSubmit}>
        {topics.map((topic, index) => (
          <div key={index} className="mb-6">
            <input
              type="text"
              placeholder="Enter a topic"
              value={topic}
              onChange={(e) => handleTopicChange(index, e.target.value)}
              className="w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-purple-600 border-none text-black"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addTopic}
          className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-md mb-4 transition duration-200 ease-in-out"
        >
          Add Another Topic
        </button>

        <button
          type="button"
          onClick={fetchQuestions}
          className={`w-full p-3 rounded-md mb-4 transition duration-200 ease-in-out ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'}`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Fetch Questions"}
        </button>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {questions.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Answer the Questions Below:</h3>
            {questions.map((question, index) => (
              <div key={index} className="mb-6">
                <label className="block text-lg font-medium mb-2">{question}</label>
                <input
                  type="text"
                  onChange={(e) => handleAnswerChange(question, e.target.value)}
                  className="w-full p-3 rounded-md shadow-md focus:ring-2 focus:ring-purple-600 border-none text-black"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-md transition duration-200 ease-in-out"
            >
              Submit Answers
            </button>
          </div>
        )}
      </form>

      {/* Modal for Submission Progress */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-black">
            <p className="text-lg font-semibold">Thank You for your Response.</p>
            <p>Hold on while we are evaluating your marks...</p>
          </div>
        </div>
      )}

      {/* Modal for Evaluation Completion */}
      {evaluationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-black">
            <p className="text-lg font-semibold">Your marks are evaluated successfully!</p>
            <p>Go and check it in the progress section.</p>
            <button
              onClick={() => setEvaluationModal(false)}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Practice;

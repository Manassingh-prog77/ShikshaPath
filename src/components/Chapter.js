import React, { useState } from 'react';

const Chapter = () => {
  const [step, setStep] = useState(1); // To manage the step in the process
  const [subject, setSubject] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [topics, setTopics] = useState(['']); // Start with one empty topic field
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0); // Track current topic
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false); // For quiz loading state
  const [modalIsOpen, setModalIsOpen] = useState(false); // For modal visibility
  const [quizCreationMessage, setQuizCreationMessage] = useState(''); // Message for quiz creation status


  const subjects = ['Science', 'Social Science', 'Computer Science', 'General Knowledge']; // Example subjects

  const handleAddTopic = () => {
    setTopics([...topics, '']);
  };

  const handleTopicChange = (index, value) => {
    const updatedTopics = topics.map((topic, idx) => (idx === index ? value : topic));
    setTopics(updatedTopics);
  };

  const fetchTopicExplanation = async (topic) => {
    setLoading(true);

    try {
      const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'x-rapidapi-key': '654f520276msh6aa0b01241a3bd5p126cd1jsn48a5b9ce1770',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: `You are a ${subject} teacher. Please explain Chapter ${chapterName}: "${topic}" in a way that is understandable for a student in grades 5-12. Include key points and examples.`,
            },
          ],
          temperature: 0.9,
          max_tokens: 1024,
        }),
      });

      const data = await response.json();
      if (data.status && data.result) {
        setExplanation(data.result);
      } else {
        setExplanation('Failed to retrieve explanation.');
      }
    } catch (error) {
      console.error('Error fetching explanation:', error);
      setExplanation('An error occurred while fetching the explanation.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextTopic = () => {
    const nextIndex = currentTopicIndex + 1;
    if (nextIndex < topics.length) {
      setCurrentTopicIndex(nextIndex);
      fetchTopicExplanation(topics[nextIndex]);
    } else {
      alert('All topics have been covered.');
    }
  };

  const startStudying = () => {
    if (!chapterName || topics.length === 0 || !topics[0]) {
      alert('Please enter the chapter name and at least one topic.');
      return;
    }
    setStep(3); // Move to explanation step
    fetchTopicExplanation(topics[0]); // Fetch explanation for the first topic
  };

  const handleQuizRequest = async (topic) => {
    setQuizLoading(true);
    setModalIsOpen(true);

    try {
      const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'x-rapidapi-key': '654f520276msh6aa0b01241a3bd5p126cd1jsn48a5b9ce1770',
        },
        body: JSON.stringify({
          "messages": [
            {
              "role": "user",
              "content": `Create a list of 10 questions based on the topic ${topic} for students from class 5 to 12. Format the response strictly as valid JSON with a key questions, containing an array of strings. Each string should represent one question. Ensure the response is well-structured and properly formatted.dont give  Unexpected non-whitespace character in response array`
            }
          ],
          "temperature": 0.9,
          "max_tokens": 1024
        }        
        ),
      });

      const data = await response.json();
      console.log('Quiz data response:', data); // Log the response from the API

      // Send the quiz data to the local API
      const authToken = localStorage.getItem('authToken');
      const apiResponse = await fetch('http://localhost:5000/api/study/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': authToken, // Pass the auth token
        },
        body: JSON.stringify(data), // Pass the quiz data from the previous response
      });

      const apiData = await apiResponse.json();
      if (apiData.message) {
        setQuizCreationMessage('Quiz created successfully! Go and check the assignment section. The deadline for submission of assignment is tomorrow.');
      } else {
        setQuizCreationMessage('Failed to create quiz.');
      }
    } catch (error) {
      console.error('Error fetching quiz data:', error);
      setQuizCreationMessage('An error occurred while creating the quiz.');
    } finally {
      setQuizLoading(false);
    }
  };


  const handleUnderstandClick = () => {
    handleQuizRequest(topics[currentTopicIndex]); // Request quiz for the current topic
  };

  return (
    <div className="h-[75vh] overflow-auto p-6 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg shadow-lg text-center">
      {step === 1 && (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Select a Subject</h1>
          <div className="mb-4">
            {subjects.map((subj) => (
              <button
                key={subj}
                className={`mx-2 px-4 py-2 rounded-full text-white font-bold ${
                  subject === subj ? 'bg-purple-600' : 'bg-blue-500'
                } hover:bg-blue-600 transition duration-300`}
                onClick={() => {
                  setSubject(subj);
                  setStep(2);
                }}
              >
                {subj}
              </button>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Enter Chapter Name and Topics</h1>
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the chapter name"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Topics to Study:</h2>
            {topics.map((topic, index) => (
              <div key={index} className="mb-2 flex">
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Topic ${index + 1}`}
                  value={topic}
                  onChange={(e) => handleTopicChange(index, e.target.value)}
                />
              </div>
            ))}
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
              onClick={handleAddTopic}
            >
              + Add Another Topic
            </button>
          </div>

          <button
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300"
            onClick={startStudying}
          >
            Start Studying
          </button>
        </>
      )}

      {step === 3 && (
        <>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Explanation for: {topics[currentTopicIndex]}
          </h1>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md text-left">
            {loading ? (
              <p>Loading explanation...</p>
            ) : (
              <p className="text-gray-800 whitespace-pre-line leading-relaxed">{explanation}</p>
            )}
          </div>
          {currentTopicIndex < topics.length - 1 && (
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-blue-600 transition duration-300"
              onClick={handleNextTopic}
            >
              Next Topic
            </button>
          )}
          <button
            className="bg-yellow-500 text-white font-bold py-2 px-4 mt-4 rounded-full hover:bg-yellow-600 transition duration-300"
            onClick={handleUnderstandClick} // Call the function to request the quiz
          >
            I have Understood
          </button>
        </>
      )}

      {/* Modal for loading quiz data */}
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Creating Assignment...</h2>
            {quizLoading ? (
              <p>Hold on for a while your Assignment is being prepared!</p>
            ) : (
              <p>Assignment is ready!Check it Out on Assignment section Last date to submit Assignment is Tommorow</p>
            )}
            <button
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              onClick={() => setModalIsOpen(false)} // Close the modal
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chapter;

import React, { useState } from "react";
import Mission from "../defaults/Mission";

const ContestComponent = () => {
  // State management
  const [selectedClass, setSelectedClass] = useState(null);
  const [showQuestions, setShowQuestions] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Default questions for different classes (sample data)
  const classQuestions = {
    5: [
      { question: "What is the capital of India?" },
      { question: "Define noun with an example." },
      { question: "What is H2O?" },
      { question: "What is the process of photosynthesis?" },
      { question: "Who wrote the Indian National Anthem?" },
      { question: "What are the three states of matter?" },
      { question: "Explain the concept of gravity." },
      { question: "What are the planets in our solar system?" },
      { question: "What is the formula of water?" },
      { question: "What is an adjective?" },
      { question: "Who is the President of India?" },
      { question: "What are the continents of the world?" },
      { question: "Explain how rain is formed." },
      { question: "What are natural resources?" },
      { question: "What is democracy?" },
    ],
    6: [
      { question: "Name the layers of the Earth." },
      { question: "What is photosynthesis?" },
      { question: "What is an adjective?" },
      { question: "Who invented the lightbulb?" },
      { question: "What is the boiling point of water?" },
      { question: "What are renewable and non-renewable resources?" },
      { question: "Explain the water cycle." },
      { question: "What is evaporation?" },
      { question: "Who is the Prime Minister of India?" },
      { question: "What is Newton's First Law of Motion?" },
      { question: "What is the Taj Mahal?" },
      { question: "What is deforestation?" },
      { question: "Name a type of simple machine." },
      { question: "What is a pronoun?" },
      { question: "What is the speed of light?" },
    ],
    // Add more questions for classes 7-12 similarly...
      "7": [
        { "subject": "Social Science", "question": "What are the main causes of the Indian Revolt of 1857?" },
        { "subject": "Science", "question": "Explain the process of evaporation and condensation with an example." },
        { "subject": "English", "question": "Write a paragraph using three different types of conjunctions." },
        { "subject": "Social Science", "question": "What is the difference between weather and climate?" },
        { "subject": "Science", "question": "Define acids and bases and give two examples of each." },
        { "subject": "English", "question": "What are prepositions? Use them in sentences." },
        { "subject": "Social Science", "question": "Name any three physical divisions of India." },
        { "subject": "Science", "question": "What are renewable and non-renewable resources? Provide examples." },
        { "subject": "English", "question": "Write a short essay on the importance of education." },
        { "subject": "Social Science", "question": "What are the key features of the Indian Constitution?" },
        { "subject": "Science", "question": "Describe the water cycle in detail." },
        { "subject": "English", "question": "Use five different adverbs in a story." }
      ],
      "8": [
        { "subject": "Social Science", "question": "Explain the significance of the Quit India Movement." },
        { "subject": "Science", "question": "What is Newton's third law of motion? Give an example." },
        { "subject": "English", "question": "Write a formal letter to the Principal of your school requesting leave." },
        { "subject": "Social Science", "question": "What are the different types of forests found in India?" },
        { "subject": "Science", "question": "What is the difference between an element and a compound?" },
        { "subject": "English", "question": "Identify the subject and predicate in the sentence: 'The sun rises in the east.'" },
        { "subject": "Social Science", "question": "What are the causes and effects of air pollution?" },
        { "subject": "Science", "question": "Explain the process of photosynthesis in plants." },
        { "subject": "English", "question": "Write an essay on your favorite book." },
        { "subject": "Social Science", "question": "What are the different types of government?" },
        { "subject": "Science", "question": "Define potential and kinetic energy with examples." },
        { "subject": "English", "question": "Rewrite the following sentence in passive voice: 'The chef prepared a delicious meal.'" }
      ],
      "9": [
        { "subject": "Social Science", "question": "What were the main outcomes of the French Revolution?" },
        { "subject": "Science", "question": "Explain the structure of an atom." },
        { "subject": "English", "question": "Write a letter to a friend describing your last vacation." },
        { "subject": "Social Science", "question": "What is globalization? Discuss its impact on developing countries." },
        { "subject": "Science", "question": "What is the law of conservation of mass? Explain with an example." },
        { "subject": "English", "question": "What are complex sentences? Write three examples." },
        { "subject": "Social Science", "question": "What is federalism? Provide examples of federal countries." },
        { "subject": "Science", "question": "What are the differences between speed and velocity?" },
        { "subject": "English", "question": "Write a narrative essay about a memorable event in your life." },
        { "subject": "Social Science", "question": "What is sustainable development? Why is it important?" },
        { "subject": "Science", "question": "Define chemical reactions and provide examples of different types." },
        { "subject": "English", "question": "Use a simile and metaphor in a short story." }
      ],
      "10": [
        { "subject": "Social Science", "question": "Discuss the main causes of World War II." },
        { "subject": "Science", "question": "What is the periodic table? How are elements classified in it?" },
        { "subject": "English", "question": "Write a formal letter to a company requesting information about their products." },
        { "subject": "Social Science", "question": "What is democracy? Discuss its features." },
        { "subject": "Science", "question": "Explain the concept of force and motion." },
        { "subject": "English", "question": "Write an essay on the role of technology in education." },
        { "subject": "Social Science", "question": "What are the differences between a monarchy and a republic?" },
        { "subject": "Science", "question": "Describe the structure and functions of the human heart." },
        { "subject": "English", "question": "Write a descriptive essay about a place you have visited." },
        { "subject": "Social Science", "question": "What is the importance of the United Nations?" },
        { "subject": "Science", "question": "What is the difference between reflection and refraction of light?" },
        { "subject": "English", "question": "What is personification? Use it in a sentence." }
      ],
      "11": [
        { "subject": "Social Science", "question": "Discuss the impact of the Industrial Revolution on society." },
        { "subject": "Science", "question": "Explain the concept of genetic inheritance." },
        { "subject": "English", "question": "Write an article on the importance of mental health." },
        { "subject": "Social Science", "question": "What is the difference between capitalism and socialism?" },
        { "subject": "Science", "question": "Describe the structure of DNA and its role in genetics." },
        { "subject": "English", "question": "Write a debate on whether social media has a positive or negative impact on society." },
        { "subject": "Social Science", "question": "What is the role of the judiciary in a democratic government?" },
        { "subject": "Science", "question": "Explain the laws of thermodynamics with examples." },
        { "subject": "English", "question": "Write an essay on the impact of climate change on the environment." },
        { "subject": "Social Science", "question": "What is globalization? Explain its advantages and disadvantages." },
        { "subject": "Science", "question": "What is quantum mechanics? Provide a brief explanation." },
        { "subject": "English", "question": "Write a speech on the importance of leadership." }
      ],
      "12": [
        { "subject": "Social Science", "question": "Discuss the key factors leading to the Cold War." },
        { "subject": "Science", "question": "Explain the theory of evolution by natural selection." },
        { "subject": "English", "question": "Write a letter to the editor about the importance of conserving natural resources." },
        { "subject": "Social Science", "question": "What is international trade? Discuss its significance for global economies." },
        { "subject": "Science", "question": "Describe the structure of a plant cell and its functions." },
        { "subject": "English", "question": "Write a critical analysis of a book or movie you recently read or watched." },
        { "subject": "Social Science", "question": "What are the major challenges faced by developing countries today?" },
        { "subject": "Science", "question": "What is the Big Bang Theory? Explain the origin of the universe." },
        { "subject": "English", "question": "Write an essay discussing the pros and cons of online education." },
        { "subject": "Social Science", "question": "What are the implications of climate change on global politics?" },
        { "subject": "Science", "question": "Describe the process of mitosis and its significance in biology." },
        { "subject": "English", "question": "Write a poem about the beauty of nature." }
      ]
    
  };

  const handleClassSelection = (cls) => {
    setSelectedClass(cls);
    setShowQuestions(true);
  };

  const handleAnswerChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleSubmit = () => {
    setShowQuestions(false);
    setTimeout(() => {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
      }, 3000); // Modal closes after 3 seconds
    }, 1000); // Redirect with modal after 1 second
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-200 py-10">
      {/* Heading */}
      <div className="text-center text-5xl font-extrabold text-blue-800 mb-10">
        Current Contests
      </div>

      {/* Contest List */}
      {!showQuestions && !selectedClass && (
        <div className="flex justify-center">
          <button
            onClick={() => setSelectedClass("contest")}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          >
            Silver Jubilee Contest
          </button>
        </div>
      )}

      {/* Class Selection */}
      {selectedClass === "contest" && !showQuestions && (
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="text-2xl font-semibold text-purple-600 mb-6">
            Select Your Class
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[5, 6, 7, 8, 9, 10, 11, 12].map((cls) => (
              <button
                key={cls}
                onClick={() => handleClassSelection(cls)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transform hover:scale-110 transition duration-300"
                >
                Class {cls}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Display Questions */}
      {showQuestions && selectedClass && (
        <div className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow-2xl mt-12 space-y-8">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
            Class {selectedClass} - Question Paper
          </h2>

          {/* Instructions */}
          <div className="bg-blue-100 p-4 rounded-lg text-center text-blue-600 font-semibold">
            Please answer all the questions below. Write your answers in the
            textboxes provided. Once you are done, click on "Submit Test" to
            finish the contest. Good luck!
          </div>

          {/* Questions */}
          <div className="space-y-6">
            {classQuestions[selectedClass].map((q, index) => (
              <div key={index} className="space-y-2">
                <p className="text-lg font-medium text-gray-800">
                  Q{index + 1}. {q.question}
                </p>
                <textarea
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="w-full p-4 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="3"
                  placeholder="Write your answer here..."
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Submit Test
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm mx-auto text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              Your Contest is successfully submitted!
            </h2>
            <p className="text-gray-700">
              Wait for the announcement of the result.
            </p>
          </div>
        </div>
      )}
      <div className="mt-6 mb-6"><Mission /></div>
      
    </div>
  );
};

export default ContestComponent;

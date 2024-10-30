import React, { useEffect, useState } from 'react';

const Syllabus = () => {
  const [syllabus, setSyllabus] = useState('');
  const [questionPaper, setQuestionPaper] = useState('');
  
  useEffect(() => {
    // Fetch syllabus from first API
    const fetchSyllabus = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/api/syllb/fetchsyllb', {
          method: 'GET',
          headers: {
            'auth-token': authToken,
          },
        });

        const data = await response.json();
        if (data.message === 'Syllabus fetched successfully') {
          const syllabusText = data.questions[0].text; // Extract the text from response
          setSyllabus(syllabusText);
          generateQuestions(syllabusText); // Call API to generate question paper
        }
      } catch (error) {
        console.error('Error fetching syllabus:', error);
      }
    };

    // Generate questions from second API
    const generateQuestions = async (syllabusText) => {
      try {
        const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4-2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
            'x-rapidapi-key': 'c40e71c832msh316ba549f07d2dep198257jsnb70b28766adc',
          },
          body: JSON.stringify({
            "messages": [
              {
                "role": "user",
                "content": "You are a teacher responsible for generating questions based on a specific syllabus for Class 7 students. The syllabus consists of three sections: Section 1 focuses on Logical Reasoning, which comprises a total of 10 questions worth 10 marks. Section 2 covers various Science topics, including Heat, Motion and Time, Electric Current and its Effects, Winds, Storms and Cyclones, Light, Acids, Bases and Salts, and Natural Resources, with a total of 35 questions worth 35 marks. Section 3 is the Achiever Section, which includes 5 higher-order thinking questions worth 15 marks. The response should include only the questions in plain text format, with each question separated by a line break represented as \n. Ensure that the output is clear, concise, and does not contain any additional information or formatting. The expected output format should look like this: Question 1?\nQuestion 2?\nQuestion 3?\n... Please provide a minimum of 10 questions.when all questions are over then also give \n at end.Don't  give any  additional text give only questions as response." 
              }
            ],
            "temperature": 0.9,
            "max_tokens": 1024
          } ),
        });

        const result = await response.json();
        setQuestionPaper(result.result); // Set the question paper
      } catch (error) {
        console.error('Error generating question paper:', error);
      }
    };

    fetchSyllabus();
  }, []);

  // Function to format the response into a readable question paper
  const formatQuestionPaper = (text) => {
    const lines = text.split('\n'); // Split by line breaks
    return lines.map((line, index) => (
      <p key={index} className="mb-2">
        {line}
      </p>
    ));
  };

  return (
    <div className="container mx-auto p-5 mt-6 mb-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-5 text-center">Syllabus-Based Question Paper</h1>

      {/* Render the question paper here */}
      <div className="text-lg leading-relaxed">
        {questionPaper ? (
          <div className="question-paper">
            {formatQuestionPaper(questionPaper)}
          </div>
        ) : (
          <p>Loading question paper...</p>
        )}
      </div>
    </div>
  );
};

export default Syllabus;

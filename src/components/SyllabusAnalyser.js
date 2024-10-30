import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tesseract from 'tesseract.js';

const SyllabusAnalyzer = () => {
  const [syllabusImage, setSyllabusImage] = useState(null);
  const [analysisGenerated, setAnalysisGenerated] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [showAnalysisModal, setShowAnalysisModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [review, setReview] = useState('');
  const [analysisText, setAnalysisText] = useState('');
  const [manualSyllabus, setManualSyllabus] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [daysToComplete, setDaysToComplete] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');

  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    setSyllabusImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async () => {
    if (syllabusImage && classLevel && daysToComplete && hoursPerDay) {
      setAnalysisGenerated(true);
      setApiResponse(null);

      const { data: { text } } = await Tesseract.recognize(syllabusImage, 'eng', {
        logger: (m) => console.log(m)
      });

      setAnalysisText(text);
      setShowAnalysisModal(true);
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const handleConfirmAnalysis = async (confirm) => {
    if (confirm) {
      const response = await fetch('https://chatgpt-42.p.rapidapi.com/conversationgpt4-2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          'x-rapidapi-key': '94c1bef389msh1a7b073af732bb6p163f01jsnde3b1d9bf323',
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'user',
              content: `I am a student of class ${classLevel}. Based on the following syllabus: "${analysisText}", I need to complete it in ${daysToComplete} days and I can dedicate ${hoursPerDay} hours a day. Kindly design a daywise schedule for me so that I can complete the syllabus with good hold over each topic.`,
            },
          ],
          temperature: 0.9,
          max_tokens: 1024,
        }),
      });

      const data = await response.json();
      setApiResponse(data);
      setShowAnalysisModal(false);
    } else {
      setAnalysisGenerated(false);
      setSyllabusImage(null);
      setAnalysisText('');
      setClassLevel('');
      setDaysToComplete('');
      setHoursPerDay('');
    }
  };

  const handleAddToSchedule = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/syllb/addSyllb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem("authToken")
        },
        body: JSON.stringify({
          "text" : analysisText
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        console.log("Schedule successfully added", result);
      } else {
        console.error("Failed to add schedule", result);
      }
    } catch (error) {
      console.error("Error while adding to schedule", error);
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleReviewSubmit = () => {
    setShowReviewModal(false);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div>
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg text-center max-w-4xl mx-auto mt-8 mb-6">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">Syllabus Analyzer</h1>
        
        <p className="text-lg text-gray-700 mb-4">
          Please ensure the uploaded syllabus image is clear for the best analysis results.
        </p>

        {!analysisGenerated ? (
          <div className="mb-8">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4 border-2 border-purple-400 rounded-lg p-2"
            />
            {syllabusImage && (
              <img
                src={syllabusImage}
                alt="Uploaded Syllabus"
                className="max-w-full h-auto mb-4"
              />
            )}
            <input
              type="text"
              value={classLevel}
              onChange={(e) => setClassLevel(e.target.value)}
              className="border-2 border-purple-400 rounded-lg p-2 mb-4 w-full"
              placeholder="Your Class Level (e.g., 10th)"
            />
            <input
              type="number"
              value={daysToComplete}
              onChange={(e) => setDaysToComplete(e.target.value)}
              className="border-2 border-purple-400 rounded-lg p-2 mb-4 w-full"
              placeholder="Number of Days to Complete the Syllabus"
            />
            <input
              type="number"
              value={hoursPerDay}
              onChange={(e) => setHoursPerDay(e.target.value)}
              className="border-2 border-purple-400 rounded-lg p-2 mb-4 w-full"
              placeholder="Hours per Day You Can Dedicate"
            />
            <button
              onClick={handleSubmit}
              className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
            >
              Submit for Analysis
            </button>
          </div>
        ) : (
          <>
            {showAnalysisModal && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
                  <h3 className="text-2xl font-bold text-purple-600 mb-4">Analyzed Syllabus</h3>
                  <p className="text-gray-700 mb-4">{analysisText}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleConfirmAnalysis(false)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Analyze Again
                    </button>
                    <button
                      onClick={() => handleConfirmAnalysis(true)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      Confirm and Continue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {apiResponse && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-purple-600 mb-4">Generated Study Schedule</h2>
                <p className="text-gray-700">
                  {apiResponse.result || 'No schedule generated.'}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setShowReviewModal(true)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Response Review
                  </button>
                  <button
                    onClick={handleAddToSchedule}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Add to My Schedule
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showAlert && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Successfully added to your schedule!
        </div>
      )}

      {showReviewModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Your Review</h3>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="border-2 border-purple-400 rounded-lg p-2 w-full h-32"
              placeholder="Write your review here..."
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleReviewSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SyllabusAnalyzer;

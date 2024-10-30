import React, { useState } from 'react';

const DoubtSolving = () => {
  const [subject, setSubject] = useState('Math');
  const [userClass, setUserClass] = useState(5); // Default class is 5
  const [chat, setChat] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isListening, setIsListening] = useState(false); // State for listening status
  const [loading, setLoading] = useState(false); // Loading status

  const handleSubjectChange = (newSubject) => {
    setSubject(newSubject);
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      const newChat = [...chat, { message: userInput, from: 'user' }];
      setChat(newChat);
      setUserInput('');
      setLoading(true); // Start loading indicator

      try {
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
                content: `You are a ${subject} teacher of class ${userClass} with lots of experience. Please clear this doubt of student ${userInput}, including key points and examples Note - Explain in brief.`,
              },
            ],
            temperature: 0.9,
            max_tokens: 1024,
          }),
        });

        const data = await response.json();

        if (data && data.result) {
          const aiResponse = { message: data.result, from: 'ai' };
          setChat([...newChat, aiResponse]);
        } else {
          const aiResponse = { message: 'Sorry, unable to resolve your doubt at this moment.', from: 'ai' };
          setChat([...newChat, aiResponse]);
        }
      } catch (error) {
        console.error('Error fetching the API:', error);
        const aiResponse = { message: 'An error occurred. Try again later.', from: 'ai' };
        setChat([...newChat, aiResponse]);
      }

      setLoading(false); // Stop loading once done
    }
  };

  const startVoiceRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Sorry, your browser does not support speech recognition.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    setIsListening(true); // Set listening state to true
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setUserInput(transcript); // Set recognized text in input
      recognition.stop();
    };

    recognition.onend = () => {
      setIsListening(false); // Stop listening when recognition ends
    };

    recognition.onerror = (event) => {
      console.error('Recognition error:', event.error);
      setIsListening(false); // Stop listening on error
    };
  };

  return (
    <div className='mb-5'>
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg text-center max-w-4xl mx-auto mt-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          Meet Your AI Tutor <i className="fas fa-robot text-yellow-500 ml-2"></i>
        </h1>

        {/* Subject selection */}
        <div className="flex justify-center mb-6">
          {['Math', 'Science', 'History', 'Language'].map((subjectOption) => (
            <button
              key={subjectOption}
              onClick={() => handleSubjectChange(subjectOption)}
              className={`px-4 py-2 m-2 rounded-lg font-semibold text-white 
              ${subject === subjectOption ? 'bg-purple-500' : 'bg-purple-300 hover:bg-purple-400'}`}
            >
              {subjectOption}
            </button>
          ))}
        </div>

        {/* Input for class level */}
        <div className="mb-4">
          <input
            type="number"
            value={userClass}
            onChange={(e) => setUserClass(e.target.value)}
            className="px-4 py-2 rounded-lg border-2 border-purple-400 focus:border-purple-600 outline-none"
            placeholder="Enter your class (1-12)"
            min="1"
            max="12"
            title="Enter your class level between 1 and 12" // Tooltip for better guidance
          />
        </div>

        {/* Chatbox */}
        <div className="bg-white rounded-lg shadow-md p-4 max-h-96 overflow-y-auto">
          {chat.length > 0 ? (
            chat.map((msg, idx) => (
              <p
                key={idx}
                className={`mb-2 text-left px-4 py-2 rounded-lg ${
                  msg.from === 'user' ? 'bg-blue-200' : 'bg-yellow-100 text-purple-600'
                }`}
              >
                <strong>{msg.from === 'user' ? 'You: ' : 'AI Tutor: '}</strong>
                {msg.message}
              </p>
            ))
          ) : (
            <p className="text-gray-500">Start by asking a question, or select a subject!</p>
          )}
        </div>

        {/* Chat input form */}
        <form onSubmit={handleChatSubmit} className="flex mt-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-grow px-4 py-2 rounded-lg border-2 border-purple-400 focus:border-purple-600 outline-none"
            placeholder="Ask me anything!"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-6 py-2 rounded-lg ml-2 hover:bg-purple-600"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Loading...' : 'Send'}
          </button>
        </form>

        {/* Controls for voice and progress */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={startVoiceRecognition}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-yellow-600"
          >
            <i className="fas fa-microphone"></i>
            <span>Voice Interaction</span>
            {isListening && <span className="ml-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>}
          </button>

          <div className="text-left">
            <h3 className="text-lg font-semibold text-purple-600">Your Progress</h3>
            <div className="bg-purple-200 rounded-full h-6 mt-2">
              <div
                className="bg-purple-500 h-6 rounded-full text-white text-sm text-center leading-6"
                style={{ width: '50%' }}
              >
                50% Completed
              </div>
            </div>
          </div>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-600"
          >
            <i className="fas fa-rocket"></i>
            <span>Take a Quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoubtSolving;

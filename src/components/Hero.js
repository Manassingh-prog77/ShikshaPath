import React, { useEffect, useState } from 'react';
import '../App.css'; // Ensure this CSS file exists

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const strings = [
    "Empowering Every Child's Learning Journey",
    "Ignite Your Learning Journey",
  ];

  useEffect(() => {
    let typingTimeout;
    const currentString = strings[currentStringIndex];

    if (displayText.length < currentString.length) {
      // Type the next character
      typingTimeout = setTimeout(() => {
        setDisplayText(currentString.substring(0, displayText.length + 1));
      }, 100); // Typing speed
    } else {
      // Pause and start deleting
      typingTimeout = setTimeout(() => {
        if (currentStringIndex < strings.length - 1) {
          setCurrentStringIndex(currentStringIndex + 1);
          setDisplayText("");
        }
      }, 2000); // Pause before moving to the next string
    }

    return () => clearTimeout(typingTimeout); // Cleanup timeout on unmount
  }, [displayText, currentStringIndex, strings]);

  return (
    <>
    <section className="bg-gray-100 text-black h-[48vh] flex flex-col justify-center items-center text-center relative overflow-hidden px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        Discover Your Learning Adventure
      </h2>
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 animate-fade-in">
        {displayText}
        <span className="animate-cursor">|</span> {/* Custom cursor */}
      </h1>
      <p className="text-lg md:text-xl mb-6 opacity-80">
        Empowering Every Student with Tailored Solutions.
      </p>
      <a
        href="/get-started"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg  hover:bg-gradient-to-l transition duration-300 transform hover:scale-110"
      >
        Get Started
      </a>
      </section>
       <section className="bg-gray-100 mt-0 text-black h-[8vh] flex flex-col justify-center items-center text-center relative overflow-hidden px-4">
      <div className="absolute  left-1/2 transform -translate-x-1/2 text-sm text-black opacity-70">
        <p className="">Join us in shaping the future of education!</p>
        <p>ShikshaPath is your path to success!</p>
      </div>
     </section>
      </>
  );
}

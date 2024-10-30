import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewUser from './Pages/NewUser';
import User from './Pages/User';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken'); // Retrieve auth token from localStorage
      
      if (token) {
        const response = await fetch('http://localhost:5000/api/auth/getuser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': token, // Pass the auth token in the header
          },
        });

        const data = await response.json();

        if (data._id) { // Check if the response indicates success and _id exists
          setIsLoggedIn(true); // Set login status to true
        } else {
          setIsLoggedIn(false); // Set login status to false if not valid
        }
      } else {
        setIsLoggedIn(false); // Set login status to false if token is not found
      }
    };

    checkAuth(); // Call the checkAuth function on component mount
  }, []);

  return (
    <>
      {!isLoggedIn ? <NewUser /> : <User />}
    </>
  );
}

export default App;

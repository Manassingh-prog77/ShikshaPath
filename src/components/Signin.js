import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    class: '',
    school: '',
    board: '',
    schoolType: '',
    favoriteSubject: '',
    goals: '',
    email: '', // New email field
    password: '', // New password field
  });
  const [alertMessage, setAlertMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigation = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare data for API call
    const userData = {
      name: formData.name,
      age: formData.age,
      class: formData.class,
      school: formData.school,
      board: formData.board,
      schoolType: formData.schoolType,
      favoriteSubject: formData.favoriteSubject,
      goals: formData.goals,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.success) {
        setAlertMessage('Your account has been successfully created!');
        setIsSubmitted(true);
        setTimeout(() => {
          navigation("/Login"); // Redirect to /login after 2 seconds
        }, 2000);
      } else if (data.error === 'A user with this email already exists') {
        setAlertMessage(data.error);
      } else {
        setAlertMessage('Unable to create account at this moment.');
      }
      
    } catch (error) {
      setAlertMessage('Unable to create account at this moment.');
    } finally {
      // Reset form data after submission
      setFormData({
        name: '',
        age: '',
        class: '',
        school: '',
        board: '',
        schoolType: '',
        favoriteSubject: '',
        goals: '',
        email: '',
        password: '',
      });
    }
  };

  const Balloon = () => {
    const balloonVariants = {
      initial: {
        y: 1000,
        opacity: 0,
      },
      animate: (i) => ({
        y: [1000, -200, -400],
        opacity: [0, 1, 1, 0],
        transition: {
          duration: 3,
          delay: i * 0.3,
          ease: 'easeInOut',
        },
      }),
    };

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}vw`,
              bottom: 0,
              width: '200px',
              height: '320px',
              backgroundImage: `url(${process.env.PUBLIC_URL}/balloon.png)`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              transform: 'translateX(-50%)',
            }}
            variants={balloonVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-blue-200 to-white min-h-screen flex items-center justify-center p-5 relative">
      {isSubmitted && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <Balloon />
          <motion.div
            className="bg-white shadow-xl rounded-lg p-4 text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-blue-700">Success!</h2>
            <p className="text-gray-600">{alertMessage}</p>
          </motion.div>
        </div>
      )}

      {/* Alert Message */}
      {alertMessage && !isSubmitted && (
        <div className="absolute top-10 z-20 w-full max-w-md mx-auto">
          <div className="bg-red-500 text-white text-center p-2 rounded-lg">
            {alertMessage}
          </div>
        </div>
      )}

      <div className="bg-white shadow-xl rounded-lg p-10 w-full max-w-3xl z-10">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          {Object.entries(formData).map(([key, value]) => (
            <div className="flex flex-col" key={key}>
              <label htmlFor={key} className="text-lg text-gray-700 mb-1">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type={key === 'age' ? 'number' : 'text'} // Change input type based on the field
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="px-4 py-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder={`Enter your ${key}`}
                required
              />
            </div>
          ))}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

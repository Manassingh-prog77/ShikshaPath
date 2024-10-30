const express = require('express');
const Quiz = require('../models/Quiz'); // Ensure to import the correct model
const fetchUser = require('../middleware/fetchUser'); // Middleware for user authentication
const router = express.Router();

// Route to create and store the quiz
router.post('/quiz', fetchUser, async (req, res) => {
    const { result, status, server_code } = req.body; // Extract result, status, and server_code from request body

    // Validate status and server_code
    if (status !== true || server_code !== 1) {
        return res.status(400).json({ message: 'Invalid quiz data', error: 'Status or server code is incorrect.' });
    }
    // Check if the result is valid JSON and extract questions
    let questions;
    try {
        // Parse the stringified result
        const parsedResult = JSON.parse(result);
        questions = parsedResult.questions;
    } catch (error) {
        // Log the error for debugging
        console.error("Error parsing result:", error.message);
        return res.status(400).json({ message: 'Invalid quiz data format.', error: error.message });
    }

    // Validate questions array (ensure at least 10 questions)
    if (!Array.isArray(questions) || questions.length < 10) {
        return res.status(400).json({ message: 'Invalid input data', error: 'At least 10 questions are required.' });
    }

    try {
        // Create a new quiz instance with user ID from fetchUser middleware
        const quiz = new Quiz({
            user: req.user.id, // Use the authenticated user's ID
            questions
        });

        // Save the quiz to the database
        await quiz.save();

        res.status(201).json({ message: 'Quiz created successfully', quiz });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create quiz', error: error.message });
    }
});


// Route to fetch all assignments (quizzes) from the database
router.get('/fetchquiz', fetchUser, async (req, res) => {
    try {
        // Retrieve all quizzes from the database
        const quizzes = await Quiz.find();

        // Check if quizzes exist
        if (!quizzes || quizzes.length === 0) {
            return res.status(404).json({ message: 'No quizzes found.' });
        }

        // Return the list of quizzes
        res.status(200).json({ message: 'Quizzes fetched successfully', quizzes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch quizzes', error: error.message });
    }
});

// Route to delete a specific quiz by ID
router.delete('/quiz/:id', fetchUser, async (req, res) => {
    const quizId = req.params.id; // Extract the quiz ID from the request parameters

    try {
        // Find the quiz by ID and ensure it belongs to the authenticated user
        const quiz = await Quiz.findOneAndDelete({ _id: quizId, user: req.user.id });

        // Check if the quiz was found and deleted
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found or you do not have permission to delete it.' });
        }

        // Return a success response
        res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete quiz', error: error.message });
    }
});



module.exports = router;

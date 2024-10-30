const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');
const Marks = require("../models/Marks");

const JWT_SECRET = "your_jwt_secret";

router.post("/addMark", fetchuser, async (req, res) => {
    const { title, marks } = req.body; // Destructure title and marks from req.body
  
    // Check if title and marks are provided
    if (!title || typeof title !== 'string' || !marks || typeof marks !== 'string') {
      return res.status(400).json({ error: "Invalid input. Title must be a string and marks must be a string." });
    }
  
    try {
      const newMark = new Marks({
        user: req.user.id,
        title: title,
        marks: marks,
      });
      
      await newMark.save();
      console.log('Mark saved successfully:', newMark);
      return res.status(201).json({ message: "Mark added successfully", newMark });
    } catch (error) {
      console.error('Error saving mark:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  router.get('/fetchmarks', fetchuser, async (req, res) => {
    try {
        // Retrieve all quizzes from the database
        const questions = await Marks.find();

        // Check if quizzes exist
        if (!questions || questions.length === 0) {
            return res.status(404).json({ message: 'No Exam Given.' });
        }

        // Return the list of quizzes
        res.status(200).json({ message: 'Marks fetched successfully', questions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Unable to fetch Marks', error: error.message });
    }
});

module.exports = router;
  
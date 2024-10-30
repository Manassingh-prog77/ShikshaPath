const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');
const Syllabus = require('../models/Syllabus')

const JWT_SECRET = "your_jwt_secret";

router.post("/addSyllb", fetchuser, async (req, res) => {
    const {text} = req.body; // Destructure title and marks from req.body
  
    // Check if title and marks are provided
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: "Invalid type of input." });
    }
  
    try {
      const newMark = new Syllabus({
        user: req.user.id,
        text : text
      });
      
      await newMark.save();
      return res.status(201).json({ message: "Syllabus added successfully", newMark });
    } catch (error) {
      console.error('Error saving mark:', error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Route to fetch all assignments (quizzes) from the database
router.get('/fetchsyllb', fetchuser, async (req, res) => {
    try {
        // Retrieve all quizzes from the database
        const questions = await Syllabus.find();

        // Return the list of quizzes
        res.status(200).json({ message: 'Syllabus fetched successfully', questions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Error', error: error.message });
    }
});


module.exports = router;
  
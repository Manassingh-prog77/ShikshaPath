const mongoose = require('mongoose');

// Define a schema for quiz questions (in this case, just the text of the question)
const PractiseSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user', // Reference to the user who created the quiz
      required: true
    },
    questions: { 
      type: [String], // Store the questions as an array of strings (no options or correct answers)
      required: true 
    },
    title: { 
      type: String, 
      required: true, 
      default: 'Practise', // Fixed instruction statement
    },
    instructions: { 
      type: String, 
      default: 'Answer all the questions below', // Fixed instruction statement
      required: true 
  },
  dueDate: { // New field for the due date
      type: Date,
      default: () => Date.now() + 24 * 60 * 60 * 1000, // Default to 1 day from now
  }
});

// Create a Quiz model based on the schema
const Practise = mongoose.model('Practise', PractiseSchema);

module.exports = Practise;

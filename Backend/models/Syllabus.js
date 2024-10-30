const mongoose = require('mongoose');

// Define the schema for marks
const SyllabusSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Reference to the user who created the quiz
    required: true
}, 
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema
const Syllabus = mongoose.model('Syllabus', SyllabusSchema);

// Export the model
module.exports = Syllabus;

const mongoose = require('mongoose');

// Define the schema for marks
const marksSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  marks: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create the model from the schema
const Marks = mongoose.model('Marks', marksSchema);

// Export the model
module.exports = Marks;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number, // Age as a number
    required: true,
  },
  class: {
    type: Number, // Class level (1 to 12) as a number
    required: true,
  },
  school: {
    type: String, // School name
    required: true,
  },
  board: {
    type: String, // Board name (e.g., CBSE, ICSE)
    required: true,
  },
  schoolType: {
    type: String, // E.g., Public, Private
    required: true,
  },
  favoriteSubject: {
    type: String, // E.g., Math, Science, History
    required: true,
  },
  goals: {
    type: String, // Short-term or long-term goals
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

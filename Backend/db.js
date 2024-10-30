const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://lgtv29359:FIvj0cAsMPDO1wKq@base1.7sjr5.mongodb.net/?retryWrites=true&w=majority&appName=Base1"

const connectToMongo = async() =>{
   try{
    mongoose.connect(mongoURI);
    console.log("connected MongoDb successfully");
   } catch (err){
    console.error("Connection error:", err);
   }
};

module.exports = connectToMongo;
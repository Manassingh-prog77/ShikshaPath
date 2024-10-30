const mongoose = require('mongoose');

const mongoURI = "your mongoose Url"

const connectToMongo = async() =>{
   try{
    mongoose.connect(mongoURI);
    console.log("connected MongoDb successfully");
   } catch (err){
    console.error("Connection error:", err);
   }
};

module.exports = connectToMongo;

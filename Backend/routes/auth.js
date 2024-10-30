const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser')

const JWT_SECRET = "your_jwt_secret";

// POST request to create a new user
router.post("/createUser", [
    // Validating input fields
    body("name", "Enter a valid Name").isLength({ min: 3 }),
    body("age", "Age must be a number").isInt({ min: 5, max: 100 }),
    body("class", "Class must be between 1 and 12").isInt({ min: 1, max: 12 }),
    body("school", "Enter a valid school name").isLength({ min: 2 }),
    body("board", "Enter a valid board name").isLength({ min: 2 }),
    body("schoolType", "School type should be either 'Public' or 'Private'"),
    body("favoriteSubject", "Enter a valid favorite subject").isLength({ min: 2 }),
    body("goals", "Goals must be at least 10 characters long").isLength({ min: 3 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be minimum 5 characters").isLength({ min: 5 }),
  ], 
  async (req, res) => {
    let success = false;
    
    // Validate the request body for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try {
      // Check if a user already exists with this email
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "A user with this email already exists", success });
      }

      // Hash the password before saving the user
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user with the provided details
      user = await User.create({
        name: req.body.name,
        age: req.body.age,
        class: req.body.class,
        school: req.body.school,
        board: req.body.board,
        schoolType: req.body.schoolType,
        favoriteSubject: req.body.favoriteSubject,
        goals: req.body.goals,
        email: req.body.email,
        password: secPass, // Store hashed password
      });

      // Payload for JWT
      const data = {
        user: {
          id: user.id
        }
      };

      // Generate JWT for the user
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;

      // Send the auth token in response
      res.json({ authToken, success });
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ error: "Internal Server Error", success });
    }
  }
);

//Authenticate a User
//Route - 2 => Login with your Credentials

router.post("/login",
    [
      body("email", "Enter a valid Email").isEmail(),
      body("password", "Password cannot be blank").exists(),
    ], async (req, res) => {
      let success = false;
        //If there are errors,return Bad requests and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({success, errors: errors.array() });
        } 

        const {email, password} = req.body;
        try {
            let user = await User.findOne({email});
            if(!user){
                return res.status(400).json({success, error: "Please try to Login with correct credentials"});
            }

            const passwordCompare = await bcrypt.compare(password, user.password);
            if(!passwordCompare){
                return res.status(400).json({success, error: "Please try to Login with correct credentials"});
            } 

            const data  = {
                user:{
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET);
            success = true;

            res.json({success, "authtoken": authtoken});

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error").json(success);
        }
})

//Route- 3 Get logged User Details 

router.post("/getuser", fetchuser, async (req, res) => {

    try {
        let userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.send(user);
    } catch (error) {
                console.error(error.message);
                res.status(500).send("Internal Server Error");
            }
    })

module.exports = router;

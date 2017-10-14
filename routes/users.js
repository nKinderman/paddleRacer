// Import Modules
const express = require('express');  // Node.js web framework
const router = express.Router();  // Express router creation
const passport = require('passport'); // authentication
const jwt = require('jsonwebtoken'); // JSON web token implementation

// DB configuration
const config = require('../config/database');

// User model
const User = require('../models/user');

// Register route
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  // Call addUser function
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg: 'Failed to register user'})
    }
    else{
      res.json({success: true, msg: 'User registered'})
    }
  });
});

// Authenticate route
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  // Call getUserByUsername function
  User.getUserByUsername(username, (err, user) =>{
    if(err) throw err;
    if(!user){
      return res.json({
        success: false,
        msg:"User not found"
      });
    }

    // Call comparePassword function
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        // create JWT
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email
          }
        });
      }
      else{
        return res.json({
          success: false,
          msg:"Wrong Password"
        });
      }
    });
  });
});

// Profile route
router.get('/Profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

// Export router
module.exports = router;

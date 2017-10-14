// User Model plus functions 

// Import Modules
const mongoose = require('mongoose');  // MongoDB framework
const bcrypt = require('bcryptjs'); // Password hashing

// DB configuration
const config = require('../config/database');

// User schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// User model
const User = module.exports = mongoose.model('User', UserSchema);

// Extract user by id
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

// Extract user by username
module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

// Add user to DB
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    // generate random salt
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      // Store hashed password in DB
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    })
  });
}

// Password correlation
module.exports.comparePassword = function(candidatePassword, hash, callback){
  // Load hash from password in DB.
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

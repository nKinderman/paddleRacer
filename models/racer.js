// Race model plus functions 

// Import Modules
const mongoose = require('mongoose');  // MongoDB framework

// DB configuration
const config = require('../config/database');

// Racer schema
const RacerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  hometown:{
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  race: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Race"
    }      
  }
});

// Race model export
const Racer = module.exports = mongoose.model('Racer', RacerSchema);

//Add racer to DB
module.exports.addRacer = function(newRacer, callback){
  newRacer.save(callback);
}

// Extract race by id
module.exports.getRacerById = function(racerId, callback){
  Racer.findById(racerId, callback);
}

// // Update race on DB
module.exports.updateRacer = function(editRacer, callback){
  editRacer.save(callback);
}

// Delete race from DB
module.exports.deleteRacer = function(racerId, callback){
  Racer.findByIdAndRemove(racerId, callback);
}
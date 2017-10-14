// Race model plus functions 

// Import Modules
const mongoose = require('mongoose');  // MongoDB framework

// DB configuration
const config = require('../config/database');

// Race schema
const RaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  cost: {
    type: Number,
    required: true
  },
  author: {
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    username: String
  },
  racers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Racer"
    }
  ]
});

// Race model export
const Race = module.exports = mongoose.model('Race', RaceSchema);

// Add race to DB
module.exports.addRace = function(newRace, callback){
  newRace.save(callback);
}

// Extract race by id
module.exports.getRaceById = function(id, callback){
  Race.findById(id, callback);
  // Race.findById(id).populate("racers").exec(function(callback){
  // });
}

// Update race on DB
module.exports.updateRace = function(editRace, callback){
  editRace.save(callback);
}

// Delete race from DB
module.exports.deleteRace = function(raceId, callback){
  Race.findByIdAndRemove(raceId, callback);
}


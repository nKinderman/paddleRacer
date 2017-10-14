// Import Modules
const express = require('express');  // Node.js web framework
const router = express.Router();  // Express router creation
const passport = require('passport'); // authentication
const jwt = require('jsonwebtoken'); // JSON web token implementation

// DB configuration
const config = require('../config/database');

// Race model
const Race = require('../models/race');

// Race index route
router.get('/', (req, res, next) => {
    // res.send('Race Index Works!');
    Race.find({}, (err, allRaces) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(allRaces);
        }
    })
});

// New race form route
router.get('/new', (req, res, next) => {
});

// Create new race route
router.post('/', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    let newRace = new Race ({
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        image: req.body.image,
        description: req.body.description,
        cost: req.body.cost,
        author: {
            id: req.user._id,
            username: req.user.username
        }
    });

    // Call addRace function
    Race.addRace(newRace, (err, race) => {
        if(err){
            res.json({success: false, msg: 'Failed to add race'})
          }
          else{
            res.json({success: true, msg: 'Race added'})
          }
    });
});

// Show race route 
router.get('/:id', (req, res, next) => {
    
    const id = req.params.id;

    // Race.findById(id, callback);
    Race.findById(id).populate("racers").exec(function(err, race){
        if(err){
            console.log(err);
        }
        else{
            res.json(race);
        }
    });

    // // Call getRaceById function
    // Race.getRaceById(id, (err, race) =>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.json(race);
    //         console.log(race.racers.email);
    //     }
    // });
});

// Update race route 
router.put('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const id = req.params.id;

    Race.getRaceById(id, (err, race) =>{
        if(err){
            console.log(err)
        }
        else{
            race.name = req.body.name,
            race.date = req.body.date,
            race.location = req.body.location,
            race.image = req.body.image,
            race.description = req.body.description
            race.cost = req.body.cost

            // Call Race Update Function 
            Race.updateRace(race, (err, race) => {
                if(err){
                    console.log(err)
                    res.json({
                        success: false, 
                        msg: 'Failed to update race'
                    });
                }
                else{
                    res.json({
                        success: true, 
                        msg: 'Race updated'
                    });
                }
            });
        }  
    });
    
});

// Update race route

// Delete race route
router.delete('/:id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const raceId = req.params.id;
    const userId = req.user._id;

    Race.getRaceById(raceId, (err, race) =>{
        if(err){
            console.log(err)
        }
        else{
            if(race.author.id.equals(userId)){
                // Call Race Delete Function 
                Race.deleteRace(raceId, (err, race) => {
                    if(err){
                        res.json({
                            success: false, 
                            msg: 'Failed to delete race'
                        });
                    }
                    else{
                        res.json({
                            success: true, 
                            msg: 'Race deleted'
                        });
                    }
                });
            }
            else{
                res.json({
                    success: false,
                    msg:"You do not have permission to do that"
                });
            } 
        }  
    });
});

// Export router
module.exports = router;

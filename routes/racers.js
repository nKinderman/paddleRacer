// Import Modules
const express = require('express');  // Node.js web framework
const router = express.Router({mergeParams: true});  // Express router creation
const passport = require('passport'); // authentication
const jwt = require('jsonwebtoken'); // JSON web token implementation

// DB configuration
const config = require('../config/database');

// Racer model
const Racer = require('../models/racer');

// Race model
const Race = require('../models/race');

// Racer index route (used for development)
router.get('/', (req, res, next) => {
    // res.send('Race Index Works!');
    Racer.find({}, (err, allRacers) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(allRacers);
        }
    })
});

// Create new racer route
router.post('/', (req, res, next) => {
    const raceId = req.params.id;

    // Find race by id
    Race.getRaceById(raceId, (err, race) => {
        if(err){
            console.log(err)
        }
        else{
            let newRacer = new Racer ({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                hometown: req.body.hometown,
                age: req.body.age,
                gender: req.body.gender,
                class: req.body.class
            });

            newRacer.race.id = raceId;

            // Add racer to DB
            Racer.addRacer(newRacer, (err, racer) => {
                if(err){
                 console.log(err);
                }
                else{
                    //Append racer id to race 
                    race.racers.push(racer);
                    race.save();
                    res.json({success: true, msg: 'Racer added'})
                }  
            });
        }  
    });
});

// Show racer route
router.get('/:racer_id', (req, res, next) => {
    
    const id = req.params.racer_id;

    // Call getRaceById function
    Racer.getRacerById(id, (err, racer) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(racer);
        }
    });
});

// Update racer route 
router.put('/:racer_id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const id = req.params.racer_id;

    Racer.getRacerById(id, (err, racer) => {
        if(err){
            console.log(err)
        }
        else{
            racer.firstName = req.body.firstName,
            racer.lastName = req.body.lastName,
            racer.email = req.body.email,
            racer.phone = req.body.phone,
            racer.hometown = req.body.hometown,
            racer.age = req.body.age,
            racer.gender = req.body.gender,
            racer.class = req.body.class

            // Call Race Update Function 
            Racer.updateRacer(racer, (err, racer) => {
                if(err){
                    console.log(err)
                    res.json({
                        success: false, 
                        msg: 'Failed to update racer'
                    });
                }
                else{
                    res.json({
                        success: true, 
                        msg: 'Racer updated'
                    });
                }
            });
        }  
    });
    
});

// Delete race route
router.delete('/:racer_id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const racerId = req.params.racer_id;
    const raceId = req.params.id;
    
    // Find race by id
    Race.getRaceById(raceId, (err, race) => {
        if(err){
            console.log(err)
        }
        else{
            Racer.getRacerById(racerId, (err, racer) =>{
                if(err){
                    console.log(err)
                }
                else{
                    if(racer.race.id.equals(raceId)){
                        // Call Racer delete function 
                        Racer.deleteRacer(racerId, (err, racer) => {
                            if(err){
                                res.json({
                                    success: false, 
                                    msg: 'Failed to delete race'
                                });
                            }
                            else{
                                //Delete racer id from race 
                                race.racers.pull(racer);
                                race.save();
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
                            msg:"Something went wrong!"
                        });
                    } 
                }  
            });
        }  
    });
});

// Export router
module.exports = router;

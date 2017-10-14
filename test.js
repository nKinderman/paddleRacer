// Delete race from DB
module.exports.deleteRace = function(raceId, callback){
    Race.findByIdAndRemove(raceId, callback);
  }
  
  // Check race ownership
  module.exports.checkRaceOwnerShip = function(raceId, userId, callback, next){
    // Call getRaceById function
    Race.getRaceById(raceId, (err, race) =>{
      if(err){
          console.log(err);
      }
      else{
          if(race.author.id.equals(userId)){
            next();
          }
          else{
            return res.json({
              success: false,
              msg:"You do not have permission to do that"
            });
          }
      }
  });
  }

  // Delete race route
router.delete('/id', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    const raceId = req.params.id;
    const userId = req.user._id;

    // Call checkRaceOwnership function
    Race.checkRaceOwnership(raceId, userId, (err, race), next => {
        if(!success){
            res.json({
                success: false,
                msg:"You do not have permission to do that"
            });
        }
        else{
            // Call Race Delete Function 
            Race.deleteRace(raceId, (err) => {
                if(err){
                    res.json({success: false, msg: 'Failed to delete Race'})
                }
                else{
                    res.json({success: true, msg: 'Race deleted'})
                }
            })
        }
    });
});
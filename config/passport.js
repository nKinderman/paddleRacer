// Import modules
const JwtStrategy = require('passport-jwt').Strategy; // authentication for web tokens
const ExtractJwt = require('passport-jwt').ExtractJwt;  // retrieve JWT

// User model
const User = require('../models/user');

// DB configuration
const config = require('../config/database');

// passport authentication 
module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.getUserById(jwt_payload._doc._id, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        return done(null, user);
      }
      else{
        return done(null, false);
      }
    });
  }));
}

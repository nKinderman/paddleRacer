// Import modules
const express = require('express');  // Node.js web framework
const path = require('path');  // Utility for files and directory access
const bodyParser = require('body-parser');  // Parser for JSON
const cors = require('cors'); // Cross origin resource sharing
const passport = require('passport'); // authentication
const mongoose = require('mongoose'); // MongoDB framework

// DB configuration
const config = require('./config/database');

// Connect to database
mongoose.Promise = global.Promise;
mongoose.connect(config.database);

// Connection confirmation
mongoose.connection.on('connected', () => {
  console.log('Conected to database ' + config.database);
});

// Connection error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Assign application to Express
const app = express();

// Import user routes
const users = require('./routes/users');

// Import race routes
const races = require('./routes/races');

// Import racer routes
const racers = require('./routes/racers');

// Port number
const port = process.env.PORT || 8080;

// Cross origin resource sharing middleware
app.use(cors());

// // Set static folder for Angular files
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser middleware
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize()); // start passport
app.use(passport.session()); // start login session

// Passport configuration
require('./config/passport')(passport);

// Utilize users routes
app.use('/api/users', users);

// Utilize races routes
app.use('/api/races', races);

// Utilize racers routes
app.use('/api/races/:id/racers', racers);

// Index route (non Angular)
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});

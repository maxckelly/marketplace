const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3333;
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Imported Files
const usersRoutes = require('./routes/usersRoutes.js');
app.use('/users', usersRoutes);
const { authenticate, checkUser } = require('./middleware/auth');
const mongoURI = 'mongodb://localhost/marketplace';

// Below connects to database
mongoose.connect(mongoURI, {useNewUrlParser: true}, (err) => {
  if (err) {
    return console.log(`Error: ${err}`);
  } else {
    console.log("Connected to mongoDB")
  };
});

// The below is then saying if they're logged in send back a successful message
app.post('/login', express.json(), checkUser, (req, res) => {
  res.send('Successfully accessing this endpoint');
});

app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});
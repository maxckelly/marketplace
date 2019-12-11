const express = require('express');
const app = express();
const PORT = 3333;
const bodyParser = require('body-parser');

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Imported Files
const usersRoutes = require('./controllers/usersRoutes.js');
app.use('/users', usersRoutes);
const { authenticate, checkUser } = require('./middleware/auth');



// The below is then saying if they're logged in send back a successful message
app.post('/login', express.json(), checkUser, (req, res) => {
  res.send('Successfully accessing this endpoint');
});

app.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});
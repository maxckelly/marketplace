const mongoose = require('mongoose');
const User = require('./../models/usersData');
const crypto = require('crypto');

// Below function creates a new user and increments the id
async function newUser(req, res) {

  let { username, password, role } = req.body;

  // The below encrypts the password and hashes it in a base64
  password = crypto.createHash('sha256').update(password).digest('base64');

  // The below creates the users and increments the id
  try {
    const user = await User.find({}).sort({id: -1 }).limit(1)
    
    // The below manages the id increment. The first if handles if there is no users in the database 
    if (user.length > 0) {
      console.log(user);
      const newUser = await User.create({ id: user[0].id + 1, username, password, role });
      res.send(newUser)
    } else if (user) {
      const newUser = await User.create({ id: 1, username, password, role });
      res.send(newUser)
    }
  } catch(err) {
    res.status(500).send({
      msg: 'Error has occurred'
    })
  };
};

module.exports = {newUser};
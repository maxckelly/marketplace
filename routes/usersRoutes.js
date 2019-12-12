const express = require('express');
const Joi = require('joi');
const User = require('./../models/usersData');
const router = express.Router();

// Imported Files
const {users, newUser, updateFile} = require('../controllers/users.js')

// Routes
router.get('/', (req, res) => {
  User.find({}).then((allUsers) => {
    console.log(allUsers);
    res.send(allUsers);
  }).catch((err) => res.json(err))
});

router.post('/create', (req, res) => {
  newUser(req, res);
  return res;
});

module.exports = router;
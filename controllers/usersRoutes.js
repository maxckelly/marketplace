const express = require('express');
const Joi = require('joi');
const router = express.Router();

// Imported Files
const {users, newUser, updateFile} = require('../models/usersData.js')

// Routes
router.get('/', (req, res) => {
  return res.send(users);
});

router.post('/create', (req, res) => {
  newUser(req, res);
  return res;
});

module.exports = router;
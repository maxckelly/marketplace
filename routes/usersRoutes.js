const express = require('express');
const router = express.Router();

// Imported Files
const {newUser, allUsers, getOneUser} = require('../controllers/users.js')

// Routes

router.get('/', allUsers);
router.post('/create', newUser);
router.get('/:id', getOneUser);

module.exports = router;
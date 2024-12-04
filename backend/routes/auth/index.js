const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Correct path to User model

// Route to add a user
// ========================================
// routers
const addUser = require('./addUser');
const allUsers = require('./allUsers');

// use routers
router.use('/', addUser);
router.use('/', allUsers);

// ========================================

// Route to fetch all users

module.exports = router;

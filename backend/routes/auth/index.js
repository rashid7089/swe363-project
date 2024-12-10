const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Correct path to User model

// Route to add a user
// ========================================
// routers

const createUser = require('./createUser');
const loginUser = require('./login');
const logoutUser = require('./logout');
const allUsers = require('./allUsers');
const userProfile = require('./profile');
const updateProfile = require('./updateProfile');
const deleteUser = require('./deleteUser');
const changePassword = require('./changePassword');

// use routers
router.use('/register', createUser);
router.use('/login', loginUser);
router.use('/logout', logoutUser);
router.use('/all', allUsers);
router.use('/profile', userProfile);
router.use('/update', updateProfile);
router.use('/delete', deleteUser);
router.use('/change-password', changePassword);

// ========================================

// Route to fetch all users

module.exports = router;

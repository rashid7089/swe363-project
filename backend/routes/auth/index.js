const express = require('express');
const router = express.Router();
const User = require('../../models/User'); // Correct path to User model

// Route to add a user
router.post('/add', async (req, res) => {
  console.log('Request body received:', req.body);

  const { name, email, password, usertype } = req.body;

  try {
    const newUser = new User({ name, email, password, usertype });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully!', user: newUser });
  } catch (err) {
    console.error('Error saving user:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Route to fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

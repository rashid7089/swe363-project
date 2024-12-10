const express = require('express');
const User = require('../../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Exclude the password field
    const users = await User.find().select('-password'); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
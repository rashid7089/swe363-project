const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const validateEmail = require('../../functions/validations/validateEmail');
const validatePassword = require('../../functions/validations/validatePassword');

const router = express.Router();

// REGISTER ROUTES

router.post('/', async (req, res) => {
  try {
    const { name, email, password, usertype } = req.body;

    if (!name || !email || !password || !usertype) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (!validateEmail(email) || !validatePassword(password)) {
      return res.status(400).json({ message: 'Invalid email or Password' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, usertype });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
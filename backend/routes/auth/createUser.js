const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const validateEmail = require('../../functions/validations/validateEmail');
const validatePassword = require('../../functions/validations/validatePassword');

const router = express.Router();

// REGISTER ROUTES

router.post('/', async (req, res) => {
  try {
    const { name, email, password, usertype, kfupmID } = req.body;
    console.log(req.body);

    if (!name || !email || !password || !usertype || !kfupmID) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: 'Invalid email' });
    }
    if (!validatePassword(password)) {
      return res.status(400).json({ message: 'Invalid password. Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one digit' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, usertype, kfupmID });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      if (err.keyValue.kfupmID) return res.status(400).json({ message: 'KFUPM ID already exists' });
      else return res.status(400).json({ message: 'Email already exists' });
    }
    else res.status(400).json({ message: err.message });
  }
});

module.exports = router;
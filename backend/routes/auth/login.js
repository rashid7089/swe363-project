const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const router = express.Router();

// LOGIN ROUTES

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("email", email);

    if (!email || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    console.log("email: ", email);
    console.log("password: ", password);
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ errorField: "email", message: 'Email not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ errorField: "password", message: 'Invalid password' });

    const token = jwt.sign({ userId: user._id }, 'yourSecretKey', { expiresIn: '1h' });
    res.json({ token, userId:user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
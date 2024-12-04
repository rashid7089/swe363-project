var express = require('express');
var router = express.Router();

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

module.exports = router;

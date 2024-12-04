var express = require('express');
var router = express.Router();

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

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // Client should delete the token stored on the client-side
  res.status(200).json({ message: 'User logged out successfully' });
});

module.exports = router;
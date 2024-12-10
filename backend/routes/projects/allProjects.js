const express = require('express');
const Project = require('../../models/Project');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    // Exclude the password field
    const projects = await Project.find(); 
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

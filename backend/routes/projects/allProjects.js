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


// delete all projects
router.delete('/', async (req, res) => {
  try {
    await Project.deleteMany();
    res.json({ message: 'All projects deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const Project = require('../../models/Project'); // Adjust the path as necessary

// Route to fetch all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find(); // Retrieve all projects from the database
    res.status(200).json(projects); // Send the projects as a JSON response
  } catch (err) {
    console.error('Error fetching projects:', err.message);
    res.status(500).json({ error: err.message });
  }
});
router.use('/project', require('./singleProject'));

module.exports = router;

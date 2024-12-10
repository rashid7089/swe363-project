const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');

// Get a single project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (err) {
    console.error('Error fetching project:', err.message);
    res.status(500).json({ error: err.message });
  }
});
router.get('/:title', async (req, res) => {
  const { title } = req.params; // Extract the title from the URL
  try {
      const project = await Project.findOne({ title }); // Query by title
      if (!project) {
          return res.status(404).json({ message: 'Project not found' });
      }
      res.json(project); // Send the project data as JSON
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error retrieving project data' });
  }
});

module.exports = router;

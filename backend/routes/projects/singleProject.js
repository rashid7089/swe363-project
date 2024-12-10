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


module.exports = router;

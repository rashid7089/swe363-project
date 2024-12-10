var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is my project');
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

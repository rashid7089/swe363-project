const express = require('express');
const Project = require('../../models/Project');

const router = express.Router();
const demoProjects = require('./demoProjects');

// ADD PROJECT ROUTES

router.post('/', async (req, res) => {
  try {
    const { title, projectMajor, year, semester, teammatesNames, introduction, description, imagesLinks } = req.body;
    console.log(req.body);


    if (!title || !projectMajor || !year || !semester || !teammatesNames || !introduction || !description || !imagesLinks) {
      return res.status(400).json({ message: 'All fields are required' });
    }


    const newProject = new Project({
      title,
      projectMajor,
      year,
      semester,
      teammatesNames,
      introduction,
      description,
      imagesIds: imagesLinks,
    });

    
    await newProject.save();


    res.status(201).json({ message: 'Project added successfully', project: newProject });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving project' });
  }
});



// ================




router.post('/addDemoProjects', async (req, res) => {


  try {

    demoProjects.forEach(async element => {
      const { title, projectMajor, year, semester, teammatesNames, introduction, description, imagesLinks } = element;
    
      // if (!title || !projectMajor || !year || !semester || !teammatesNames || !introduction || !description || !imagesLinks) {
      //   return res.status(400).json({ message: 'All fields are required' });
      // }

      const newProject = new Project({
        title,
        projectMajor,
        year,
        semester,
        teammatesNames,
        introduction,
        description,
        imagesIds: imagesLinks,
      });

      await newProject.save();
      console.log("project done");
    });

    res.status(201).json({ message: 'all demo Projects added successfully' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving project' });
  }
});

module.exports = router;
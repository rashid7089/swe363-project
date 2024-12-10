import'/.Project.js';
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();



app.use(bodyParser.json());
app.use(cors());


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); 
  },
});

const upload = multer({ storage: storage });

app.post('/api/projects/addProject', upload.array('images', 10), async (req, res) => {
  try {
    const { title, projectMajor, year, semester, teammatesNames, introduction, description } = req.body;
    const images = req.files.map((file) => file.filename); 


    if (!title || !projectMajor || !year || !semester || !teammatesNames || !introduction || !description || !images) {
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
      imagesIds: images,
    });

    
    await newProject.save();


    res.status(201).json({ message: 'Project added successfully', project: newProject });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving project' });
  }
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

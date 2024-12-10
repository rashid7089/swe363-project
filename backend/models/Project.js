const mongoose = require('mongoose');

// Define the schema for projects
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true }, // Project title, unique
  projectMajor: { type: String, required: true }, // Project major
  year: { type: Number, required: true }, // Project year
  semester: { type: String, required: true }, // 2XX
  teammatesNames: { type: [String], required: true }, // Array of teammates' names
  introduction: { type: String, required: true }, // Project introduction
  description: { type: String, required: true }, // Project description
  imagesIds: { type: [String], required: true }, // Array of image IDs
  createdAt: { type: Date, default: Date.now }, // Automatically set creation date
});

// Create the model
const Project = mongoose.model('Project', projectSchema);

// Export the model
module.exports = Project;

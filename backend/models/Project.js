const mongoose = require('mongoose');

// Define the schema for projects
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true }, // Project title, unique
  teammatesNames: { type: [String], required: true }, // Array of teammates' names
  teammatesMajors: { type: [String], required: true }, // Array of teammates' majors
  projectDate: { type: Date, required: true }, // Project date
  description: { type: String, required: true }, // Project description
  createdAt: { type: Date, default: Date.now }, // Automatically set creation date
});

// Create the model
const Project = mongoose.model('Project', projectSchema);

// Export the model
module.exports = Project;

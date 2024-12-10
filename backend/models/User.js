const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  kfupmID: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  usertype: { type: String, enum: ['student', 'faculty'], required: true },
  relatedProject: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;

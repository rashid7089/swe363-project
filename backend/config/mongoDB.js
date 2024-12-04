const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = { connectDB }; // Export the function

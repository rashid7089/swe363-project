const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path if necessary
require('dotenv').config(); // Load environment variables

const testMongo = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI); // No need for deprecated options
    console.log('MongoDB connected successfully!');

    // Create a test user
    const testUser = new User({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: 'password123',
      usertype: 'student',
    });

    console.log('Attempting to save user:', testUser);
    await testUser.save(); // Save the user to the database
    console.log('User saved successfully:', testUser);

    // Exit the process after success
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);

    // If the error is related to unique constraints
    if (err.code === 11000) {
      console.error('Duplicate key error: A user with the same email already exists.');
    }

    process.exit(1); // Exit with error
  }
};

testMongo();

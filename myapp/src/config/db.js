const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const connectDB = async () => {
  console.log('MONGO_URI:', process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

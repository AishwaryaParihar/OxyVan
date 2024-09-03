require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes'); // Import the auth routes

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', authRoutes); // Use the auth routes under the /api endpoint

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log('Connected to DB');
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
  });

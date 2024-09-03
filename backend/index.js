require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const router = require('./router/router');
const Admin_url = process.env.ADMIN_URL


app.use(cors({
  origin: [`${Admin_url}`] ,// Update with your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieparser()); // Middleware to parse cookies
app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded bodies

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use('/api', router); 

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

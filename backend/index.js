require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieparser = require('cookie-parser')
const router = require('./router/router');

app.use(express.json()); // Middleware to parse JSON bodies

app.use(express.json());
app.use(bodyparser.json());
app.use(cookieparser());
app.use(express.urlencoded({ extended: false }));

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

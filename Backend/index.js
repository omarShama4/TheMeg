// index.js

const express = require('express');
const cors = require('cors'); // Import the cors middleware

const hackathonController = require('./controllers/hackathonController');

const app = express();
const port = 3000;

// Enable CORS middleware
app.use(cors());

// Define route to fetch hackathons
app.get('/hackathons', hackathonController.getAll);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

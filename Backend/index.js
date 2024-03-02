// index.js

const express = require('express');
const cors = require('cors'); // Import the cors middleware

const hackathonController = require('./controllers/hackathonController');
const userController = require('./controllers/userController');

const app = express();
const port = 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// Define route to fetch hackathons
app.get('/hackathons', hackathonController.getAll);
app.post('/hackathons', hackathonController.addHackathon);
app.get('/hackathons/:id', hackathonController.getHackathonById);
app.post('/sign-up', userController.signup);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

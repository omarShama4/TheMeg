// index.js

const express = require('express');
const cors = require('cors'); // Import the cors middleware

const hackathonController = require('./app/controllers/hackathonController');
const userController = require('./app/controllers/userController');
const teamController = require('./app/controllers/teamController');

const app = express();
const port = 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// Define route to fetch hackathons
app.get('/hackathons', hackathonController.getAll);
app.post('/hackathons', hackathonController.addHackathon);
app.post('/hackathons/register', teamController.createTeam);
app.get('/hackathons/teams/:hackathonId', teamController.getTeamsByHackathonId);
app.post('/sign-up', userController.signup);
app.post('/login', userController.login);
app.get('/hackathons/:id', hackathonController.getHackathonById);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

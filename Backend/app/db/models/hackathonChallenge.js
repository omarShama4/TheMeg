// models/hackathonChallenge.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Hackathon = require('../models/hackathon'); // Import the Hackathon model
const Challenge = require('../models/challenge'); // Import the Challenge model

const HackathonChallenge = sequelize.define('HackathonChallenge', {
});
module.exports = HackathonChallenge;

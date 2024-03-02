// models/hackathon.js

const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Challenge = require('../models/challenge'); // Import the Challenge model
const Team = require('../models/team'); // Import the Challenge model

const Hackathon = sequelize.define('Hackathon', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  theme: {
    type: DataTypes.STRING,
    allowNull: false
  },
  registrationDateRange: {
    type: DataTypes.STRING,
    allowNull: false
  },
  eventDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  maxTeamSize: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  maxTeams: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});
Hackathon.belongsToMany(Challenge, { through: 'HackathonChallenge'});
Hackathon.hasOne(Team);
module.exports = Hackathon;

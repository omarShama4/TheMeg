// models/team.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Hackathon = require('./hackathon'); // Import the Hackathon model
const TeamMember = require('../models/teamMember'); // Import the TeamMember model

const Team = sequelize.define('Team', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Team.belongsTo(Hackathon); // Establish one-to-one relationship
Team.hasMany(TeamMember); // Establish the reverse one-to-many relationship
Team.associate = (models) => {
    Team.belongsTo(models.Hackathon);}
module.exports = Team;


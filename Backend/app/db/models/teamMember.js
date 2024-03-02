// models/teamMember.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Team = require('./team'); // Import the Team model

const TeamMember = sequelize.define('TeamMember', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// TeamMember.belongsTo(models); // Establish the one-to-many relationship
TeamMember.associate = (models) => {
    TeamMember.belongsTo(models.Team, {
        foreignKey: "TeamId"
    });}
module.exports = TeamMember;
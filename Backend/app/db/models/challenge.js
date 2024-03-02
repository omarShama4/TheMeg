// models/challenge.js
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Hackathon = require('../models/hackathon'); // Import the Hackathon model

const Challenge = sequelize.define('Challenge', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
      },
});

Challenge.associate = (models) => {
    Challenge.belongsTo(models.Hackathon, { through: 'HackathonChallenge' });}

module.exports = Challenge;


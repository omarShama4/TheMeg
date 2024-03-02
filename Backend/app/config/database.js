// database.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('TheMeg', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost'
});

// Define your models here...

// Synchronize models with the database
sequelize.sync().then(() => {
  console.log('Database synchronized successfully.');
}).catch(err => {
  console.error('Error synchronizing database:', err);
});

module.exports = sequelize;


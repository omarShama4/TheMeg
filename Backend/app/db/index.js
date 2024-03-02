// db/index.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize('TheMeg', 'postgres', 'postgres', {
  dialect: 'postgres',
  host: 'localhost'
});

const Hackathon = require('./models/hackathon')(sequelize, Sequelize);
const Challenge = require('./models/challenge')(sequelize, Sequelize);
const HackathonChallenge = require('./models/hackathonChallenge')(sequelize, Sequelize);

Hackathon.belongsToMany(Challenge, { through: HackathonChallenge });
// Challenge.belongsToMany(Hackathon, { through: HackathonChallenge });

module.exports = {
  sequelize,
  Hackathon,
  Challenge,
  HackathonChallenge
};

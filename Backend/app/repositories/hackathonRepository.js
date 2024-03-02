// repositories/hackathonRepository.js

const Hackathon = require('../db/models/hackathon'); // Import the Hackathon model
const Challenge = require('../db/models/challenge'); // Import the Hackathon model
const Team = require('../db/models/team'); // Import the Hackathon model

class HackathonRepository {
  async getAll() {
    try {
      return await Hackathon.findAll();
    } catch (error) {
      console.error('Error fetching hackathons:', error);
      throw error;
    }
  }

  async addHackathon(hackathon) {
    try {
      // Assuming hackathonData includes challenges property with an array of challenge IDs
      const { challenges, ...hackathonData } = hackathon;
      const newHackathon = await Hackathon.create(hackathonData);
      if (challenges && challenges.length > 0) {
        await newHackathon.addChallenges(challenges);
        // Alternatively, you can use setChallenges method to replace existing associations
        // await newHackathon.setChallenges(challenges);
      }
      return newHackathon;
    } catch (error) {
      console.error('Error adding hackathon:', error);
      throw error;
    }
  }
  
  async getById(id) {
    try {
      return await Hackathon.findByPk(id, { include: [Challenge, Team] });
    } catch (error) {
      console.error('Error fetching hackathon by ID:', error);
      throw error;
    }
  }
}

module.exports = new HackathonRepository();





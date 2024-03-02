// controllers/hackathonController.js

const hackathonRepository = require('../repositories/hackathonRepository');

class HackathonController {
  async getAll(req, res) {
    try {
      const hackathons = await hackathonRepository.getAll();
      console.log(hackathons)
      res.json(hackathons);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async addHackathon(req, res) {
    try {
      const hackathon = req.body;
      const newHackathon = await hackathonRepository.addHackathon(hackathon);
      res.status(201).json(newHackathon);
    } catch (error) {
      console.error('Error adding hackathon:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async getHackathonById (req, res) {
    try {
      const hackathonId = req.params.id;
      const hackathon = await hackathonRepository.getById(hackathonId);
      console.log(hackathon);
      res.json(hackathon);
    } catch (error) {
      console.error('Error fetching hackathon details:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  async registerTeam(req, res) {
    
    try {
      const registrationData = req.body;
      const registeredTeam = await hackathonRepository.registerTeam(registrationData);
      res.status(200).json({ success: true, message: 'Team registered successfully' });
    } catch (error) {
      console.error('Error registering team:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
}

module.exports = new HackathonController();

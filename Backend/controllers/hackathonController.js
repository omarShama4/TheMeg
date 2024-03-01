// controllers/hackathonController.js

const hackathonRepository = require('../repositories/hackathonRepository');

class HackathonController {
  async getAll(req, res) {
    try {
      const hackathons = await hackathonRepository.getAll();
      res.json(hackathons);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new HackathonController();

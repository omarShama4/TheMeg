// controllers/teamController.js
const teamRepository = require('../repositories/teamRepository');

class TeamController {
  async createTeam(req, res) {
    try {
        const name = req.body.teamName;
        const members = req.body.teamMembers;
        const hackathonId = req.body.hackathonId;
        const team = await teamRepository.createTeam(name, members, hackathonId);
        res.json(team);
    } catch (error) {
        console.error('Error creating team:', error);
        throw error;
    }
  }

  async getTeamsByHackathonId(req, res) {
    try {
        const hackathonId = +req.params.hackathonId;
        console.log(req.params);
        const teams = await teamRepository.getTeamsByHackathonId(hackathonId);
        console.log(teams);
        res.json(teams);
        
    } catch (error) {
      console.error('Error fetching teams by hackathon ID:', error);
      throw error;
    }
  }
}

module.exports = new TeamController();

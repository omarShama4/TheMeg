// repositories/teamRepository.js
const Team = require('../db/models/team');
const TeamMember = require('../db/models/teamMember');

class TeamRepository {
  async createTeam(name, members, hackathonId) {
    try {
      const team = await Team.create({ name: name, HackathonId: hackathonId }); // Set HackathonId
      // Create team members
      if (members && members.length > 0) {
        await Promise.all(members.map(member => {
          return TeamMember.create({
            TeamId: team.id,
            title: member.title,
            name: member.name,
            mobile: member.mobile,
            email: member.email
          });
        }));
      }
      return team;
    } catch (error) {
      console.error('Error creating team:', error);
      throw error;
    }
  }

  async getTeams() {
    try {
      return await Team.findAll({ include : TeamMember}); // Find one team by hackathonId
    } catch (error) {
      console.error('Error fetching team by hackathon ID:', error);
      throw error;
    }
  }
  async getTeamsByHackathonId(hackathonId) {
    try {
      return await Team.findAll({where: { HackathonId: hackathonId }, include : TeamMember}); // Find one team by hackathonId
    } catch (error) {
      console.error('Error fetching team by hackathon ID:', error);
      throw error;
    }
  }
}

module.exports = new TeamRepository();

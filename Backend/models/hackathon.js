// models/hackathon.js

class Hackathon {
    constructor(id, name, theme, registrationDateRange, eventDate, challenges, maxTeamSize, maxTeams) {
      this.id = id;
      this.name = name;
      this.theme = theme;
      this.registrationDateRange = registrationDateRange;
      this.eventDate = eventDate;
      this.challenges = challenges;
      this.maxTeamSize = maxTeamSize;
      this.maxTeams = maxTeams;
    }
  }
  
  module.exports = Hackathon;
  
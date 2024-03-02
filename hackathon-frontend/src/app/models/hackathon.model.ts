// models/hackathon.model.ts

export class Hackathon {
    id!: number;
    name!: string;
    theme!: string;
    registration_date_range!: string;
    event_date!: string;
    challenges!: string[];
    max_team_size!: number;
    max_teams!: number;
  }

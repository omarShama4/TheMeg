export class Hackathon {
    id!: number; // Assuming each hackathon has a unique identifier
    name!: string;
    theme!: string;
    registrationDateRange!: string; // Assuming this is a string representing the registration date range
    eventDate!: string; // Assuming this is a string representing the event date
    challenges!: string[]; // Assuming challenges are represented as an array of strings
    maxTeamSize!: number;
    maxTeams!: number;
  }
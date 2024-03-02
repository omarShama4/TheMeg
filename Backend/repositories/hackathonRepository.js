// repositories/hackathonRepository.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TheMeg',
  password: 'postgres',
  port: 5432,
});

class HackathonRepository {
  async getAll() {
    try {
      const { rows } = await pool.query('SELECT * FROM hackathons');
      return rows;
    } catch (error) {
      console.error('Error fetching hackathons:', error);
      throw error;
    }
  }

  async addHackathon(hackathon) {
    const { name, theme, registrationDateRange, eventDate, maxTeamSize, maxTeams } = hackathon;
    const query = `
      INSERT INTO hackathons (name, theme, registrationDateRange, eventDate, maxTeamSize, maxTeams)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [name, theme, registrationDateRange, eventDate, maxTeamSize, maxTeams];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error adding hackathon:', error);
      throw error;
    }
  }

  async getById(id) {
    const query = 'SELECT * FROM hackathons WHERE id = $1';
    try {
      const { rows } = await pool.query(query, [id]);
      return rows[0];
    } catch (error) {
      console.error('Error fetching hackathon by ID:', error);
      throw error;
    }
  }
}

module.exports = new HackathonRepository();

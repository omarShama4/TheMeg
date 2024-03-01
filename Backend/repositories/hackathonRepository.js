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
}

module.exports = new HackathonRepository();

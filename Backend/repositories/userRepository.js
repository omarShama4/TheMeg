// repositories/userRepository.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'TheMeg',
  password: 'postgres',
  port: 5432,
});

class UserRepository {
  async addUser(username, password, email, role) {
    const query = `
      INSERT INTO users (username, password, email, role)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [username, password, email, role];
    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  }
}

module.exports = new UserRepository();

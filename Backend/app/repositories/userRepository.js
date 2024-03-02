// repositories/userRepository.js
const User = require('../db/models/user');

class UserRepository {
  async addUser(username, password, email, role) {
    try {
      return await User.create({ username, password, email, role });
    } catch (error) {
      console.error('Error adding user:', error);
      throw error;
    }
  }

  async findUserByUsernameAndPassword(username, password) {
    try {
      return await User.findOne({ where: { username, password } });
    } catch (error) {
      console.error('Error finding user by username and password:', error);
      throw error;
    }
  }
}

module.exports = new UserRepository();

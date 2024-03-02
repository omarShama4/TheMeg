// controllers/userController.js

const UserRepository = require('../repositories/userRepository');

class UserController {
  async signup(req, res) {
    const { username, password, email, role } = req.body;
    try {
      await UserRepository.addUser(username, password, email, role);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = new UserController();

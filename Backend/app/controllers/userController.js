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
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await UserRepository.findUserByUsernameAndPassword(username, password);
      if (user) {
        res.status(200).json({ success: true, message: 'Login successful', user });
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
}

module.exports = new UserController();

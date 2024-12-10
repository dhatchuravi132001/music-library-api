const User = require('../models/User');  // Adjust the path to where your User model is defined

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const newUser = await User.create({ email, password, role });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const [updated] = await User.update({ email, password, role }, {
      where: { user_id: req.params.id }
    });
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { user_id: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

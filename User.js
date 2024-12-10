const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the database connection

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Admin', 'Editor', 'Viewer'),
    allowNull: false,
  },
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;

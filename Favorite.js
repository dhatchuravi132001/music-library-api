const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Favorite = sequelize.define('Favorite', {
  favorite_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  type: {
    type: DataTypes.ENUM('Artist', 'Album', 'Track'),
    allowNull: false,
  },
  reference_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

Favorite.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = Favorite;

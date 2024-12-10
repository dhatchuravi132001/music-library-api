const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Track = sequelize.define('Track', {
  track_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  hidden: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Track;

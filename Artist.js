const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Correct relative path to database.js

const Artist = sequelize.define('Artist', {
    artist_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    grammy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hidden: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'artists',
    timestamps: false,
});

module.exports = Artist;


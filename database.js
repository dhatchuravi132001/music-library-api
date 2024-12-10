const { Sequelize } = require('sequelize');
require('dotenv').config();
// Manually setting environment variables (replace with your actual values)
// process.env.DB_HOST = 'localhost';
// process.env.DB_NAME = 'music_library';
// process.env.DB_USER = 'root';
// process.env.DB_PASSWORD = 'W7301@jqir3';

// Create a new Sequelize instance with database credentials
// config/database.js

const sequelize = new Sequelize(
  process.env.DB_NAME,     // Database name
  process.env.DB_USER,     // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',      // Make sure the dialect matches your database (mysql, postgres, etc.)
    logging: false,        // Disable logging (optional)
  }
);
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1); // Exit the process if connection fails
  });


module.exports = sequelize;

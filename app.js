const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const albumRoutes = require('./routes/favoriteRoutes');
const albumRoutes = require('./routes/trackRoutes');
require('dotenv').config(); // For loading environment variables from .env

const app = express();
app.use(bodyParser.json()); // Parse incoming JSON requests

// Use the user routes
app.use('/api', userRoutes);
app.use('/api', artistRoutes);
app.use('/api', albumRoutes);
app.use('/api', favoriteRoutes);
app.use('/api', trackRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Music Library API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

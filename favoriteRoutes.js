const express = require('express');
const { authenticate } = require('../middlewares/authMiddleware');
const {
  getFavorites,
  addFavorite,
  removeFavorite,
} = require('../controllers/favoriteController');

const router = express.Router();

// Get all favorites for the logged-in user
router.get('/', authenticate, getFavorites);

// Add a new favorite (Artist, Album, or Track)
router.post('/', authenticate, addFavorite);

// Remove a favorite
router.delete('/:id', authenticate, removeFavorite);

module.exports = router;

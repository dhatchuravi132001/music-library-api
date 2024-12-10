const Favorite = require('../models/Favorite');

// Add an item to favorites
exports.addFavorite = async (req, res) => {
  const { type, favorite_id } = req.body;
  const user_id = req.user.id; // Assuming `req.user` contains the logged-in user details.

  try {
    const favorite = await Favorite.create({ type, favorite_id, user_id });
    res.status(201).json(favorite);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to favorites', error: err.message });
  }
};

// Get all favorites for the logged-in user
exports.getFavorites = async (req, res) => {
  const user_id = req.user.id;

  try {
    const favorites = await Favorite.findAll({ where: { user_id } });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching favorites', error: err.message });
  }
};

// Remove an item from favorites
exports.removeFavorite = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.id;

  try {
    const favorite = await Favorite.findOne({ where: { id, user_id } });
    if (!favorite) return res.status(404).json({ message: 'Favorite not found' });

    await favorite.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error removing favorite', error: err.message });
  }
};

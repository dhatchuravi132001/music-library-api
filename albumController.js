// controllers/albumController.js

const Album = require('../models/Album');

// Get all albums
exports.getAlbums = async (req, res) => {
  try {
    const albums = await Album.findAll();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching albums', error: err.message });
  }
};

// Create an album
exports.createAlbum = (req, res) => {
    // Logic to create an album
    res.status(201).json({ message: 'Album created successfully' });
  };
  

// Update an album
exports.updateAlbum = async (req, res) => {
  const { id } = req.params;
  const { name, year, hidden } = req.body;

  try {
    const album = await Album.findByPk(id);
    if (!album) return res.status(404).json({ message: 'Album not found' });

    album.name = name;
    album.year = year;
    album.hidden = hidden;
    await album.save();
    res.json(album);
  } catch (err) {
    res.status(500).json({ message: 'Error updating album', error: err.message });
  }
};

// Delete an album
exports.deleteAlbum = async (req, res) => {
  const { id } = req.params;

  try {
    const album = await Album.findByPk(id);
    if (!album) return res.status(404).json({ message: 'Album not found' });

    await album.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting album', error: err.message });
  }
};

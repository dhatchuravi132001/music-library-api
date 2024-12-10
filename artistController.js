// controllers/artistController.js
const Artist = require('../models/Artist');

exports.getArtists = async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.status(200).json({
            status: 200,
            data: artists,
            message: "Artists retrieved successfully.",
            error: null,
        });
    } catch (error) {
        console.error('Error fetching artists:', error); // Log the error for debugging
        res.status(500).json({ 
            status: 500,
            message: 'Failed to fetch artists',
            error: error.message, 
        });
    }
};



// Get a specific artist by ID
exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch artist' });
    }
};

// Create a new artist
exports.createArtist = async (req, res) => {
    try {
        const { name, grammy, hidden } = req.body;
        const newArtist = await Artist.create({ name, grammy, hidden });
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create artist' });
    }
};

// Update an artist
exports.updateArtist = async (req, res) => {
    try {
        const { name, grammy, hidden } = req.body;
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        await artist.update({ name, grammy, hidden });
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update artist' });
    }
};

// Delete an artist
exports.deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (!artist) {
            return res.status(404).json({ error: 'Artist not found' });
        }
        await artist.destroy();
        res.status(200).json({ message: 'Artist deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete artist' });
    }
};

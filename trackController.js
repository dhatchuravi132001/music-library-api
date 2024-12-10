const Track = require('../models/Track');

// Create a track
exports.createTrack = async (req, res) => {
  const { name, duration, hidden } = req.body;

  try {
    const track = await Track.create({ name, duration, hidden });
    res.status(201).json(track);
  } catch (err) {
    res.status(500).json({ message: 'Error creating track', error: err.message });
  }
};

// Get all tracks
exports.getAllTracks = async (req, res) => {
  try {
    const tracks = await Track.findAll();
    res.json(tracks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tracks', error: err.message });
  }
};

// Get a track by ID
exports.getTrackById = async (req, res) => {
  const { id } = req.params;

  try {
    const track = await Track.findByPk(id);
    if (!track) return res.status(404).json({ message: 'Track not found' });

    res.json(track);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching track', error: err.message });
  }
};

// Update a track
exports.updateTrack = async (req, res) => {
  const { id } = req.params;
  const { name, duration, hidden } = req.body;

  try {
    const track = await Track.findByPk(id);
    if (!track) return res.status(404).json({ message: 'Track not found' });

    track.name = name;
    track.duration = duration;
    track.hidden = hidden;
    await track.save();
    res.json(track);
  } catch (err) {
    res.status(500).json({ message: 'Error updating track', error: err.message });
  }
};

// Delete a track
exports.deleteTrack = async (req, res) => {
  const { id } = req.params;

  try {
    const track = await Track.findByPk(id);
    if (!track) return res.status(404).json({ message: 'Track not found' });

    await track.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: 'Error deleting track', error: err.message });
  }
};

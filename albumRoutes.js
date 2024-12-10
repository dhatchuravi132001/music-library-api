const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');

  // Correctly import authenticate and authorize

// Route to create an album, accessible only by Admin and Editor roles
router.post('/', authenticate, authorize(['Admin', 'Editor']), albumController.createAlbum);

module.exports = router;

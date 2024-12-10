const express = require('express');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const {
  getTracks,
  createTrack,
  updateTrack,
  deleteTrack,
} = require('../controllers/trackController');

const router = express.Router();

router.get('/', authenticate, getTracks);
router.post('/', authenticate, authorize(['Admin', 'Editor']), createTrack);
router.put('/:id', authenticate, authorize(['Admin', 'Editor']), updateTrack);
router.delete('/:id', authenticate, authorize(['Admin']), deleteTrack);

module.exports = router;

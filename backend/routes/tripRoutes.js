const express = require('express');
const { uploadTrip } = require('../controllers/tripController');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', protect, upload.single('csv'), uploadTrip);

module.exports = router;

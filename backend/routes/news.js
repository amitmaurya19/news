const express = require('express');
const { getNews } = require('../controllers/newsController');

const router = express.Router();

// Route to get news with optional filters
router.get('/', getNews);

module.exports = router;

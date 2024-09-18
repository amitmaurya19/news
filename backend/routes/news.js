const express = require('express');
const { getNews } = require('../controllers/newsController');

const router = express.Router();

// Route to get news with optional filters
router.get('/', async (req, res, next) => {
  try {
    await getNews(req, res);
  } catch (error) {
    next(error); // Pass errors to the global error handler
  }
});

module.exports = router;

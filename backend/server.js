const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const newsRoutes = require('./routes/news');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet()); // Security headers
app.use(compression()); // Gzip compression for better performance
app.use(express.json());

// Routes
app.use('/api/news', newsRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

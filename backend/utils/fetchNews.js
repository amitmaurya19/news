const axios = require('axios');

// Load environment variables from .env file
require('dotenv').config();

const fetchNewsFromAPIs = async () => {
  const apiKey = process.env.NEWS_API_KEY;
  const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=us`;

  try {
    const response = await axios.get(apiUrl);

    if (response.data && response.data.articles) {
      return response.data.articles;
    } else {
      console.error('No news articles found from the API');
      return [];
    }
  } catch (error) {
    console.error('Error fetching news from API:', error.message);
    return [];
  }
};

module.exports = { fetchNewsFromAPIs };

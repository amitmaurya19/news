const { fetchNewsFromAPIs } = require('../utils/fetchNews');

const getNews = async (req, res) => {
  const { dateFilter, niche } = req.query;

  try {
    let combinedNews = await fetchNewsFromAPIs();

    if (niche) {
      combinedNews = combinedNews.filter(news => news.category === niche);
    }

    // Filter based on date
    if (dateFilter === 'today') {
      const today = new Date();
      combinedNews = combinedNews.filter(news => 
        new Date(news.publishedAt).toDateString() === today.toDateString()
      );
    }

    res.json(combinedNews.slice(0, 3)); // Send 3 news at a time
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news' });
  }
};

module.exports = { getNews };

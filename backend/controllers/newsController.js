const { fetchNewsFromAPIs } = require('../utils/fetchNews');

const getNews = async (req, res) => {
  const { dateFilter, niche } = req.query;

  try {
    let combinedNews = await fetchNewsFromAPIs();

    // Filter by niche/category
    if (niche) {
      combinedNews = combinedNews.filter(news => news.category.toLowerCase() === niche.toLowerCase());
    }

    // Filter by date
    const today = new Date();
    if (dateFilter === 'today') {
      combinedNews = combinedNews.filter(news => 
        new Date(news.publishedAt).toDateString() === today.toDateString()
      );
    } else if (dateFilter === 'yesterday') {
      const yesterday = new Date(today.setDate(today.getDate() - 1));
      combinedNews = combinedNews.filter(news => 
        new Date(news.publishedAt).toDateString() === yesterday.toDateString()
      );
    } else if (dateFilter === 'tomorrow') {
      const tomorrow = new Date(today.setDate(today.getDate() + 1));
      combinedNews = combinedNews.filter(news => 
        new Date(news.publishedAt).toDateString() === tomorrow.toDateString()
      );
    }

    // Limit results to 3 news items
    return res.status(200).json(combinedNews.slice(0, 3));
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ message: 'Failed to retrieve news.' });
  }
};

module.exports = { getNews };

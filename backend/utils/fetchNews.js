const axios = require('axios');

const fetchNewsFromAPIs = async () => {
  const api1 = 'https://api.example1.com/news';
  const api2 = 'https://api.example2.com/news';
  const api3 = 'https://api.example3.com/news';

  try {
    const [response1, response2, response3] = await Promise.all([
      axios.get(api1),
      axios.get(api2),
      axios.get(api3),
    ]);

    return [
      ...response1.data.articles,
      ...response2.data.articles,
      ...response3.data.articles,
    ];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

module.exports = { fetchNewsFromAPIs };

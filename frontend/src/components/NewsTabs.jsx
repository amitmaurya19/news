import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsTabs = () => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('today');

  useEffect(() => {
    fetchNews(filter);
  }, [filter]);

  const fetchNews = async (dateFilter) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/news?dateFilter=${dateFilter}`);
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news', error);
    }
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setFilter('today')}>Today</button>
        <button onClick={() => setFilter('yesterday')}>Yesterday</button>
        <button onClick={() => setFilter('month')}>This Month</button>
      </div>

      <div className="news-container">
        {news.map((article, index) => (
          <div key={index} className="news-item">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTabs;

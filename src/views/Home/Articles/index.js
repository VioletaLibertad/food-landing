import React, { useState, useEffect } from 'react';
import Titles from '../../../components/Titles';
import Sidebar from '../../../components/Sidebar/index';
import BaseCard from '../../../components/Cards/index';
import './articles.css';
import { fetchArticlesList } from '../../../utils/api';

function Articles() {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    getArticlesList();
  });

  const getArticlesList = async () => {
    if (articlesList.length === 0) {
      let articles = await fetchArticlesList();
      setArticlesList(articles);
    }
  };

  return (
    <section className="container">
      <Titles title="Nuestros artículos" />
      <div className="row articles_section">
        <div className="articles_sidebar">
          <Sidebar />
        </div>
        <div className="articles_cards-container">
          {articlesList.length > 1 
            ? articlesList.map(article => <BaseCard key={article.id} data={article} /> )
            : null
          }
        </div>
      </div>
    </section>
  );
}

export default Articles;

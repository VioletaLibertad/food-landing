import React from 'react';
import Titles from '../../../components/Titles';
import Sidebar from '../../../components/Sidebar/index';
import BaseCard from '../../../components/Cards/index';
import './articles.css';

function Articles() {
  return (
    <section className="container">
      <Titles title="Nuestros artículos" />
      <div className="row articles_section">
        <div className="articles_sidebar">
          <Sidebar />
        </div>
        <div className="articles_cards-container">
          <BaseCard />
          <BaseCard />
          <BaseCard />
          <BaseCard />
        </div>
      </div>
    </section>
  );
}

export default Articles;

import React from 'react';
import titleBrush from '../../../assets/img/heading-shape.png';
import Sidebar from '../../../components/Sidebar/index';
import BaseCard from '../../../components/Cards/index';
import './articles.css';


function Articles() {
  return (
    <section className="container">
      <div className="row articles_title">
        <h2>
          Nuestros artículos
        </h2>
        <img src={titleBrush} alt="title_decoration"/>
      </div>
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

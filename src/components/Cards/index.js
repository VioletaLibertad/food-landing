import React from 'react';
import './style.css';


function BaseCard(props) {

  let cardData = props.data;

  return (
    <div className="card">
      <img className="card_img" src={cardData.image} alt="card_image"/>
      <div className="card_text">
        <p>{cardData.title}</p>
        <p>{cardData.content}</p>
        <a className="card_link" href={cardData.url} target="_blank" rel="noopener noreferrer">Ver Más</a>
      </div>
    </div>
  );
}

export default BaseCard;

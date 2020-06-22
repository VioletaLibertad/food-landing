import React from 'react';
import './style.css';


function BaseCard() {
  return (
    <div className="card">
      <img className="card_img" src="https://loremflickr.com/540/400/food?random=1" alt="card_image"/>
      <div className="card_text">
        <p>Handcrafted Plastic Towels</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar risus at turpis.</p>
        <a className="card_link" href="/">Ver Más</a>
      </div>
    </div>
  );
}

export default BaseCard;

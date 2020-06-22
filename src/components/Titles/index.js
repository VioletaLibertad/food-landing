import React from 'react';
import titleBrush from '../../assets/img/heading-shape.png';
import './style.css';

function Titles(props) {
  return (
    <div className="row sections_title">
      <h2>
        {props.title}
      </h2>
      <img src={titleBrush} alt="title_decoration"/>
    </div>
  );
}

export default Titles;

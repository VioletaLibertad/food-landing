import React from 'react';
import logo from '../../../assets/img/logo.svg';
import headerBrush from '../../../assets/img/hero-shape.png';
import './header.css';

function Header() {
  return (
    <header className="bg_img">
        <div className="header_nav">
          <img src={logo} className="header_logo" alt="header_logo"/>
        </div>
        <div className="header_title">
          <h2>El secreto de tu cocina</h2>
        </div>
        <div className="header_title_decoration">
          <img src={headerBrush} alt="header_decoration"/>
        </div>
    </header>
  );
}

export default Header;

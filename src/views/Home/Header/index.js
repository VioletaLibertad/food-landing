import React from 'react';
import logo from '../../../assets/img/logo.svg';
import headerBrush from '../../../assets/img/hero-shape.png';
import fbLogo from '../../../assets/img/facebook-icon.svg';
import igLogo from '../../../assets/img/instagram-icon.svg';
import ytLogo from '../../../assets/img/youtube-icon.svg';
import './header.css';

function Header() {
  return (
    <header>
      <section className="bg_img">
        <div className="header_nav">
          <img src={logo} className="header_logo" alt="header_logo"/>
          <div className="header_social">
            <button className="fb_button">
              <img src={fbLogo} alt="fb_logo"/>
            </button>
            <button className="ig_button">
              <img src={igLogo} alt="ig_logo"/>
            </button>
            <button className="yt_button">
              <img src={ytLogo} alt="yt_logo"/>
            </button>
          </div>
        </div>
        <div className="header_title">
          <h2>El secreto de tu cocina</h2>
        </div>
        <div className="header_title_decoration">
          <img src={headerBrush} alt="header_decoration"/>
        </div>
      </section>
    </header>
  );
}

export default Header;

import React from 'react';
import fbLogo from '../../assets/img/facebook-icon.svg';
import igLogo from '../../assets/img/instagram-icon.svg';
import ytLogo from '../../assets/img/youtube-icon.svg';
import './style.css';

function Socials() {
  return (
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
  );
}

export default Socials;

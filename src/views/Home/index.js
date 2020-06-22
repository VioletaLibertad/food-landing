import React from 'react';
import Header from './Header';
import Articles from './Articles/index';
import Socials from '../../components/Socials/index';
import './styles.css';

function Home() {
  return (
    <>
      <Socials />
      <Header />
      <Articles />
    </>
  );
}

export default Home;

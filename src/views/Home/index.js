import React from 'react';
import Header from './Header';
import Articles from './Articles';
import './styles.css';
import Contact from './Contact';

function Home() {
  return (
    <>
      <Header />
      <Articles />
      <Contact />
    </>
  );
}

export default Home;

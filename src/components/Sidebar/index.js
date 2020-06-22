import React, { useState } from 'react';
import './style.css';

function Sidebar(params) {
  const [activeName, setActiveName] = useState('all');

  const { callArticles } = params ? params : [];

  const handleClick = e => {
    setActiveName(e.target.name);
    callArticles(e.target.name);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar_buttons">
        <button type="button" name="all" 
        onClick={e => handleClick(e)} 
        className={activeName === 'all' ? 'active' : ''}>
          Todos
        </button>
        <button type="button" name="Productos" 
        onClick={e => handleClick(e)} 
        className={activeName === 'Productos' ? 'active' : ''}>
          Productos
        </button>
        <button type="button" name="Recetas" 
        onClick={e => handleClick(e)} 
        className={activeName === 'Recetas' ? 'active' : ''}>
          Recetas
        </button>
        <button type="button" name="Consejos" 
        onClick={e => handleClick(e)} 
        className={activeName === 'Consejos' ? 'active' : ''}>
          Consejos
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
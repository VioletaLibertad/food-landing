import React from 'react';
import './style.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_buttons">
        <button>Todos</button>
        <button>Productos</button>
        <button>Recetas</button>
        <button>Consejos</button>
      </div>
    </aside>
  );
}

export default Sidebar;
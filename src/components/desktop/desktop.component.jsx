import React, { useState } from 'react';
import './desktop.styles.css';



const Desktop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light');
    // Alternar clase en el body para cambiar el fondo
  };

  return (
    <main>
      <h1>Desktop</h1>
      
    </main>

  );
};

export default Desktop;
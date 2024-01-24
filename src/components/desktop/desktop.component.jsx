import React, { useState } from 'react';
import './desktop.styles.css';
//import LanguageSwitcher from '../../LanguageSwitcher';
import { useTranslation } from 'react-i18next';



const Desktop = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t } = useTranslation();


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
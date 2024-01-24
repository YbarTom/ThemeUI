import React, { useState } from 'react';
import './mobile.styles.css';
//import LanguageSwitcher from '../../LanguageSwitcher';
//import { useTranslation } from 'react-i18next';


const Mobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    //const { t } = useTranslation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            toggleMenu();
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('light');
        // Alternar clase en el body para cambiar el fondo
    };

    return (
        
        <main>
            <h1>Mobile</h1>
        </main>
    );
};

export default Mobile;
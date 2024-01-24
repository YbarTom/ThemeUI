import React, { useState } from 'react';
import './mobile.styles.css';
import MenuButtonMobile from './MenuButton/MenuButton';



const Mobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    

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
            <MenuButtonMobile/>
            <h1>Mobile</h1>
        </main>
    );
};

export default Mobile;
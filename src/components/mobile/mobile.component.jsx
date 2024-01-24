import React, { useState } from 'react';
import styles from './mobile.styles.js';
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

        <div>
            <header sx={styles.navbar}>
                <MenuButtonMobile onClick={toggleMenu} />
                
            </header>
        </div>
    );
};

export default Mobile;
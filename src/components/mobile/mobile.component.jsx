import React, { useState } from 'react';

import MenuButtonMobile from './MenuButton/MenuButton';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../../gatsby-plugin-theme-ui/index'
import {  Flex } from 'theme-ui'
import ColorModeToggle from "../../components/generalComponents/ColorModeToggle";






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
        <ThemeUIProvider theme={theme}>

            <Flex as="nav">
                <MenuButtonMobile onClick={toggleMenu} />
                <ColorModeToggle></ColorModeToggle>
            </Flex>


        </ThemeUIProvider>
    );
};

export default Mobile;
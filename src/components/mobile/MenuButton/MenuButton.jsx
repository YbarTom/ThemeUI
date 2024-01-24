import React, { useState } from "react";
import { MenuButton } from 'theme-ui';
import './MenuButton.css';
import theme from '../../../gatsby-plugin-theme-ui/index'
import { ThemeUIProvider } from 'theme-ui'


const MenuButtonMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            toggleMenu();
        }
    }

    return (
        <ThemeUIProvider theme={theme}>
            <MenuButton
                aria-label="Toggle Menu"
                onClick={toggleMenu}
                onKeyPress={handleKeyPress}
            >
                <div className={menuOpen ? 'menu-btn open' : 'menu-btn'}>
                    <div className="menu-btn__burger"></div>
                </div>
            </MenuButton>

            {menuOpen && (
                <div className="menu-container">
                    <div className="sidebar">
                        {/* Aquí debes agregar el contenido de tu menú lateral */}
                        <MenuButton
                            aria-label="Toggle Menu"
                            onClick={toggleMenu}
                            onKeyPress={handleKeyPress}
                        >
                            <div className={menuOpen ? 'menu-btn open' : 'menu-btn'}>
                                <div className="menu-btn__burger"></div>
                            </div>
                        </MenuButton>
                        <p>Menu Content Here</p>

                    </div>
                </div>
            )}
        </ThemeUIProvider>
    );
}

export default MenuButtonMobile;
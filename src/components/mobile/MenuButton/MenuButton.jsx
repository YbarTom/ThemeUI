import React, { useState } from "react";
import { MenuButton } from 'theme-ui';
import './MenuButton.css';
import theme from '../../../gatsby-plugin-theme-ui/index'
import { ThemeUIProvider } from 'theme-ui'
import { logout } from "../../../services/auth";
import { useTranslation } from 'react-i18next';
import ColorModeToggle from "../../../components/generalComponents/ColorModeToggle";
import SelectLang from "../../generalComponents/SelectLang";
import LogOut from "../../generalComponents/LogOut";

const MenuButtonMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.body.classList.toggle('light');
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            toggleMenu();
        }
    }
    const { t } = useTranslation();
    return (
      
        <ThemeUIProvider theme={theme}>
          <MenuButton
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            onKeyPress={handleKeyPress}
            sx={{ zIndex: 1 }} // Ajusta el zIndex aquí
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
                  sx={{ zIndex: 1 }} // Ajusta el zIndex aquí también
                >
                  <div className={menuOpen ? 'menu-btn open' : 'menu-btn'}>
                    <div className="menu-btn__burger"></div>
                  </div>
                </MenuButton>
                <p>Menu Content Here</p>
                <ColorModeToggle onClick={toggleDarkMode} sx={{ zIndex: 2 }} />
                <LogOut/>
                <SelectLang />
              </div>
            </div>
          )}
        </ThemeUIProvider>
      );
}

export default MenuButtonMobile;
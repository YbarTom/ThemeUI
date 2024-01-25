import React, { useState } from 'react';
import MenuButtonMobile from './MenuButton/MenuButton';
import { ThemeUIProvider, Grid, Box } from 'theme-ui';
import theme from '../../gatsby-plugin-theme-ui/index';


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


    return (
        <ThemeUIProvider theme={theme}>
            <Grid
                as="nav"
                columns={['1fr']} // Una sola columna para contener ambos elementos
                gap={2} // Espacio entre los elementos
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <MenuButtonMobile onClick={toggleMenu} sx={{ zIndex: 1 }} />
                    
                    
                </Box>
            </Grid>
           
        </ThemeUIProvider>
    );
};

export default Mobile;
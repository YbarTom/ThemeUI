import React from 'react';
import { NavLink, Flex, Button } from 'theme-ui'
import './desktop.styles.css';
import LogOut from '../generalComponents/LogOut';
import LanguageSwitcher from "../../components/generalComponents/LanguageSwitcher";
import ColorModeToggle from "../../components/generalComponents/ColorModeToggle";
import { useTranslation } from 'react-i18next';
import theme from '../../gatsby-plugin-theme-ui/index'
import { ThemeUIProvider } from 'theme-ui'
import SelectLang from '../generalComponents/SelectLang';



const Desktop = () => {
  const { t } = useTranslation();
  return (
    <ThemeUIProvider theme={theme}>

      <Flex as="nav" backgroundColor="primary">
        <NavLink href="#!" p={2}>
          Home
        </NavLink>
        <NavLink href="#!" p={2}>
          Blog
        </NavLink>
        <NavLink href="#!" p={2}>
          About
        </NavLink>
        ------
        <LogOut/>
        <SelectLang/>
        <ColorModeToggle></ColorModeToggle>
      </Flex>

      <Button sx={{ variant: 'buttons.primary'}}>primary</Button>
      <Button sx={{ variant: 'buttons.custom'}}>custom</Button>

    </ThemeUIProvider>


  );
};

export default Desktop;
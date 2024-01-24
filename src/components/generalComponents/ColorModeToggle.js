import React from 'react';
import { useColorMode } from 'theme-ui';
import { useTranslation } from 'react-i18next'; 
import { Switch } from 'theme-ui'

const ColorModeToggle = (props) => {
  const { t } = useTranslation();
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode((colorMode === 'light') ? 'dark' : 'light');
  };

  const handleSwitchChange = (isChecked) => {
    // Cambia el modo de color solo si el estado del Switch cambia
    if (isChecked ) {
      setColorMode((colorMode === 'light') ? 'dark' : 'light');
    } else if (!isChecked ) {
      setColorMode((colorMode === 'light') ? 'dark' : 'light');
    }
  };

  return (
    <header>
      {/* Utiliza el estado interno del Switch y llama a handleSwitchChange */}
      <Switch checked={colorMode === 'dark'} onChange={handleSwitchChange} />
      
    </header>
  );
};

export default ColorModeToggle;

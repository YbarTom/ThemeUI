import React from 'react';
import { useColorMode } from 'theme-ui';
import { useTranslation } from 'react-i18next'; 

const ColorModeToggle = (props) => {
  const { t } = useTranslation();
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode((colorMode === 'light') ? 'dark' : 'light');
  };

  return (
    <header>
      <button onClick={toggleColorMode}>
      {t('mode')}
      </button>
    </header>
  );
};

export default ColorModeToggle;

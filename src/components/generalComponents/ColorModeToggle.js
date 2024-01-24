import React from 'react';
import { useColorMode } from 'theme-ui';

const ColorModeToggle = (props) => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode((colorMode === 'light') ? 'dark' : 'light');
  };

  return (
    <header>
      <button onClick={toggleColorMode}>
        Toggle {colorMode === 'Light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
};

export default ColorModeToggle;

// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'theme-ui'
import i18n from '../../i18n'; // adjust the path accordingly
import theme from '../../gatsby-plugin-theme-ui/index'
import { ThemeUIProvider } from 'theme-ui'

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <ThemeUIProvider theme={theme}>

      <div>
        <Button backgroundColor="primary" onClick={() => changeLanguage('es')}>Español</Button>
        <Button onClick={() => changeLanguage('en')}>English</Button>
      </div>

    </ThemeUIProvider>

  );
}

export default LanguageSwitcher;

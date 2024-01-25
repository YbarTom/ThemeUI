// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'theme-ui'
import i18n from '../../i18n'; // adjust the path accordingly


function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    

      <div>
        <Button sx={{ variant: 'buttons.primary'}} onClick={() => changeLanguage('es')}>Español</Button>
        <Button sx={{ variant: 'buttons.primary'}} onClick={() => changeLanguage('en')}>English</Button>
      </div>


  );
}

export default LanguageSwitcher;

import React, { useState } from 'react';
import { Select } from 'theme-ui';
import { useTranslation } from 'react-i18next';

const SelectLang = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('es'); // Initialize language state

  const changeLanguage = (languageCode) => {
    setLanguage(languageCode); // Update the language state
    i18n.changeLanguage(languageCode);
  };

  return (
    <Select value={language} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="es">Es</option>
      <option value="en">En</option>
      <option value="ca">Ca</option>
    </Select>
  );
};

export default SelectLang;

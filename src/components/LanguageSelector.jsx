import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext.jsx';
import { LANGUAGES } from './Languages.js';

const LanguageSelector = () => {
  const {setLanguage } = useContext(LanguageContext);

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <select className='language-selector' onChange={handleChange}>
      {LANGUAGES.map(language => (
        <option className='option' key={language.code} value={language.code}>{language.name}</option>
      ))}
    </select>
  );
};

export default LanguageSelector;

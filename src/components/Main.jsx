import React, { useContext } from 'react';
import Translations from './Translations';
import { LanguageContext } from './LanguageContext';

const Main = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='main-component'>
        <h3 className='main-h3'>{Translations[language].mainTitle}</h3>
        <p className="descriptionTxt">{Translations[language].mainDescription}</p>
    </div>
  );
}

export default Main;

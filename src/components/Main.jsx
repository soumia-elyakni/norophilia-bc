import React, { useContext } from 'react';
import Translations from './Translations';
import { LanguageContext } from './LanguageContext';

const Main = () => {
  const { language } = useContext(LanguageContext);
  const checkLangue = () => {
    if (language === "ar" || language === "kr"){
      return "diff"; // Ajoutez la classe rtl si la langue est arabe ou coréenne
    }
    return ""; // Retourne une chaîne vide si la condition n'est pas remplie
  }

  return (
    <div className={`main-component ${checkLangue()}`}>
        <h3 className='main-h3'>{Translations[language].mainTitle}</h3>
        <p className="descriptionTxt">{Translations[language].mainDescription}</p>
    </div>
  );
}

export default Main;

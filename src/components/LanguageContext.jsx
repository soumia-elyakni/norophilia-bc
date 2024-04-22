import React, { createContext, useState } from 'react';

// Créez un contexte pour la langue
export const LanguageContext = createContext();

// Créez un fournisseur de contexte de langue qui stockera la langue actuelle et la fonction pour la mettre à jour
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Langue par défaut

  // Fonction pour mettre à jour la langue
  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Retournez le contexte de langue et la fonction de mise à jour de la langue
  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

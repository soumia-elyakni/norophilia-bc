import React from 'react';
import { useState } from 'react';
import './App.css';
import  Header  from './components/Header';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
import { LanguageProvider } from './components/LanguageContext'
import Background from './components/Background';
import Copyright  from './components/Copyright';
import LanguageSelector from './components/LanguageSelector';


function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <LanguageProvider>
    <LanguageSelector />
    <Background>
    <div className={`App ${isClicked ? 'hovered' : ''}`} onClick={handleClick}>
      <Header/>
      <div className='card-content'>
      <Main />
      <Footer />
      </div>
    </div>
    <Copyright />
    </Background>
    </LanguageProvider>
  );
}

export default App;

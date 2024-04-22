import React, { useState, useEffect } from 'react';

const Background = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../Background', false, /\.(jpeg|jpg|png|jfif)$/));

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    setBackgroundImage(randomImage);
  }, []);

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
};


export default Background;

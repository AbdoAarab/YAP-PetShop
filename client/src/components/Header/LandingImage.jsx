import React from 'react';

import './Header.css';

const LandingImage = () => {
  return (
    <div className="background-image">
      <h1 className="slang">
        Your
        <br />
        Adorable
        <br /> 
        Pets Shop
        <span className='header-image-icon'></span>
      </h1>
      <img src="../img/background.jpg" alt="cat img" className="cat-img" />
      <img
        src="../img/bone.svg"
        onClick={() => (window.location.href = '#products')}
        alt="bone"
        className="bone-img"
      />
    </div>
  );
};

export default LandingImage;

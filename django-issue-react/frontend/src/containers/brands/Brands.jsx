import React from 'react';
import './brands.css';
import { google, slack, blizzard, amazon } from './imports.js';

const Brands = () => {
  return(
  <div className='issue__brand section__padding'>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={blizzard} alt="blizzard" />
      </div>
      <div>
        <img src={amazon} alt="amazon" />
      </div>
  </div>
  )
};

export default Brands;
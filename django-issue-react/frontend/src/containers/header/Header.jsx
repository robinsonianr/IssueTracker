import React from 'react';
import './header.css';

const Header = () => {
  return(
  <div className='issue__header section__padding' id='home'>
      <div className='issue__header-content'>
        <div className='support__text'>
          <h1>Let's boost your customer support!</h1>
          <p>Help desk software to imporve your customer service today</p>
          <div className='issue__header-content__input'>
              <input type="email" placeholder='Your Email Address'/>
              <button type='button'>Get Started</button>
          </div>
        </div>
      </div>
  </div>
  )
};

export default Header;
import React from 'react';
import './footer.css';
import logo from '../../assets/issue.png';

const Footer = () => {
  return(
  <div className='issue__footer section__padding'>
      <div className='issue__footer-heading'>
        <h1>Do you want the next best help desk software</h1>
      </div>
      <div className='issue__footer-btn'>
        <p>Request Access</p>
      </div>

      <div className='issue__footer-links'>
        <div className='issue__footer-links_logo'>
          <img src={logo} alt="logo" />
        </div>
     

      <div className='issue__footer-links_div'>
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Details</p>
        <p>Partners</p>
        <p>Contact</p>
      </div>

      <div className='issue__footer-links_div'>
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy and Policy</p>
        <p>Contact</p>
      </div>

      <div className='issue__footer-links_div'>
        <h4>Get in Touch</h4>
        <p>234 Barrel Rd</p>
        <p>555-672-3421</p>
        <p>issue@askeme.net</p>
      </div>
      </div>

      <div className='issue__footer-copyright'>
        <p>© 2022 Issue Tracker. All rights reserved.</p>
      </div>
  </div>
  )
};

export default Footer;
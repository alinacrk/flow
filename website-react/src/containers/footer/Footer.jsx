import React from 'react';
import './footer.css';
import flowlogo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='flow__footer section__padding'>
      <div className="gradient__bg">
      <div className='flow__footer-heading'>
        <h1 className='gradient__text'>Every action, movement, and thought follows inevitably from the previous one</h1>
      </div>
      <div className='flow__footer-button'>
        <p>Request Access</p>
      </div>
      <div className='flow__footer-links'>
        <div className='flow__footer-links_logo'>
          <img src= {flowlogo} alt='logo' />
          
        </div>
        <div className='flow__footer-links_div'>
          <h4>Links</h4>
          <p>Info</p>
          <p>Social Media</p>
          <p>Info</p>
          <p>Contact</p>
        </div>
        <div className='flow__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='flow__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Loss Angeles 1000</p>
          <p>099-99-999</p>
         
          <p>info@flow.com</p>
        </div>
      </div>
      <div className='flow__footer-copyright'>
        <p>2023 Flow. All rights reserved</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
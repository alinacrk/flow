import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='flow__header section__padding' id='home'>
      <div className='flow__header-content'>
      <h1 className='gradient__text'>Because flow is a positive mental state</h1>
      <p>Intrinsic Motivation</p>

      <div className='flow__header-content__input '>
        <input type='email' className='gradient__bg ' placeholder='Your Email Address'/>
        <button type='button'> Get started</button>
      </div>

      <div className='flow__header-content__people'>
        <img src={people} alt='people'/>
        <p>500 requests</p>
      </div>
      </div>

      <div className='flow__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header
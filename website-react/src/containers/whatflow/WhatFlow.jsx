import React from 'react';
import { Feature } from '../../components';
import './whatflow.css';

const WhatFlow = () => {
  return (
    <div className='flow__whatflow section__margin gradient__bg ' id='whatflow'>
      <div className='flow__whatflow-feature'>
        <Feature title='What is Flow' text=' Ein Hydraulik-Problem am W14 verhinderte weitere Runden von George Russell, der den Wagen nach dem Mittag von Rekordweltmeister Lewis Hamilton übernommen hatte.'/>
      </div>
      <div className='flow__whatflow-heading'>
        <h1 className='gradient__text'> Learning, Skill Development, and Creativity </h1>
        <p>Explore more</p>
      </div>
      <div className='flow__whatflow-container'>
        <Feature title='Flow' text='Der zweite und schon wieder vorletzte Formel-1-Testtag in der Wüste von Sakhir istFlow is one of life’s highly enjoyable states of being, wrapping us entirely in the present, and helping us be more creative, productive, and happy.'/>
        <Feature title='Concept' text='Psychological Flow captures the positive mental state of being completely absorbed, focused, and involved in your activities at a certain point in time, as well as deriving enjoyment from being engaged in that activity. '/>
        <Feature title='The Theory' text='Flow theory became of interest to positive psychology researchers Jacob Getzels and Mihaly Csikszentmihalyi when they were studying the creative process during the ‘60s (Getzels & Csikszentmihalyi, 1976). '/>
        
      </div>
    </div>
  )
}

export default WhatFlow
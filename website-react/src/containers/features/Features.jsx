import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Benefits of a Flow State',
    text: 'In addition to making activities more enjoyable, flow also has a number of other advantages.',
  },
  {
    title: 'Benefits of a Flow State',
    text: 'In addition to making activities more enjoyable, flow also has a number of other advantages.',
  },
  {
    title: 'Benefits of a Flow State',
    text: 'In addition to making activities more enjoyable, flow also has a number of other advantages.',
  },
  {
    title: 'Benefits of a Flow State',
    text: 'In addition to making activities more enjoyable, flow also has a number of other advantages.',
  },
];
const Features = () => {
  return (
    <div className='flow__features section__padding gradient__bg ' id='features'>
      <div className='flow__features-heading gradient__bg'>
        <h1 className='gradient__bg'>If you have ever felt completely absorbed in something, you might have been experiencing a mental state that psychologists refer to as flow. Achieving this state can help people feel greater enjoyment, energy, and involvement.</h1>
       
      </div>
      <div className='flow__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
        

      </div>
      
    </div>
  )
}

export default Features
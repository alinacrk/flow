import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog1, blog2, blog3, blog4, blog5 } from './imports';

const Blog = () => {
  return (
    <div className='flow__blog section__padding gradient__bg' id='blog'>
    <div className='flow__blog-heading'>
      <h1 className='gradient__text'>Being immersed can be defined as a state</h1>
    </div>
    <div className='flow__blog-container'>
      <div className='flow__blog-container_1 '><Article imgUrl={blog1} Date='Feb 27, 2023' title='While in a flow state, people are highly involved and focused on what they are doing'/>
      </div>
      <div className='flow__blog-container_2'>
      <Article imgUrl={blog2} Date='Feb 27, 2023' title='While in a flow state, people are highly involved and focused on what they are doing'/>
      <Article imgUrl={blog3} Date='Feb 27, 2023' title='While in a flow state, people are highly involved and focused on what they are doing'/>
      <Article imgUrl={blog4} Date='Feb 27, 2023' title='While in a flow state, people are highly involved and focused on what they are doing'/>
      <Article imgUrl={blog5} Date='Feb 27, 2023' title='While in a flow state, people are highly involved and focused on what they are doing'/>
      </div>
    </div>
    </div>
  )
}

export default Blog
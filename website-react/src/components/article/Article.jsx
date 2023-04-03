import React from 'react';
import './article.css';

const Article = ( { imgUrl, date, title } ) => {
  return (
    <div className='flow__blog-container_article gradient__bg'>
      <div className='flow__blog-container_article-image gradient__bg '>
        <img src={imgUrl} alt='blog'/>
        </div>
        <div className='flow__blog-container_article-content'>
           <p>{date}</p>
            <h3>{title}</h3>
            <div>
           
          </div>
          <p>Read full article</p>
        </div>
    </div>
  )
}

export default Article

import React from 'react'
import { NEWS } from '../data/newsData'

const NewsIten = ({isClicked}) => {
  return (
    <>
      {NEWS.map((item, index) => {
        return (
          <li className={isClicked ? 'news-item' : ''} key={index}>
            <div>
              <img src={item.img} alt={item.title} />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.excerpt}</p>
            </div>
            <div>
              <p>{new Date(item.date).toLocaleDateString('uk-UA')}</p>
              <a href='#'>Continue to read</a>
            </div>
          </li>
        )
      })}
    </>
  )
}

export default NewsIten

import React from 'react'
import NewsIten from './NewsIten'

const NewsList = ({isClicked}) => {
  return (
    <ul className={isClicked ? 'news-list' : ''}>
      <NewsIten isClicked={isClicked} />
    </ul>
  )
}

export default NewsList

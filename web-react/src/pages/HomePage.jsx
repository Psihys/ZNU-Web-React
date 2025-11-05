import React from 'react'
import { useState } from 'react'

import NewsList from '../components/NewsList'

import './pagesStyles/HomePage.css'

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked((prevState) => !prevState)
  }
  return (
    <div className='homepage__container'>
      <div className='homepage__inner'>
        <h2>Home Page</h2>
        <p>
          Compact: {isClicked ? 'on' : 'off'}
          <button onClick={() => handleClick()}>Click</button>
        </p>
      </div>
      <NewsList isClicked={isClicked}/>
    </div>
  )
}

export default HomePage

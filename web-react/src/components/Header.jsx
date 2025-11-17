import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import './componentsStyles/Header.css'
import { ThemeContext } from '../context/ThemeContext'
import { FaSun } from 'react-icons/fa6'

import { BsFillMoonStarsFill } from 'react-icons/bs'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
      <div className='header__inner'>
        {' '}
        <NavLink to='/'>
          {' '}
          <h1>Labo-9</h1>
        </NavLink>
      </div>
      <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
      </div>
      <div>
        <button onClick={() => toggleTheme()}>
          {theme === 'light' ? <FaSun /> : <BsFillMoonStarsFill />}
        </button>
      </div>
    </>
  )
}

export default Header

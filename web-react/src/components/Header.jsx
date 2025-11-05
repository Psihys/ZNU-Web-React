import React from 'react'
import { NavLink } from 'react-router-dom'

import './componentsStyles/Header.css'

const Header = () => {
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
    </>
  )
}

export default Header

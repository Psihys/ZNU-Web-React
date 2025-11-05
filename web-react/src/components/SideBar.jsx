import React from 'react'
import { Link } from 'react-router-dom'

import './componentsStyles/SideBar.css'

const SideBar = () => {
  return (
    <>
      <h3 className='sidebar__title'>Menu</h3>
      <ul className='sidebar__list'>
        <li>
          <Link to='#'>News</Link>
        </li>
        <li>
          <Link to='#'>Additional content</Link>
        </li>
        <li>
          <Link to='#'>Settings</Link>
        </li>
      </ul>
    </>
  )
}

export default SideBar

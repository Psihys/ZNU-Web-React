import React from 'react'

import './componentsStyles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className='footer__inner'>
        <p>
          {currentYear} Lab-9 by <span>Bohdan Shevchenko</span>
        </p>
        <p>
          Built with <span>React</span> + <span>Vite</span>
        </p>
      </div>
    </>
  )
}

export default Footer

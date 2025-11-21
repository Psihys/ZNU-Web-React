import React, { useState } from 'react'
import ContactFormBasic from '../sections/ContactFormBasic'
import ContactFormRHF from '../sections/ContactFormRHF.jsx'

import './pagesStyles/ContactsPage.css'

const ContactsPage = () => {
  const [mode, setMode] = useState('basic')
  return (
    <div className='contacts-page__container'>
      <h2 className='main__title'>Контакти</h2>
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1rem' }}>
        <button
          type='button'
          className='contact-form__button'
          onClick={() => setMode('basic')}
          disabled={mode === 'basic'}
        >
          React FormData
        </button>
        <button
          type='button'
          className='contact-form__button'
          onClick={() => setMode('rhf')}
          disabled={mode === 'rhf'}
        >
          RHF JSON
        </button>
      </div>

      {mode === 'basic' ? <ContactFormBasic /> : <ContactFormRHF />}
    </div>
  )
}

export default ContactsPage

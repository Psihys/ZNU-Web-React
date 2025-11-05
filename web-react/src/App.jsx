import './App.css'
import './Root.css'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactsPage from './pages/ContactsPage'

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className='layout'>
      <header className='header'>
        <Header />
      </header>

      <aside className='sidebar'>
        <SideBar />
      </aside>
      <main className=' main'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>
      </main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default App

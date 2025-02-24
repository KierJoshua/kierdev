import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Socials from './components/Socials'

const KRoot = () => {
  return (
    <div className='bg-custom-gradient flex flex-col text-white font-poppins w-full overflow-hidden'>
      <Header />
      <Socials />
      <Outlet />
      <Footer />
    </div>
  )
}

export default KRoot
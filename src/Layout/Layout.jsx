import React from 'react'
import BackTopButton from '../components/BackTopButton'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row flex-no-wrap  scroll-smooth bg-primary '>
      <Sidebar ></Sidebar>
      <div className='flex w-full h-full bg-primary '>
      <div className='w-full h-full flex flex-col '>

      <Navbar ></Navbar>
        <main className="ml-48  bg-primary    ">{children}</main>
        </div>
        

      </div>

      <BackTopButton ></BackTopButton>
    </div>
  )
}

export default Layout
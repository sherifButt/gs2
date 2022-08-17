import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const Layout = ({ children }) => {
   return (
      <div className='flex h-screen flex-col gap-4'>
         <Header />
         <Navbar />
         <div className='container mx-auto flex flex-grow flex-col md:flex-row md:justify-between  '>
            <LeftSidebar />
            <main className='relative w-full md:w-6/12 order-2 md:order-none  '>
               {children}
            </main>
            <RightSidebar />
         </div>
         <Footer />
      </div>
   )
}

export default Layout

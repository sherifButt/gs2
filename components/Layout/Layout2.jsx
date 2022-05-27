import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import '../../styles/L4.module.css'

const Layout = ({ children }) => {
   return (
      <div className=' flex  gap-4 body'>
         <Header />

         <div className='container mx-auto flex flex-grow  flex-col md:flex-row md:justify-start gap-4  '>
            <LeftSidebar className='bg-red-200 basis-60 hidden md:block h-screen ' />
            <div className='flex justify-between w-full'>
               <div className=' overflow-hidden h-screen'>
                  <Navbar className='bg-yellow-200 w-full' />
                  <main className=' overflow-scroll h-screen scroll-smooth mx-auto  scrollbar-hide'>
                     {children}
                  </main>
               </div>
               <RightSidebar className='overflow-scroll bg-indigo-200  basis-60 order-1 md:order-none hidden md:block h-screen scrollbar-hide' />
            </div>
         </div>
      </div>
   )
}

export default Layout

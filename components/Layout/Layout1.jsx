import React from 'react'
import Header from './Header'
import Navbar from '../navbar-2'


const Layout = ({
   children,
   rightSidebar,
   leftSidebar,
   footer,
   bannerImagePath,
}) => {
   

   //console.log('bannerImagePath', bannerImagePath)
   return (
      <div className='relative bg-gray-100 flex flex-col grow z-0'>
         <Header />
         <Navbar className=' bg-yellow-400 w-full flex justify-between h-20 fixed top-0 items-center shadow z-10' />
         {children}
      </div>
   )
}

export default Layout

// Full page no sidebars

import React from 'react'
import Header from './Header'
import Navbar from '../navbar-2'
import Footers from '../footer/Footer2'
import LeftSidebar from '../left-sidebar/left-sidebar-1'
import RightSidebar from '../right-sidebar/right-sidebar-1'

const Layout = ({ children, rightSidebar, leftSidebar,footer }) => {
   const _RightSidebar = rightSidebar || RightSidebar
   const _LeftSidebar = leftSidebar || LeftSidebar
   const _Footer = footer || Footers

   return (
      <div className='flex flex-col relative h-screen bg-white grow z-0'>
         <Header />
         <Navbar className=' bg-yellow-400  w-full flex  justify-between  h-20  fixed top-0 items-center shadow z-10' />
         <div className='md:container mx-auto max-auto flex grow '>
            <div className=' flex flex-row mx-auto grow justify-center gap-4 flex-wrap md:flex-nowrap h-full max-w-5xl'>
               {/* Middle */}
               <div className='w-full sm:w-600   order-3 md:order-none '>
                  <main className='flex flex-col order-1 mt-28 '>
                     {children}
                  </main>
               </div>
               {/* /Middle */}
            </div>
         </div>
         <div className='md:container mx-auto max-auto flex flex-grow'>
            <_Footer />
         </div>
      </div>
   )
}

export default Layout

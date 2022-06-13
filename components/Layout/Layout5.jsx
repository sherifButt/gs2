import React from 'react'
import Header from './Header'
import Navbar from '../navbar-2'
import Footer from './Footer'
import LeftSidebar from '../left-sidebar/left-sidebar-1'
import RightSidebar from '../right-sidebar/right-sidebar-1'

const Layout = ( { children, rightSidebar, leftSidebar } ) => {
   
   const _RightSidebar = rightSidebar || RightSidebar
   const _LeftSidebar = leftSidebar||LeftSidebar
   return (
      <div className='relative bg-gray-100  flex  grow z-0'>
         <Header />
         <Navbar className='bg-yellow-400  w-full flex  justify-between  h-20  fixed top-0 items-center shadow z-10' />
         <div className='md:container mx-auto max-auto flex grow '>
            <div className=' flex flex-row mx-auto grow justify-center gap-4 flex-wrap md:flex-nowrap h-full max-w-5xl'>
               
               <_LeftSidebar className='w-80 pt-24  xs:w-88 xl:w-96 hidden lg:block  -mt-24 h-screen mb-auto   sticky top-0' />
              
               {/* Middle */}
               <div className='w-full sm:w-600   order-3 md:order-none '>
                  <main className='flex flex-col order-1 md:mt-28 '>
                     {children}
                  </main>
               </div>
               {/* /Middle */ }
               
               <_RightSidebar className='flex  grow  w-full  md:w-auto lg:w-350 mt-28  order-2 md:order-none ' />
              
            </div>
         </div>
      </div>
   )
}

export default Layout

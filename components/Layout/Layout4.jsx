// 3 (Extra wide) vertical columns middle infinity scroll for (posts/comments/campaigns)

import React from 'react'
import Header from './Header'
import Navbar from '../navbar-2'
import Footer from './Footer'
import LeftSidebar from '../left-sidebar/left-sidebar-1'
import RightSidebar from '../right-sidebar/right-sidebar-1'

const Layout = ({ children }) => {
   return (
      <div className='bg-gray-100 relative  '>
         <Header />
         <Navbar className='bg-yellow-400 w-full flex justify-between  h-20  z-50 fixed top-0' />
         <div className='container mx-auto max-auto '>
            <div className=' flex flex-row justify-center flex-wrap md:flex-nowrap h-full'>
               {/* Left */}
               <LeftSidebar className='w-60 pt-24  xs:w-88 xl:w-96 hidden md:block  -mt-24 h-screen mb-auto   sticky top-0' />
               {/* /Left */}

               {/* Middle */}
               <div className='w-full sm:w-600  relative order-3 md:order-none'>
                  <main className='flex flex-col order-1 mt-28'>
                     {children}
                  </main>
               </div>
               {/* /Middle */}

               {/* Right */}
               <RightSidebar className='  w-full  md:w-auto lg:w-350 md:h-full top-0 absolute md:sticky order-2 md:order-none pt-24' />
               {/* /Right */}
            </div>
         </div>
      </div>
   )
}

export default Layout

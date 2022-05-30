import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import LeftSidebar from '../left-sidebar-1'
import RightSidebar from '../right-sidebar-1'

const Layout = ({ children }) => {
   return (
      <div className='bg-gray-100 relative flex grow '>
         <Header />
         <Navbar className='bg-yellow-400  w-full flex justify-between  h-20  z-50 fixed top-0' />
         <div className='md:container mx-auto max-auto flex grow '>
            <div className=' flex flex-row mx-auto grow justify-center gap-4 flex-wrap md:flex-nowrap h-full max-w-5xl'>
               {/* Left */}
               <LeftSidebar className='w-80 pt-24  xs:w-88 xl:w-96 hidden lg:block  -mt-24 h-screen mb-auto   sticky top-0' />
               {/* /Left */}

               {/* Middle */}
               <div className='w-full sm:w-600  relative order-3 md:order-none'>
                  <main className='flex flex-col order-1 md:mt-28'>
                     {children}
                  </main>
               </div>
               {/* /Middle */}

               {/* Right */}
               <RightSidebar className='flex  grow  w-full  md:w-auto lg:w-350 mt-28  order-2 md:order-none' />

               {/* /Right */}
            </div>
         </div>
      </div>
   )
}

export default Layout

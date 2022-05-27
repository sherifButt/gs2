import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const Layout = ({ children }) => {
   return (
      <div className='bg-gray-100 relative h-full'>
         <div className=' max-auto '>
            <div className='flex flex-row justify-center flex-wrap md:flex-nowrap'>
               <Header />

               {/* Left */}
               <LeftSidebar className='w-68  xs:w-88 xl:w-275 hidden md:block h-screen bg-green-200 sticky top-0'>
                  <div className='bg-yellow-200 h-10'>
                     Navbar
                  </div>
               </LeftSidebar>
               {/* /Left */}

               {/* Middle */}
               <Navbar className='bg-red-200 flex justify-between sticky top-0 h-10 md:hidden block w-full z-50 order-1 md:order-none' />
               <div className='w-full sm:w-600  relative order-3 md:order-none'>
                  <Navbar className='bg-red-200 flex justify-between sticky top-0 h-10 hidden md:block' />
                  <main className='flex flex-col order-1'>
                     {children}
                  </main>
               </div>
               {/* /Middle */}

               {/* Right */}
               <RightSidebar className='bg-green-200  w-auto md:w-290 lg:w-350 h-full top-0 sticky order-2 md:order-none'>
                  <div className='bg-yellow-200 sticky h-10 top-0 hidden md:block'>
                     Navbar
                  </div>
               </RightSidebar>
               {/* /Right */}
            </div>
         </div>
      </div>
   )
}

export default Layout

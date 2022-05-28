import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const Layout = ({ children }) => {
   return (
      <div className='bg-gray-100 relative '>
         <Header />
         <Navbar className='bg-red-200 w-full flex justify-between  h-10  z-50 fixed top-0' />
         <div className=' max-auto '>
            <div className='flex flex-row justify-center flex-wrap md:flex-nowrap h-full'>
              
               {/* Left */ }
               <LeftSidebar className='w-68 pt-10  xs:w-88 xl:w-275 hidden md:block flex-1 -mt-24 h-screen mb-auto  bg-green-200 sticky top-0' />
               {/* /Left */}

               {/* Middle */}
               <div className='w-full sm:w-600  relative order-3 md:order-none'>
                  <main className='flex flex-col order-1 mt-20'>
                     {children}
                  </main>
               </div>
               {/* /Middle */}

               {/* Right */}
               <RightSidebar className='bg-green-200  w-full  md:w-auto lg:w-350 md:h-full top-0 absolute md:sticky order-2 md:order-none pt-10' />
               {/* /Right */ }
               
            </div>
         </div>
      </div>
   )
}

export default Layout
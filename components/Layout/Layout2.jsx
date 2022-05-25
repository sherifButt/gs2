import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
   return (
      <div className=' h-screen flex flex-col'>
         <Header />
         <Navbar />
         <div className='container mx-auto'>
            <main className='relative py-4 px-4   flex-grow h-screen'>
               {children}
            </main>
            
         </div>
      </div>
   )
}

export default Layout

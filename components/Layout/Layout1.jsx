import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Nav from './Navbar'

const Layout = ({ children }) => {
   return (
      <div className=' h-screen flex flex-col'>
         <Header />
         <Nav />
         <div className='container mx-auto'>
            <main className='relative   py-4 px-4   flex-grow h-screen'>
               {children}
            </main>
            <Footer />
         </div>
      </div>
   )
}

export default Layout
